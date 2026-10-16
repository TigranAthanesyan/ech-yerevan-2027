import { getDictionary } from "../dictionaries";

export async function Disciplines() {
  const { disciplines } = await getDictionary();

  return (
    <section id="disciplines" className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{disciplines.title}</h2>
        <p className="mt-4 max-w-2xl text-base">{disciplines.intro}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          {disciplines.groups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b-8 border-brand pb-3 text-2xl font-bold lg:text-3xl">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.apparatus.map((a) => (
                  <li key={a.name} className="bg-ech-grey px-5 py-4">
                    <p className="text-lg font-bold text-brand lg:text-xl">
                      {a.name}
                    </p>
                    <p className="mt-1 text-base">{a.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
