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
    languages: { hy: "Հայերեն", en: "English" },
    federation: "Armenian Gymnastics Federation",
  },
  hero: {
    imageAlt:
      "A gymnast in a handstand on the balance beam.",
    dates: "27 April – 2 May 2027",
    countdown: { label: "Kick-off in", days: "Days", hours: "Hours", minutes: "Minutes" },
    tag: "European Championships",
    title: "2027 Men's and Women's Artistic Gymnastics European Championships",
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
    dayLabel: "Day",
    ticketsButton: "Ticket information",
    sessions: [
      { iso: "2027-04-27", day: "Tuesday", date: "27 April", tag: "Qualification", session: "Women's qualification, including the team medal decision" },
      { iso: "2027-04-28", day: "Wednesday", date: "28 April", tag: "Qualification", session: "Men's qualification, including the team medal decision" },
      { iso: "2027-04-29", day: "Thursday", date: "29 April", tag: "Finals", session: "Women's All-Around Final" },
      { iso: "2027-04-29", day: "Thursday", date: "29 April", tag: "Finals", session: "Men's All-Around Final" },
      { iso: "2027-04-30", day: "Friday", date: "30 April", tag: "Finals", session: "Apparatus Finals, part 1 (women and men)" },
      { iso: "2027-05-01", day: "Saturday", date: "1 May", tag: "Finals", session: "Apparatus Finals, part 2 (women and men)" },
      { iso: "2027-05-02", day: "Sunday", date: "2 May", tag: "Finals", session: "Mixed Team Final" },
    ],
  },
  disciplines: {
    title: "Disciplines",
    intro: "Men compete on six apparatus and women on four. Both programmes are held in Yerevan.",
    stats: [
      { value: "6", label: "apparatus for men" },
      { value: "4", label: "apparatus for women" },
      { value: "24", label: "gymnasts in each All-Around Final" },
      { value: "8", label: "finalists on each apparatus" },
      { value: "16", label: "teams in the Mixed Team Final" },
    ],
    tags: { mixed: "Mixed Team Final" },
    photos: { label: "Photo", labelPlural: "Photos", licence: "CC BY-SA 4.0", cropped: "cropped", source: "Wikimedia Commons" },
    details: { open: "Open details", close: "Close" },
    groups: [
      {
        id: "men",
        title: "Men's apparatus",
        apparatus: [
          { id: "floor-men", name: "Floor Exercise", mixed: true, description: "Powerful tumbling passes, flips and twists combined with strength and balance on a sprung floor.", more: "On a 12 × 12 m sprung floor, gymnasts perform a routine lasting up to 70 seconds, without music. They combine tumbling passes with flips and twists, while also demonstrating strength, balance and flexibility. Judges assess difficulty and execution, including landings and staying within the floor boundaries." },
          { id: "pommel", name: "Pommel Horse", mixed: false, description: "Continuous circular swings and leg movements performed while balancing on the hands.", more: "Using only their hands for support, gymnasts swing their legs in circles, perform scissor movements and travel along the horse, moving between its two handles, called pommels, and other parts of the apparatus. The challenge is to maintain a smooth, uninterrupted rhythm without touching the horse with any other part of the body." },
          { id: "rings", name: "Still Rings", mixed: false, description: "A test of upper-body strength and control, combining swinging movements with held positions.", more: "Suspended about 2.9 m above the floor, two freely moving rings demand exceptional strength and stability. Gymnasts move between swings, handstands and strength positions, such as the iron cross, holding specified positions still for at least two seconds. Smooth transitions, steady holds and a controlled dismount are essential." },
          { id: "vault-men", name: "Vault", mixed: false, description: "A fast run, an explosive push off the vaulting table, aerial flips and twists, and a controlled landing.", more: "The gymnast sprints along a runway of up to 25 m, jumps from a springboard and pushes off a vaulting table 135 cm high using both hands. In the brief flight that follows, the gymnast may perform flips and twists before landing on both feet. Height, distance, body control and landing precision are important in judging." },
          { id: "parallel", name: "Parallel Bars", mixed: true, description: "Swings, handstands and airborne movements performed on two parallel bars.", more: "On two parallel bars about 2 m high, gymnasts swing above and below the bars, move through handstands and sometimes release and catch the bars again. The routine combines strength, balance, coordination and precise timing, with smooth transitions between elements and a controlled dismount." },
          { id: "high", name: "Horizontal Bar", mixed: true, description: "Powerful swings, spectacular releases and catches, and a high-flying dismount from a single bar.", more: "Gymnasts build momentum by circling a bar about 2.8 m above the floor in full-body rotations known as giant swings. They may release the bar, perform aerial skills and catch it again, all while maintaining rhythm and control. The routine finishes with a dismount, often involving multiple flips or twists." },
        ],
      },
      {
        id: "women",
        title: "Women's apparatus",
        apparatus: [
          { id: "vault-women", name: "Vault", mixed: true, description: "A fast run, an explosive push off the vaulting table, aerial flips and twists, and a controlled landing.", more: "The gymnast sprints along a runway of up to 25 m, jumps from a springboard and pushes off a vaulting table 125 cm high using both hands. In the brief flight that follows, the gymnast may perform flips and twists before landing on both feet. Height, distance, body control and landing precision are important in judging." },
          { id: "uneven", name: "Uneven Bars", mixed: false, description: "Continuous swings, releases and transitions between two bars set at different heights.", more: "The two bars are positioned at different heights, about 1.7 m and 2.5 m. Gymnasts swing around the bars, change grips and move between them, sometimes releasing and catching a bar in midair. Judges look for difficult skills performed with rhythm, precision and control, followed by a clean dismount." },
          { id: "beam", name: "Balance Beam", shortName: "Balance Beam", mixed: true, description: "A combination of acrobatics, leaps, turns and balance performed on a beam just 10 cm wide.", more: "Just 10 cm wide, the beam is 5 m long and 125 cm above the floor. During a routine lasting up to 90 seconds, gymnasts perform jumps, turns, dance movements and acrobatic skills, sometimes including flips. Success requires remarkable balance, precision and control, and the routine ends with a dismount." },
          { id: "floor-women", name: "Floor Exercise", mixed: true, description: "Acrobatic tumbling and dance movements blended with music, rhythm and artistic expression.", more: "On a 12 × 12 m sprung floor, gymnasts perform routines of up to 90 seconds accompanied by music. Powerful tumbling passes with flips and twists are combined with leaps, turns and choreography. Judges evaluate both the difficulty and execution of the skills, as well as the routine's artistry and musical expression." },
        ],
      },
    ],
    format: {
      title: "How the competition works",
      steps: [
        { title: "Qualification & Team Final", text: "Each country may enter a team of 3 to 5 gymnasts or up to 3 individual competitors. Up to four team members compete on each apparatus, with the three best scores counting toward the team total. Qualification determines the men's and women's European Team Champions and who advances to the individual finals." },
        { title: "All-Around Final", text: "The top 24 men and top 24 women from qualification advance, with a maximum of two gymnasts per country in each final. Men compete on all six apparatus and women on all four. The gymnast with the highest combined score becomes the European All-Around Champion." },
        { title: "Apparatus Finals", text: "The top eight gymnasts from qualification on each apparatus advance to its final, with a maximum of two per country. Each final crowns a European Champion on that apparatus." },
        { title: "Mixed Team Final", text: "Each country's highest-scoring man across Floor Exercise, Parallel Bars and Horizontal Bar is paired with its highest-scoring woman across Vault, Balance Beam and Floor Exercise. The 16 best pairs qualify for the final, where they compete for the European Mixed Team Champion title." },
      ],
    },
    scoring: {
      title: "How it is scored",
      lines: [
        "Every routine receives two scores: D (difficulty) and E (execution).",
        "The D score reflects the difficulty of selected skills, required elements and applicable bonuses.",
        "The E score starts at 10.0, with deductions for errors in technique, form, artistry where applicable, and falls.",
        "The final score is D + E, minus any additional penalties. The higher the score, the better.",
      ],
    },
  },
  venue: {
    title: "Venue",
    name: "Karen Demirchyan Sports and Concerts Complex",
    address: "Yerevan, Armenia",
    mapLink: "Open in Google Maps",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Karen+Demirchyan+Sports+and+Concerts+Complex+Yerevan",
    airport: "International airport: Zvartnots (EVN)",
    timelineTitle: "History",
    timeline: [
      { year: "1983", text: "The complex opens on 31 October." },
      { year: "1987", text: "Its architects and engineers receive the USSR State Prize for the rotating-grandstand design." },
      { year: "1996", text: "Hosts the 32nd Chess Olympiad." },
      { year: "2001", text: "Hosts the World Wushu Championships." },
      { year: "2008", text: "Reopens after a major renovation, 25 years to the day after the first opening." },
      { year: "2010", text: "Hosts the ice hockey World Championship, Division III. Armenia wins silver." },
      { year: "2010", text: "Deep Purple play a charity concert in the main arena." },
      { year: "2011 · 2022", text: "Hosts the Junior Eurovision Song Contest." },
      { year: "2015", text: "Charles Aznavour performs here." },
      { year: "2023", text: "40th anniversary, marked with a bronze statue of Karen Demirchyan at the entrance." },
    ],
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
    tag: "Coming soon",
    status: "Ticket information coming soon",
    note: "Tickets are not on sale yet. Details on prices and where to buy will be published here and on the official channels.",
  },
  faq: {
    title: "FAQ",
    items: [
      { question: "When and where is the championship?", answer: "The Men's and Women's Artistic Gymnastics European Championships take place from 27 April to 2 May 2027 at the Karen Demirchyan Sports and Concerts Complex in Yerevan, Armenia. The dates are provisional." },
      { question: "Are tickets on sale?", answer: "Not yet. Information on prices and where to buy will be published on this site and on the official channels." },
      { question: "Is the programme final?", answer: "No. The programme and the dates are provisional and subject to change. The official schedule will be published on this site." },
      { question: "How do I get from the airport to the venue?", answer: "The international airport is Zvartnots (EVN). Information on transfers to the venue will be published on this site." },
      { question: "Where can I watch the championship?", answer: "The European Broadcasting Union (EBU) is the official broadcast partner of European Gymnastics. Broadcast details will be announced on this site and on the official channels." },
      { question: "I am a journalist or part of a delegation. Who do I contact?", answer: "For now, write to info@echyerevan2027.com. Information on accreditation will be published on this site." },
      { question: "Where can I find official information?", answer: "On this site and through the official channels of the Armenian Gymnastics Federation and European Gymnastics." },
    ],
  },
  partners: {
    organisers: {
      "european-gymnastics": {
        name: "European Gymnastics",
        role: "Organiser",
      },
      "armenian-gymnastics-federation": {
        name: "Armenian Gymnastics Federation",
        role: "Host federation",
      },
    },
    partnersHeading: "European Gymnastics partners",
    partners: {
      "eurovision-sport": {
        name: "European Broadcasting Union (EBU)",
        role: "Official Broadcast Partner",
      },
    },
  },
  notFound: {
    tag: "404",
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved.",
    home: "Back to home",
  },
  footer: {
    title: "Contact",
    eventLabel: "Event enquiries",
    followUs: "Follow us",
    addresses: {
      "european-gymnastics": ["Avenue de la Gare 12", "1003 Lausanne"],
      "armenian-gymnastics-federation": ["3 Moskovyan St.", "Yerevan 0001, Armenia"],
    },
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

export type Dictionary = typeof en;
export default en;
