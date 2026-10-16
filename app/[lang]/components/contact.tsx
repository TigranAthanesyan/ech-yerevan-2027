import { getDictionary } from "../dictionaries";

export async function Contact() {
  const { contact } = await getDictionary();

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{contact.title}</h2>
        <p className="mt-4 max-w-2xl text-base">{contact.note}</p>
        <p className="mt-8 text-base">
          {contact.federationLabel}:{" "}
          <a
            href="https://armgymnastics.am"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand underline underline-offset-4 hover:text-accent"
          >
            {contact.federationLink} ↗
          </a>
        </p>
      </div>
    </section>
  );
}
