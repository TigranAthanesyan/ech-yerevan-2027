"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Box = { top: number; left: number; width: number; height: number };
// "measuring": the view is laid out invisibly at its final width, to find the height its content needs.
type Phase = "closed" | "measuring" | "opening" | "open" | "closing";

type Props = {
  name: string;
  // Shorter name for the narrow phone card, when the full one does not fit. The open view uses `name`.
  shortName?: string;
  description: string;
  more: string;
  mixedLabel?: string;
  photo: {
    src: string;
    width: number;
    height: number;
    author: string;
    source: string;
  };
  licenceUrl: string;
  labels: {
    open: string;
    close: string;
    photo: string;
    source: string;
    licence: string;
    cropped: string;
  };
};

const DURATION = 450;

// A discipline card that grows into a larger view on click. The grid keeps its layout: the card
// is only hidden while a fixed-position copy animates from the card's rectangle to the centre of
// the screen (and back). The copy is portalled to <body> because the Reveal wrapper has a transform,
// which would otherwise become the containing block of a `position: fixed` child.
export function DisciplineCard({
  name,
  shortName,
  description,
  more,
  mixedLabel,
  photo,
  licenceUrl,
  labels,
}: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [phase, setPhase] = useState<Phase>("closed");
  const [from, setFrom] = useState<Box | null>(null);
  const [to, setTo] = useState<Box | null>(null);
  // True once the opening animation is done; before that the text area must not show a scrollbar.
  const [settled, setSettled] = useState(false);
  const settleTimer = useRef<number>(0);
  // Off after closing, until the pointer enters or leaves a card, so the card does not zoom the moment it lands under the pointer.
  const [hoverZoom, setHoverZoom] = useState(true);

  const duration = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : DURATION;

  // Decodes the full-size photo ahead of the animation. Without this, a phone decodes it on the
  // first open, in the middle of the animation, and the first frames stutter.
  const decoded = useRef<Promise<void> | null>(null);
  const warm = () => {
    if (!decoded.current) {
      const img = new window.Image();
      img.src = photo.src;
      decoded.current = img.decode().catch(() => {});
    }
    return decoded.current;
  };

  const open = async () => {
    if (phase !== "closed") return;
    // Never wait more than 400 ms for the decode.
    await Promise.race([
      warm(),
      new Promise((resolve) => window.setTimeout(resolve, 400)),
    ]);
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const width = Math.min(window.innerWidth - 32, 760);
    setFrom({ top: r.top, left: r.left, width: r.width, height: r.height });
    // The height is filled in once the content has been measured.
    setTo({ top: 0, left: (window.innerWidth - width) / 2, width, height: 0 });
    setPhase("measuring");
  };

  // Runs before the browser paints, so the invisible measuring pass is never seen.
  useLayoutEffect(() => {
    if (phase !== "measuring" || !to) return;
    const natural = dialogRef.current?.offsetHeight ?? 0;
    const height = Math.min(natural, window.innerHeight - 32);
    setTo({ ...to, top: (window.innerHeight - height) / 2, height });
    setPhase("opening");
  }, [phase, to]);

  // Two frames, so the browser paints the start rectangle before the transition to the end one.
  useEffect(() => {
    if (phase !== "opening") return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        setPhase("open");
        closeRef.current?.focus({ preventScroll: true });
        settleTimer.current = window.setTimeout(
          () => setSettled(true),
          duration(),
        );
      });
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [phase]);

  const close = useCallback(() => {
    if (phase !== "open") return;
    // The page can scroll while the view is open, so shrink back to where the card is now.
    const r = cardRef.current?.getBoundingClientRect();
    if (r) setFrom({ top: r.top, left: r.left, width: r.width, height: r.height });
    window.clearTimeout(settleTimer.current);
    setSettled(false);
    setPhase("closing");
    window.setTimeout(() => {
      setHoverZoom(false);
      setPhase("closed");
      triggerRef.current?.focus({ preventScroll: true });
    }, duration());
  }, [phase]);

  useEffect(() => {
    if (phase === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const items = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, a[href]",
        );
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    // The saved rectangles go stale on resize, so just drop back to the closed card.
    const onResize = () => setPhase("closed");
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [phase, close]);

  const measuring = phase === "measuring";
  const box = measuring
    ? to && { top: to.top, left: to.left, width: to.width, height: "auto" }
    : phase === "open"
      ? to
      : from;
  // Photo height is set explicitly (and animated with the box) so it matches the card at both ends.
  // In the open view on a phone the photo is wider than tall (shorter than the card's 4:3), so the text fits without scrolling.
  const openRatio = to && to.width < 600 ? 0.6 : 0.75;
  const imageHeight =
    measuring && to
      ? to.width * openRatio
      : phase === "open" && to
      ? Math.min(to.width * openRatio, to.height * 0.6)
      : (from?.width ?? 0) * 0.75;
  const expanded = phase === "open";
  // The measuring pass needs the long text visible, or the height would be too small.
  const showMore = expanded || measuring;

  return (
    <>
      <article
        ref={cardRef}
        onPointerEnter={() => {
          setHoverZoom(true);
          warm();
        }}
        onPointerLeave={() => setHoverZoom(true)}
        className={`group relative flex h-full flex-col bg-ech-grey ${
          phase === "closed" ? "" : "invisible"
        }`}
      >
        <div className="relative overflow-hidden">
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt=""
            sizes="(min-width: 1280px) 400px, 50vw"
            className={`aspect-4/3 w-full object-cover transition-transform duration-500 motion-reduce:transition-none ${
              hoverZoom ? "group-hover:scale-105" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className="absolute right-2 top-2 grid size-7 place-items-center bg-white/90 text-brand sm:right-3 sm:top-3 sm:size-9"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </div>
        {/* Phone: name only (two columns); the description is shown in the open view. */}
        <div className="flex flex-1 flex-col px-3 py-4 min-[400px]:px-4 sm:px-5 sm:py-5">
          {/* hyphens-auto uses the page language; wrap-break-word is the fallback for a word that is still too wide (e.g. "Հավասարակշռության"). */}
          <h4 className="text-[0.9375rem] font-bold min-[400px]:text-base wrap-break-word hyphens-auto sm:text-lg lg:text-xl">
            {shortName ? (
              <>
                <span className="sm:hidden">{shortName}</span>
                <span className="max-sm:hidden">{name}</span>
              </>
            ) : (
              name
            )}
          </h4>
          <p className="mt-1 hidden text-base sm:block">{description}</p>
          {mixedLabel && (
            <p className="mt-auto hidden pt-4 text-sm font-bold sm:block">
              <span className="inline-block bg-accent px-2 py-0.5 text-white">
                {mixedLabel}
              </span>
            </p>
          )}
        </div>
        <button
          ref={triggerRef}
          type="button"
          onClick={open}
          onPointerDown={warm}
          onFocus={warm}
          aria-label={`${name}: ${labels.open}`}
          aria-haspopup="dialog"
          className="absolute inset-0 cursor-zoom-in focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
      </article>

      {phase !== "closed" &&
        box &&
        createPortal(
          <div className="fixed inset-0 z-50">
            <div
              onClick={close}
              className="absolute inset-0 bg-ech-navy/70 transition-opacity motion-reduce:transition-none"
              style={{
                opacity: expanded ? 1 : 0,
                transitionDuration: `${DURATION}ms`,
              }}
            />
            <div
              // A separate element for the measuring pass, so the real one starts at the card with no transition.
              key={measuring ? "measuring" : "view"}
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="absolute flex flex-col overflow-hidden bg-ech-grey shadow-2xl motion-reduce:transition-none"
              style={{
                ...box,
                visibility: measuring ? "hidden" : undefined,
                transitionProperty: "top, left, width, height",
                transitionDuration: `${DURATION}ms`,
                transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <div
                className="relative w-full flex-none transition-[height] motion-reduce:transition-none"
                style={{
                  height: imageHeight,
                  transitionDuration: `${DURATION}ms`,
                  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <Image
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt=""
                  sizes="760px"
                  className="size-full object-cover"
                />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label={labels.close}
                  className="absolute right-3 top-3 grid size-10 cursor-pointer place-items-center bg-white/90 text-brand transition-opacity focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  style={{ opacity: expanded ? 1 : 0 }}
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              {/* Same structure as the card (heading, text, tag at the bottom), so the last frame of the
                  closing animation lines up with the real card. */}
              <div
                className={`flex min-h-0 flex-1 flex-col overscroll-contain px-3 py-4 min-[400px]:px-4 sm:px-5 sm:py-5 ${
                  settled ? "overflow-y-auto" : "overflow-hidden"
                }`}
              >
                {/* On a phone the name grows once the view is open, so it stands out from the text below. */}
                <h4
                  id={titleId}
                  className={`font-bold wrap-break-word hyphens-auto transition-[font-size] duration-300 motion-reduce:transition-none sm:text-lg lg:text-xl ${
                    showMore ? "text-xl" : "text-[0.9375rem] min-[400px]:text-base"
                  }`}
                >
                  {shortName && !showMore ? (
                    <>
                      <span className="sm:hidden">{shortName}</span>
                      <span className="max-sm:hidden">{name}</span>
                    </>
                  ) : (
                    name
                  )}
                </h4>
                {/* On a phone the card has no description, so hide it here until the view is open. */}
                <p
                  className={`text-base sm:mt-1 ${
                    showMore ? "mt-4" : "max-sm:hidden"
                  }`}
                >
                  {description}
                </p>
                {/* Collapsed to zero height until open, so it takes no space in the card-sized state. */}
                <div
                  className="grid transition-[grid-template-rows,opacity] motion-reduce:transition-none"
                  style={{
                    gridTemplateRows: showMore ? "1fr" : "0fr",
                    opacity: expanded ? 1 : 0,
                    transitionDuration: `${DURATION}ms`,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-base sm:mt-4">{more}</p>
                    <p className="mt-6 text-xs">
                      {labels.photo}:{" "}
                      <a
                        href={photo.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brand"
                      >
                        {photo.author} / {labels.source}
                      </a>{" "}
                      ·{" "}
                      <a
                        href={licenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brand"
                      >
                        {labels.licence}
                      </a>{" "}
                      ({labels.cropped})
                    </p>
                  </div>
                </div>
                {mixedLabel && (
                  <p
                    className={`mt-auto pt-4 text-sm font-bold ${
                      showMore ? "" : "max-sm:hidden"
                    }`}
                  >
                    <span className="inline-block bg-accent px-2 py-0.5 text-white">
                      {mixedLabel}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
