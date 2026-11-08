import type { Metadata } from "next";
import { NotFoundContent } from "../components/not-found-content";
import { getDictionary } from "../dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { notFound } = await getDictionary();
  return {
    title: `${notFound.tag}: ${notFound.title}`,
    robots: { index: false },
  };
}

// Served by Apache's ErrorDocument (public/{en,hy}/.htaccess) for unknown URLs under /en/ and /hy/.
export default NotFoundContent;
