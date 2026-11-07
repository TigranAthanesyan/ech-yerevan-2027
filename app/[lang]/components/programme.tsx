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
    <section id="programme" className="pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">{programme.title}</h2>

        <ol className="mt-8 space-y-3">
          {days.map((d, dayIndex) => (
            <li
              key={d.iso}
              className="grid gap-2 border-l-8 border-brand bg-white px-5 py-4 md:grid-cols-[16rem_1fr] md:items-center md:gap-8 md:px-8 md:py-5"
            >
              <time dateTime={d.iso} className="font-bold">
                <span className="block text-xl text-brand lg:text-2xl">
                  {d.date}
                </span>
                <span className="block text-sm tracking-widest uppercase">
                  {d.day} · {programme.dayLabel} {dayIndex + 1}
                </span>
              </time>
              <ul className="space-y-3">
                {d.sessions.map((s, i) => (
                  <li key={s.session}>
                    {/* Show the stage label once, not again for a second session of the same kind. */}
                    {s.tag !== d.sessions[i - 1]?.tag && (
                      <p className="text-xs font-bold tracking-widest text-brand uppercase">
                        {s.tag}
                      </p>
                    )}
                    <p className="text-lg font-bold lg:text-xl">{s.session}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm">{programme.note}</p>

        {SHOW_TICKETS_BUTTON && (
          <a
            href="#tickets"
            className="mt-8 inline-block border-2 border-brand px-6 py-3 text-lg font-bold text-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:px-8 lg:py-4 lg:text-xl"
          >
            {programme.ticketsButton}
          </a>
        )}
      </div>
    </section>
  );
}
