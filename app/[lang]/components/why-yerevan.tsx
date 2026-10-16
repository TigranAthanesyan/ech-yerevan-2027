import { getDictionary } from "../dictionaries";

export async function WhyYerevan() {
  const { whyYerevan } = await getDictionary();

  return (
    <section id="why-yerevan" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{whyYerevan.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">
          {whyYerevan.intro}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyYerevan.highlights.map((h) => (
            <li key={h.title} className="border-t-8 border-accent bg-white p-6">
              <h3 className="text-xl font-bold text-brand lg:text-2xl">
                {h.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
