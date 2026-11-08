import { getDictionary } from "../dictionaries";

export async function Faq() {
  const { faq } = await getDictionary();

  // FAQ structured data (JSON-LD) so search engines can read the questions. `<` is escaped to keep the script tag safe.
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }).replace(/</g, "\\u003c");

  return (
    <section id="faq" className="bg-white pt-16 pb-4 lg:pt-24 lg:pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{faq.title}</h2>

        <div className="mt-10 max-w-3xl space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group bg-ech-grey"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:px-8 md:py-5 lg:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-2xl text-accent group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-base leading-relaxed md:px-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
