import { getDictionary } from "../dictionaries";
import { DisciplineCard } from "./discipline-card";
import { disciplinePhotos } from "@/lib/discipline-photos";
import { LICENCE_URL } from "@/lib/photo-credits";
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

        {/* Phone: one row per stat (number left, label right). From md: five columns. */}
        <dl className="mt-10 grid grid-cols-1 bg-ech-blue-soft px-2 py-2 text-white md:grid-cols-5 md:px-4 md:py-6">
          {disciplines.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 px-4 py-3 max-md:border-t max-md:border-white/25 max-md:first:border-t-0 md:block md:border-l md:border-white/25 md:first:border-l-0"
            >
              <dt className="w-14 shrink-0 text-3xl font-bold md:w-auto md:text-4xl lg:text-5xl">
                {s.value}
              </dt>
              <dd className="text-base md:mt-1 md:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>

        {disciplines.groups.map((group) => (
          <div key={group.id} className="mt-10">
            <h3 className="text-2xl font-bold lg:text-3xl">{group.title}</h3>
            <ul
              className={`mt-4 grid grid-cols-2 gap-3 ${
                group.id === "men" ? "xl:grid-cols-3" : "xl:grid-cols-4"
              }`}
            >
              {group.apparatus.map((a, i) => {
                return (
                  <li key={a.id}>
                    <Reveal delay={(i % 4) * 80} className="h-full">
                      <DisciplineCard
                        name={a.name}
                        shortName={a.shortName}
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
              // Phone: number and title on one row, text below at full width. From md: number in its own left column.
              className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 bg-ech-grey px-5 py-5 md:flex md:items-start md:gap-4"
            >
              <span
                aria-hidden="true"
                className="w-8 shrink-0 text-4xl leading-none font-bold md:w-9 md:text-5xl lg:w-11 lg:text-6xl"
              >
                {i + 1}
              </span>
              <div className="contents md:block">
                <p className="text-lg font-bold lg:text-xl">
                  <span className="sr-only">{i + 1}. </span>
                  {step.title}
                </p>
                <p className="col-span-2 text-base md:mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 bg-ech-grey px-5 py-5 md:px-8 md:py-6">
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
