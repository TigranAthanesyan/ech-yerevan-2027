import { getDictionary } from "../dictionaries";

export async function Venue() {
  const { venue } = await getDictionary();

  return (
    <section id="venue" className="bg-ech-navy py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{venue.title}</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xl font-bold lg:text-3xl">{venue.name}</p>
            <p className="mt-2 text-sm tracking-widest uppercase text-white/80">
              {venue.address}
            </p>
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-accent px-6 py-3 text-lg font-bold hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-8 lg:py-4 lg:text-xl"
            >
              {venue.mapLink} ↗
            </a>
          </div>

          <div className="border-l-8 border-brand bg-ech-blue-deep px-5 py-4 md:px-8 md:py-6">
            <h3 className="text-xl font-bold lg:text-2xl">
              {venue.gettingThereTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed">{venue.airport}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
