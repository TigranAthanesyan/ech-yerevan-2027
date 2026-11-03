import Image from "next/image";
import type { Locale } from "../dictionaries";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Round flag links for the header; each goes to the other language's page.
export function LanguageSwitcher({
  current,
  locales,
  label,
  names,
}: {
  current: Locale;
  locales: readonly Locale[];
  label: string;
  names: Record<Locale, string>;
}) {
  return (
    <ul aria-label={label} className="flex gap-3">
      {locales.map((locale) => (
        <li key={locale}>
          <a
            href={`/${locale}/`}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === current ? "true" : undefined}
            aria-label={names[locale]}
            title={names[locale]}
            className={`block size-8 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-brand transition-opacity ${focusRing} ${
              locale === current
                ? "ring-white"
                : "ring-white/40 hover:ring-white/80"
            }`}
          >
            <Image
              src={`/images/flags/${locale}.svg`}
              alt=""
              width={32}
              height={32}
              className="size-full object-cover"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
