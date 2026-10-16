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
      disciplines: "Disciplines",
      venue: "Venue",
      tickets: "Tickets",
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
  summary: {
    text: "From 27 April to 2 May 2027, Yerevan welcomes Europe's best gymnasts for the Men's and Women's Artistic Gymnastics European Championships, held at the Karen Demirchyan Sports and Concerts Complex.",
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
  disciplines: {
    title: "Disciplines",
    intro: "Men and women compete on different apparatus. Both programmes are held in Yerevan.",
    groups: [
      {
        title: "Men",
        apparatus: [
          { name: "Floor Exercise", description: "Tumbling and acrobatic passes combined with strength and balance elements on a sprung floor." },
          { name: "Pommel Horse", description: "Continuous swinging and circling movements with the hands on the horse and pommels." },
          { name: "Rings", description: "Strength and swing elements on rings hanging from cables, with a controlled hold in every position." },
          { name: "Vault", description: "A sprint, a jump off the springboard and a flight over the vaulting table, finished with a stable landing." },
          { name: "Parallel Bars", description: "Swings, flight elements and strength holds on two parallel bars." },
          { name: "High Bar", description: "Big swings, releases and catches on a single high bar." },
        ],
      },
      {
        title: "Women",
        apparatus: [
          { name: "Vault", description: "A sprint, a jump off the springboard and a flight over the vaulting table, finished with a stable landing." },
          { name: "Uneven Bars", description: "Swings, transitions and releases between two bars set at different heights." },
          { name: "Balance Beam", description: "Acrobatic and dance elements performed on a beam only 10 cm wide." },
          { name: "Floor Exercise", description: "A choreographed routine to music that combines tumbling, dance and artistry." },
        ],
      },
    ],
  },
  venue: {
    title: "Venue",
    name: "Karen Demirchyan Sports and Concerts Complex",
    address: "Yerevan, Armenia",
    mapLink: "Open in Google Maps",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Karen+Demirchyan+Sports+and+Concerts+Complex+Yerevan",
    gettingThereTitle: "Getting there",
    airport:
      "The international airport is Zvartnots (EVN). Detailed transport and city information will be published here.",
  },
  whyYerevan: {
    title: "Why Yerevan",
    intro: "One of the oldest continuously inhabited cities in the world welcomes Europe's gymnasts and their fans.",
    highlights: [
      { title: "Ancient history", text: "Yerevan was founded in 782 BC, making it older than Rome." },
      { title: "The Pink City", text: "Many of its buildings are made of rose-coloured volcanic tuff, which glows in the evening sun." },
      { title: "View of Ararat", text: "On a clear day, Mount Ararat rises over the city skyline." },
      { title: "Armenian table", text: "From fresh lavash bread, a UNESCO-listed tradition, to grilled khorovats and local wine." },
    ],
  },
  tickets: {
    title: "Tickets",
    status: "Ticket information coming soon",
    note: "Tickets are not on sale yet. Details on prices and where to buy will be published here and on the official channels.",
  },
  faq: {
    title: "FAQ",
    items: [
      { question: "When and where is the championship?", answer: "The Men's and Women's Artistic Gymnastics European Championships take place from 27 April to 2 May 2027 at the Karen Demirchyan Sports and Concerts Complex in Yerevan, Armenia. The dates are provisional." },
      { question: "How do I get to Yerevan?", answer: "The international airport is Zvartnots (EVN). Detailed transport and city information will be published on this site." },
      { question: "Are tickets on sale?", answer: "Not yet. Information on prices and where to buy will be published on this site and on the official channels." },
      { question: "Is the programme final?", answer: "No. The programme is provisional and subject to change. The official schedule will be published on this site." },
      { question: "Where can I find official information?", answer: "On this site and on the website of the Armenian Gymnastics Federation, armgymnastics.am." },
    ],
  },
  contact: {
    title: "Contact",
    note: "Official contact details will be published here soon.",
    federationLabel: "Organised with the Armenian Gymnastics Federation",
    federationLink: "armgymnastics.am",
  },
  footer: {
    federationLabel: "Organised with the Armenian Gymnastics Federation",
    note: "All event information on this site is provisional and may change.",
  },
};

export type Dictionary = typeof en;
export default en;
