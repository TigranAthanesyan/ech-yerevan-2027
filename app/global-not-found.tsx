import type { Metadata } from "next";
import { defaultLocale, locales } from "./[lang]/dictionaries";
import en from "./[lang]/dictionaries/en";
import hy from "./[lang]/dictionaries/hy";
import "./globals.css";

export const metadata: Metadata = {
  title: "404: Page not found / Էջը չի գտնվել",
  robots: { index: false },
};

const content = { en: en.notFound, hy: hy.notFound };

// Fallback for URLs outside /en/ and /hy/ (served as /404.html). The visitor's language is unknown, so both are shown.
// It replaces the root layout, so it carries its own <html> and <body>.
export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <main className="flex min-h-screen items-center bg-brand text-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <p className="inline-block bg-accent px-3 py-1 text-sm font-bold tracking-widest uppercase lg:text-base">
              {en.notFound.tag}
            </p>
            <div className="mt-6 grid gap-10 md:grid-cols-2">
              {locales.map((lang) => (
                <section key={lang} lang={lang}>
                  <h1 className="text-3xl font-bold lg:text-4xl">
                    {content[lang].title}
                  </h1>
                  <p className="mt-4 text-lg text-white/90">
                    {content[lang].text}
                  </p>
                  <a
                    href={`/${lang}/`}
                    className="mt-6 inline-block bg-white px-6 py-3 font-bold text-ech-navy hover:bg-ech-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {content[lang].home}
                  </a>
                </section>
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
