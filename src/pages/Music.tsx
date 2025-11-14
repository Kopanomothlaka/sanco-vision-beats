import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";
import AudioPlayer from "@/components/AudioPlayer";
import albumSample from "@/assets/album-sample-1.jpg";

// Sample data - replace with real data later
const tracks = [
  {
    id: 1,
    title: "Amapiano Vibes",
    artist: "Queen Jenny ft. DJ Sunco",
    year: 2024,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#"
    }
  },
  {
    id: 2,
    title: "Summer Nights",
    artist: "DJ Sunco",
    year: 2024,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      appleMusic: "#"
    }
  },
  {
    id: 3,
    title: "African Soul",
    artist: "Queen Jenny",
    year: 2023,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      youtube: "#"
    }
  },
  {
    id: 4,
    title: "Dance Floor",
    artist: "Queen Jenny ft. DJ Sunco",
    year: 2023,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      appleMusic: "#"
    }
  },
  {
    id: 5,
    title: "Rhythm & Blues",
    artist: "DJ Sunco",
    year: 2022,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      youtube: "#"
    }
  },
  {
    id: 6,
    title: "Urban Groove",
    artist: "Queen Jenny",
    year: 2022,
    artwork: albumSample,
    streamingLinks: {
      spotify: "#",
      appleMusic: "#"
    }
  }
];

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState<typeof tracks[0] | null>(null);

  const handlePlay = (track: typeof tracks[0]) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navigation />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gradient-primary">
            Music Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our complete collection of Amapiano and Afro-House tracks. Click play to listen or stream on your favorite platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <MusicCard
              key={track.id}
              title={track.title}
              artist={track.artist}
              year={track.year}
              artwork={track.artwork}
              streamingLinks={track.streamingLinks}
              onPlay={() => handlePlay(track)}
            />
          ))}
        </div>
      </div>

      <Footer />
      
      {currentTrack && (
        <AudioPlayer 
          currentTrack={{
            title: currentTrack.title,
            artist: currentTrack.artist,
            artwork: currentTrack.artwork
          }}
        />
      )}
    </div>
  );
};

export default Music;
