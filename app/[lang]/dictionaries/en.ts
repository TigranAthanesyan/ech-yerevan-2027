const en = {
  meta: {
    title: "ECH Yerevan 2027",
    description:
      "Men's and Women's Artistic Gymnastics European Championships, Yerevan 2027.",
  },
  header: {
    logoAlt: "European Championships Yerevan 2027",
    navLabel: "Main",
    nav: {
      programme: "Programme",
      venue: "Venue",
      contact: "Contact",
    },
    languageLabel: "Language",
    languages: { hy: "ՀԱՅ", en: "EN" },
    federation: "Armenian Gymnastics Federation",
  },
  hero: {
    imageAlt:
      "A gymnast in a handstand on the balance beam.",
    dates: "27 April – 2 May 2027",
    datesNote: "Dates are provisional and may change.",
    discipline: "Artistic Gymnastics",
    city: "Yerevan, Armenia",
    venue: "Karen Demirchyan Sports and Concerts Complex",
    programme: "Programme",
    venueButton: "Venue",
  },
  programme: {
    title: "Programme",
    note: "The programme is provisional and subject to change. The official schedule will be published here.",
    sessions: [
      { iso: "2027-04-27", day: "Tuesday", date: "27 April", session: "Women's qualification, including the team medal decision" },
      { iso: "2027-04-28", day: "Wednesday", date: "28 April", session: "Men's qualification, including the team medal decision" },
      { iso: "2027-04-29", day: "Thursday", date: "29 April", session: "Women's All-Around Final" },
      { iso: "2027-04-29", day: "Thursday", date: "29 April", session: "Men's All-Around Final" },
      { iso: "2027-04-30", day: "Friday", date: "30 April", session: "Apparatus Finals, part 1" },
      { iso: "2027-05-01", day: "Saturday", date: "1 May", session: "Apparatus Finals, part 2" },
      { iso: "2027-05-02", day: "Sunday", date: "2 May", session: "Mixed Team Final" },
    ],
  },
};

export type Dictionary = typeof en;
export default en;
