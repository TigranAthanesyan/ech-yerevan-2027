import { getDictionary } from "../dictionaries";

export async function Programme() {
  const { programme } = await getDictionary();

  return (
    <section id="programme" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{programme.title}</h2>
        <p className="mt-4 max-w-2xl text-base">{programme.note}</p>

        <ol className="mt-10 space-y-3">
          {programme.sessions.map((s) => (
            <li
              key={`${s.iso}-${s.session}`}
              className="grid gap-1 border-l-8 border-brand bg-white px-5 py-4 md:grid-cols-[16rem_1fr] md:items-center md:gap-8 md:px-8 md:py-5"
            >
              <time dateTime={s.iso} className="font-bold">
                <span className="block text-xl text-brand lg:text-2xl">
                  {s.date}
                </span>
                <span className="block text-sm tracking-widest uppercase">
                  {s.day}
                </span>
              </time>
              <p className="text-lg font-bold lg:text-xl">{s.session}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
