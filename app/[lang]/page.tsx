import { Contact } from "./components/contact";
import { Disciplines } from "./components/disciplines";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { Programme } from "./components/programme";
import { Summary } from "./components/summary";
import { Tickets } from "./components/tickets";
import { Venue } from "./components/venue";
import { WhyYerevan } from "./components/why-yerevan";

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <Programme />
      <Disciplines />
      <Venue />
      <WhyYerevan />
      <Tickets />
      <Faq />
      <Contact />
    </main>
  );
}
