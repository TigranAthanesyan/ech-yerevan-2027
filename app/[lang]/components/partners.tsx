import Image from "next/image";
import { getDictionary } from "../dictionaries";

// Partners are plain tiles, all the same size, so no partner looks bigger than another (EBU's
// visibility must be no less than any other sponsor's). Organisers live in the footer.
// EBU first. Add the official apparatus supplier (Gymnova or Spieth) once confirmed.
const partners = [
  {
    id: "eurovision-sport",
    src: "/images/partner-logos/eurovision-sport.png",
    width: 549,
    height: 157,
  },
] as const;

export async function Partners() {
  const { partners: t } = await getDictionary();

  return (
    <section id="partners" className="bg-ech-grey py-10 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">
            {t.partnersHeading}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            {partners.map(({ id, src, width, height }) => {
              const p = t.partners[id];
              return (
                <li key={id} className="w-56">
                  <div className="flex h-28 items-center justify-center border border-ech-navy/15 bg-white p-4">
                    <Image
                      src={src}
                      alt={p.name}
                      width={width}
                      height={height}
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm">{p.role}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
