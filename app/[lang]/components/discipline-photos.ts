// Photo files and credits for the Disciplines cards, keyed by the apparatus `id` in the dictionaries.
// All photos: Wikimedia Commons, CC BY-SA 4.0 (credit required, changes must be indicated). Details in docs/discipline-images.md.
const commons = "https://commons.wikimedia.org/wiki/File:";

export const LICENCE_URL = "https://creativecommons.org/licenses/by-sa/4.0/";

type Photo = {
  src: string;
  width: number;
  height: number;
  author: string;
  // Wikimedia Commons file page.
  source: string;
};

const seibert = "Norman Seibert";
const halank = "Sandro Halank";
const menFinal = "European_Championships_2022-08-21_Senior_Men_Apparatus_final_";
const womenFinal =
  "2022-08-14_European_Championships_2022_%E2%80%93_Artistic_Gymnastics_Women%27s_Apparatus_Final_";

export const disciplinePhotos: Record<string, Photo> = {
  "floor-men": {
    src: "/images/disciplines/floor-men.webp",
    width: 1270,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Floor_exercise_(Norman_Seibert)_-_DSC_7665.jpg`,
  },
  pommel: {
    src: "/images/disciplines/pommel-horse.webp",
    width: 1600,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Pommel_horse_(Norman_Seibert)_-_DSC_0811.jpg`,
  },
  rings: {
    src: "/images/disciplines/still-rings.webp",
    width: 1600,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Still_rings_(Norman_Seibert)_-_DSC_3100.jpg`,
  },
  "vault-men": {
    src: "/images/disciplines/vault-men.webp",
    width: 1600,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Vault_(Norman_Seibert)_-_DSC_3889.jpg`,
  },
  parallel: {
    src: "/images/disciplines/parallel-bars.webp",
    width: 1600,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Parallel_bars_(Norman_Seibert)_-_DSC_5550.jpg`,
  },
  high: {
    src: "/images/disciplines/horizontal-bar.webp",
    width: 1600,
    height: 1200,
    author: seibert,
    source: `${commons}${menFinal}Horizontal_bar_(Norman_Seibert)_-_DSC_9165_2.jpg`,
  },
  "vault-women": {
    src: "/images/disciplines/vault-women.webp",
    width: 1600,
    height: 1109,
    author: halank,
    source: `${commons}${womenFinal}Vault_by_Sandro_Halank%E2%80%93029.jpg`,
  },
  uneven: {
    src: "/images/disciplines/uneven-bars.webp",
    width: 1600,
    height: 995,
    author: halank,
    source: `${commons}${womenFinal}Uneven_Bars_by_Sandro_Halank%E2%80%93009.jpg`,
  },
  beam: {
    src: "/images/disciplines/balance-beam.webp",
    width: 1600,
    height: 1077,
    author: halank,
    source: `${commons}${womenFinal}Balance_Beam_by_Sandro_Halank%E2%80%93035.jpg`,
  },
  "floor-women": {
    src: "/images/disciplines/floor-women.webp",
    width: 1600,
    height: 1067,
    author: "Pierre-Yves Beaudouin",
    source: `${commons}2015_European_Artistic_Gymnastics_Championships_-_Floor_-_Amy_Tinkler_05.jpg`,
  },
};
