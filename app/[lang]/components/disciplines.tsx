import { getDictionary } from "../dictionaries";
import { DisciplineCard } from "./discipline-card";
import { LICENCE_URL, disciplinePhotos } from "./discipline-photos";
import { Reveal } from "./reveal";

export async function Disciplines() {
  const { disciplines } = await getDictionary();
  const { tags, photos, details } = disciplines;
  const authors = [
    ...new Set(Object.values(disciplinePhotos).map((p) => p.author)),
  ];

  return (
    <section id="disciplines" className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{disciplines.title}</h2>
        <p className="mt-4 max-w-2xl text-base">{disciplines.intro}</p>

        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {disciplines.stats.map((s) => (
            <div
              key={s.label}
              className="bg-ech-grey px-5 py-4 max-md:last:col-span-2"
            >
              <dt className="text-4xl font-bold text-brand lg:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-3xl text-sm">{disciplines.tagsLegend}</p>

        {disciplines.groups.map((group) => (
          <div key={group.id} className="mt-10">
            <h3 className="text-2xl font-bold lg:text-3xl">{group.title}</h3>
            <ul
              className={`mt-4 grid gap-3 sm:grid-cols-2 ${
                group.id === "men" ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {group.apparatus.map((a, i) => {
                return (
                  <li key={a.id}>
                    <Reveal delay={(i % 4) * 80} className="h-full">
                      <DisciplineCard
                        name={a.name}
                        description={a.description}
                        more={a.more}
                        mixedLabel={a.mixed ? tags.mixed : undefined}
                        photo={disciplinePhotos[a.id]}
                        licenceUrl={LICENCE_URL}
                        labels={{
                          open: details.open,
                          close: details.close,
                          photo: photos.label,
                          source: photos.source,
                          licence: photos.licence,
                          cropped: photos.cropped,
                        }}
                      />
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <p className="mt-4 text-xs">
          {photos.labelPlural}: {authors.join(", ")} / {photos.source} ·{" "}
          <a
            href={LICENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand"
          >
            {photos.licence}
          </a>{" "}
          ({photos.cropped})
        </p>

        <h3 className="mt-16 text-2xl font-bold lg:text-3xl">
          {disciplines.format.title}
        </h3>
        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {disciplines.format.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-l-8 border-brand bg-ech-grey px-5 py-4"
            >
              <p className="text-lg font-bold lg:text-xl">
                <span className="text-brand">{i + 1}. </span>
                {step.title}
              </p>
              <p className="mt-1 text-base">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 border-l-8 border-brand bg-ech-grey px-5 py-4 md:px-8 md:py-5">
          <h3 className="text-xl font-bold lg:text-2xl">
            {disciplines.scoring.title}
          </h3>
          <div className="mt-2 space-y-1 text-base">
            {disciplines.scoring.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
