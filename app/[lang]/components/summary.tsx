import { getDictionary } from "../dictionaries";

export async function Summary() {
  const { summary } = await getDictionary();

  return (
    <section className="pt-16 lg:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <p className="max-w-4xl text-xl leading-relaxed font-bold lg:text-3xl lg:leading-snug">
          {summary.text}
        </p>
      </div>
    </section>
  );
}
