import { getDictionary } from "../dictionaries";

// Hidden until tickets are on sale. Set to true to show the button.
const SHOW_TICKETS_BUTTON = false;

export async function Programme() {
  const { programme } = await getDictionary();

  // One row per day: the two All-Around Finals share 29 April.
  const days = programme.sessions.reduce<
    { iso: string; day: string; date: string; sessions: typeof programme.sessions }[]
  >((acc, s) => {
    const last = acc[acc.length - 1];
    if (last && last.iso === s.iso) last.sessions.push(s);
    else acc.push({ iso: s.iso, day: s.day, date: s.date, sessions: [s] });
    return acc;
  }, []);

  return (
    <section
      id="programme"
      className="mt-12 bg-linear-to-br from-brand to-brand-deep py-16 text-white lg:mt-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{programme.title}</h2>

        <ol className="mt-8 space-y-3">
          {days.map((d, dayIndex) => (
            <li
              key={d.iso}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[7rem_15rem_1fr]"
            >
              <p
                aria-hidden="true"
                className="flex w-16 flex-col items-center justify-center bg-brand-deep px-2 py-3 font-bold md:w-auto md:px-3 md:py-4"
              >
                <span className="text-[0.65rem] tracking-widest uppercase md:text-xs">
                  {programme.dayLabel}
                </span>
                <span className="text-3xl leading-none md:text-4xl lg:text-5xl">
                  {dayIndex + 1}
                </span>
              </p>
              {/* White date block, like the white date bar on the official artwork. */}
              <time
                dateTime={d.iso}
                className="flex flex-col justify-center bg-white px-4 py-2 font-bold md:px-8 md:py-5"
              >
                <span className="block text-lg text-brand md:text-xl lg:text-2xl">
                  {d.date}
                </span>
                <span className="block text-xs tracking-widest text-brand uppercase md:text-sm">
                  {d.day}
                </span>
              </time>
              <ul className="col-span-2 divide-y divide-white/20 bg-brand-deep/60 px-4 py-3 md:col-span-1 md:space-y-3 md:divide-y-0 md:bg-white/10 md:px-8 md:py-5">
                {d.sessions.map((s, i) => (
                  <li key={s.session} className="py-2 first:pt-0 last:pb-0 md:py-0">
                    {/* Show the stage label once, not again for a second session of the same kind. */}
                    {s.tag !== d.sessions[i - 1]?.tag && (
                      <p className="mb-1">
                        <span className="inline-block bg-accent px-2 py-0.5 text-[0.65rem] font-bold tracking-widest uppercase md:text-xs">
                          {s.tag}
                        </span>
                      </p>
                    )}
                    <p className="text-base md:text-lg lg:text-xl">{s.session}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {SHOW_TICKETS_BUTTON && (
          <a
            href="#tickets"
            className="mt-8 inline-block border-2 border-white px-6 py-3 text-lg font-bold hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-8 lg:py-4 lg:text-xl"
          >
            {programme.ticketsButton}
          </a>
        )}
      </div>
    </section>
  );
}
