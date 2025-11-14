export interface Track {
  id: number;
  title: string;
  artist: string;
  featuring?: string;
  year: number;
  type: "single" | "song";
  artwork: string;
  streamingLinks: {
    appleMusic?: string;
    spotify?: string;
    youtube?: string;
  };
  artistTag: "queen-jenny" | "dj-sunco" | "both";
}

import album1 from "@/assets/album-sample-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";
import album5 from "@/assets/album-5.jpg";

export const tracks: Track[] = [
  // Queen Jenny Tracks
  {
    id: 1,
    title: "Koko Mmatswale",
    artist: "Queen Jenny",
    year: 2019,
    type: "single",
    artwork: album1,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "queen-jenny"
  },
  {
    id: 2,
    title: "Sukiri e fedhe",
    artist: "Queen Jenny",
    featuring: "Kemero",
    year: 2023,
    type: "single",
    artwork: album2,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "queen-jenny"
  },
  {
    id: 3,
    title: "Melita",
    artist: "Queen Jenny",
    year: 2023,
    type: "single",
    artwork: album3,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "queen-jenny"
  },
  {
    id: 4,
    title: "Ke Loilwe Ke Mang",
    artist: "DJ Sunco, Queen Jenny",
    featuring: "Tumi Bleu",
    year: 2024,
    type: "single",
    artwork: album4,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "both"
  },
  {
    id: 5,
    title: "Khunama Orapele",
    artist: "DJ Sunco & Queen Jenny",
    year: 2025,
    type: "single",
    artwork: album5,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "both"
  },
  {
    id: 6,
    title: "Ema o Tsamaye",
    artist: "Queen Jenny",
    year: 2024,
    type: "single",
    artwork: album1,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "queen-jenny"
  },
  {
    id: 7,
    title: "Stocko Sa Makgowa",
    artist: "DJ Sunco, Queen Jenny",
    featuring: "BestMind",
    year: 2025,
    type: "single",
    artwork: album2,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "both"
  },
  {
    id: 8,
    title: "Tembisa Monneng",
    artist: "DJ Sunco & Queen Jenny",
    year: 2025,
    type: "single",
    artwork: album3,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "both"
  },
  {
    id: 9,
    title: "DIKUKU",
    artist: "DJ Sunco & Queen Jenny",
    year: 2025,
    type: "single",
    artwork: album4,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "both"
  },
  // DJ Sunco Tracks
  {
    id: 10,
    title: "Puku yaka ya bophelo",
    artist: "DJ Sunco",
    year: 2024,
    type: "single",
    artwork: album5,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "dj-sunco"
  },
  {
    id: 11,
    title: "Puku yaka ya bophelo 2.0",
    artist: "DJ Sunco",
    year: 2025,
    type: "single",
    artwork: album1,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "dj-sunco"
  },
  {
    id: 12,
    title: "Boya Babe",
    artist: "DJ Sunco",
    year: 2025,
    type: "single",
    artwork: album2,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "dj-sunco"
  },
  {
    id: 13,
    title: "MMATSWALE",
    artist: "DJ Sunco",
    year: 2020,
    type: "song",
    artwork: album3,
    streamingLinks: {
      appleMusic: "#",
      youtube: "#",
    },
    artistTag: "dj-sunco"
  },
  {
    id: 14,
    title: "PELO YAKA",
    artist: "DJ Sunco",
    year: 2024,
    type: "song",
    artwork: album4,
    streamingLinks: {
      appleMusic: "#",
    },
    artistTag: "dj-sunco"
  }
];

// Helper functions
export const getTracksByArtist = (artistTag: Track["artistTag"]) => {
  return tracks.filter(track => track.artistTag === artistTag || track.artistTag === "both");
};

export const getTracksByYear = (year: number) => {
  return tracks.filter(track => track.year === year);
};

export const getAllYears = () => {
  return [...new Set(tracks.map(track => track.year))].sort((a, b) => b - a);
};
