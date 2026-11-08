import { lang } from "next/root-params";
import { getDictionary } from "../dictionaries";

export async function NotFoundContent() {
  const { notFound } = await getDictionary();

  return (
    <main className="flex min-h-[60vh] items-center bg-brand text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <p className="inline-block bg-accent px-3 py-1 text-sm font-bold tracking-widest uppercase lg:text-base">
          {notFound.tag}
        </p>
        <h1 className="mt-4 text-3xl font-bold lg:text-5xl">{notFound.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">{notFound.text}</p>
        <a
          href={`/${await lang()}/`}
          className="mt-8 inline-block bg-white px-6 py-3 font-bold text-ech-navy hover:bg-ech-grey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {notFound.home}
        </a>
      </div>
    </main>
  );
}
