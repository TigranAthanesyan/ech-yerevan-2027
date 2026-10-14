import Image from "next/image";
import { getDictionary, locales, type Locale } from "../dictionaries";

// The pill shows the domain, not the translated name, so its width is the same in hy and en
// and the language switch does not move when the language changes.
const FEDERATION_HOST = "armgymnastics.am";

const navLinks = [
  { id: "programme", href: "#programme" },
  { id: "venue", href: "#venue" },
  { id: "contact", href: "#contact" },
] as const;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export async function Header({ lang }: { lang: Locale }) {
  const { header } = await getDictionary();

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href={`/${lang}/`} className={focusRing}>
          <Image
            src="/images/logo-ech-yerevan-2027-flat.png"
            alt={header.logoAlt}
            width={249}
            height={192}
            priority
            className="h-18 w-auto"
          />
        </a>

        <nav aria-label={header.navLabel} className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {navLinks.map(({ id, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className={`py-2 hover:underline underline-offset-8 ${focusRing}`}
                >
                  {header.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ul
            aria-label={header.languageLabel}
            className="flex text-sm font-bold"
          >
            {locales.map((locale) => (
              <li key={locale}>
                <a
                  href={`/${locale}/`}
                  lang={locale}
                  aria-current={locale === lang ? "true" : undefined}
                  className={`block px-3 py-2 ${focusRing} ${
                    locale === lang
                      ? "bg-white text-brand"
                      : "hover:underline underline-offset-4"
                  }`}
                >
                  {header.languages[locale]}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`https://${FEDERATION_HOST}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 border border-white/60 px-3 py-2 text-sm hover:bg-white hover:text-brand ${focusRing}`}
          >
            <span className="sr-only">{header.federation}: </span>
            <span className="hidden lg:inline">{FEDERATION_HOST}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
