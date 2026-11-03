import Image from "next/image";
import { getDictionary, type Locale } from "../dictionaries";

// Every column shows all of its fields. Phone numbers are in international format.
// Addresses are in the dictionaries (footer.addresses): the federation's differs per language.
const contacts: {
  id: "european-gymnastics" | "armenian-gymnastics-federation";
  src: string;
  width: number;
  height: number;
  host: string;
  url: string;
  email: string;
  phone: string;
  socials: { name: string; icon: string; href: string }[];
}[] = [
  {
    id: "european-gymnastics",
    src: "/images/partner-logos/european-gymnastics.png",
    width: 424,
    height: 200,
    host: "europeangymnastics.com",
    // The site only resolves with www.
    url: "https://www.europeangymnastics.com",
    email: "info@europeangymnastics.com",
    phone: "+41 21 613 10 20",
    socials: [
      { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/EuropeanGymnastics" },
      { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/europeangymnastics" },
      { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@europeangymnastics" },
      { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/@europeangymnastics" },
    ],
  },
  {
    id: "armenian-gymnastics-federation",
    src: "/images/partner-logos/armenian-gymnastics-federation.jpg",
    width: 940,
    height: 940,
    host: "armgymnastics.am",
    url: "https://armgymnastics.am",
    email: "info@armgymnastics.am",
    phone: "+374 41 288868",
    // Same profiles as armgymnastics.am (lib/social.ts in that project).
    socials: [
      { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/armgymfed" },
      { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/gymnastics_federation_arm" },
      { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@armgymnastics" },
    ],
  },
];

const EVENT_EMAIL = "info@echyerevan2027.com";

const linkClass =
  "underline underline-offset-4 hover:text-ech-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export async function Footer({ lang }: { lang: Locale }) {
  const { header, partners, footer } = await getDictionary();

  return (
    <footer id="contact" className="bg-ech-navy py-12 text-white lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8">
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">{footer.title}</h2>
          <ul className="mt-8 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-2 md:gap-0">
            {contacts.map(({ id, src, width, height, host, url, email, phone, socials }) => {
              const o = partners.organisers[id];
              return (
                <li
                  key={id}
                  className="flex flex-col gap-5 border-t border-white/20 pt-10 first:border-t-0 first:pt-0 md:border-t-0 md:px-8 md:pt-0 md:first:pl-0 md:last:border-l md:last:pr-0"
                >
                  <div className="flex h-24 w-40 items-center justify-center bg-white p-3">
                    <Image
                      src={src}
                      alt={o.name}
                      width={width}
                      height={height}
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                      {o.role}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{o.name}</h3>
                  </div>
                  <ul className="flex flex-col gap-2 text-base">
                    <li>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-bold ${linkClass}`}
                      >
                        {host} ↗
                      </a>
                    </li>
                    <li>
                      <address className="not-italic">
                        {footer.addresses[id].map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </li>
                    <li>
                      {footer.emailLabel}:{" "}
                      <a href={`mailto:${email}`} className={linkClass}>
                        {email}
                      </a>
                    </li>
                    <li>
                      {footer.phoneLabel}:{" "}
                      <a
                        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                        className={linkClass}
                      >
                        {phone}
                      </a>
                    </li>
                  </ul>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                      {footer.followUs}
                    </p>
                    <ul className="mt-3 flex gap-3">
                      {socials.map(({ name, icon, href }) => (
                        <li key={name}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${o.name}: ${name}`}
                            title={name}
                            className="block transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            <Image src={`/images/social/${icon}.svg`} alt="" width={32} height={32} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/20 pt-10 text-center">
          <a
            href={`/${lang}/`}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Image
              src="/images/logo/ech-yerevan-2027-logo-white.svg"
              alt={header.logoAlt}
              width={94}
              height={74}
              className="h-20 w-auto"
            />
          </a>
          <p className="text-base">
            {footer.eventLabel}:{" "}
            <a
              href={`mailto:${EVENT_EMAIL}`}
              className={`font-bold ${linkClass}`}
            >
              {EVENT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
