import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Programme } from "./components/programme";
import { Summary } from "./components/summary";
import { Venue } from "./components/venue";

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <Programme />
      <Venue />
      <Contact />
    </main>
  );
}
