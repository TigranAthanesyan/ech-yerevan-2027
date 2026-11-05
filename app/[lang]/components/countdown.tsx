"use client";

import { useEffect, useState } from "react";

// 27 April 2027, 12:00 Yerevan time (UTC+4), same moment as the European Gymnastics event page
const START = Date.parse("2027-04-27T12:00:00+04:00");

type Labels = { label: string; days: string; hours: string; minutes: string };

function remaining() {
  const mins = Math.max(0, Math.floor((START - Date.now()) / 60_000));
  return {
    days: Math.floor(mins / 1440),
    hours: Math.floor((mins % 1440) / 60),
    minutes: mins % 60,
  };
}

export function Countdown({ labels }: { labels: Labels }) {
  // null on the server and first render, so static HTML matches hydration
  const [time, setTime] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const tick = () => setTime(remaining());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  if (time && time.days + time.hours + time.minutes === 0) return null;

  const units = [
    { value: time?.days, label: labels.days },
    { value: time?.hours, label: labels.hours },
    { value: time?.minutes, label: labels.minutes },
  ];

  return (
    <div className="mt-8 inline-block border-t border-white/30 pt-3">
      <p className="text-xs font-bold tracking-widest text-white/80 uppercase">
        {labels.label}
      </p>
      <dl className="mt-1 flex gap-6">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col">
            <dd className="text-2xl leading-none font-bold tabular-nums lg:text-3xl">
              {u.value === undefined ? "--" : String(u.value).padStart(2, "0")}
            </dd>
            <dt className="mt-1 text-xs tracking-widest text-white/70 uppercase">
              {u.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
