import Image from "next/image";
import { getDictionary, type Locale } from "../dictionaries";

const FEDERATION_HOST = "armgymnastics.am";

export async function Footer({ lang }: { lang: Locale }) {
  const { header, footer } = await getDictionary();

  return (
    <footer className="bg-ech-navy py-12 text-white lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <a
          href={`/${lang}/`}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Image
            src="/images/logo-ech-yerevan-2027-flat.png"
            alt={header.logoAlt}
            width={249}
            height={192}
            className="h-20 w-auto"
          />
        </a>

        <div className="md:text-right">
          <p className="text-base">
            {footer.federationLabel}:{" "}
            <a
              href={`https://${FEDERATION_HOST}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:text-ech-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {FEDERATION_HOST} ↗
            </a>
          </p>
          <p className="mt-3 max-w-md text-sm text-white/80 md:ml-auto">
            {footer.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
