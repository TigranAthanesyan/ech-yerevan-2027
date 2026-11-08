import { getDictionary } from "../dictionaries";

export async function Tickets() {
  const { tickets } = await getDictionary();

  return (
    <section id="tickets" className="bg-ech-blue-soft py-12 text-white lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <p className="inline-block bg-accent px-3 py-1 text-sm font-bold tracking-widest uppercase lg:text-base">
          {tickets.tag}
        </p>
        <h2 className="mt-4 text-3xl font-bold lg:text-5xl">{tickets.title}</h2>
        <p className="mt-6 text-lg font-semibold text-white/90 lg:text-xl">
          {tickets.status}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
          {tickets.note}
        </p>
      </div>
    </section>
  );
}
