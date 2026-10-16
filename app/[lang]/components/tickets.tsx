import { getDictionary } from "../dictionaries";

export async function Tickets() {
  const { tickets } = await getDictionary();

  return (
    <section id="tickets" className="bg-brand py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{tickets.title}</h2>
        <p className="mt-6 text-xl font-bold text-white lg:text-3xl">
          {tickets.status}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          {tickets.note}
        </p>
      </div>
    </section>
  );
}
