import { getDictionary } from "../dictionaries";

export async function Summary() {
  const { summary } = await getDictionary();

  return (
    <section className="pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 text-center md:px-8">
        <div aria-hidden className="mx-auto mb-6 h-1.5 w-16 bg-accent" />
        <p className="mx-auto max-w-3xl text-lg text-balance leading-relaxed font-bold lg:text-2xl lg:leading-relaxed">
          {summary.text}
        </p>
      </div>
    </section>
  );
}
