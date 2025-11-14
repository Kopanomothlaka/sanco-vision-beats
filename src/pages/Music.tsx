import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MusicCard from "@/components/MusicCard";
import AudioPlayer from "@/components/AudioPlayer";
import { tracks, getAllYears } from "@/data/tracks";
import { Button } from "@/components/ui/button";

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState<typeof tracks[0] | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  
  const years = getAllYears();
  const filteredTracks = selectedYear === "all" 
    ? tracks 
    : tracks.filter(track => track.year === selectedYear);

  const handlePlay = (track: typeof tracks[0]) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navigation />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-gradient-primary">
            Music Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Explore our complete collection of Amapiano and Afro-House tracks. Click play to listen or stream on your favorite platform.
          </p>

          {/* Year Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedYear === "all" ? "default" : "outline"}
              onClick={() => setSelectedYear("all")}
              className={selectedYear === "all" ? "bg-primary" : ""}
            >
              All Tracks
            </Button>
            {years.map(year => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className={selectedYear === year ? "bg-primary" : ""}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-muted-foreground">
          Showing {filteredTracks.length} {filteredTracks.length === 1 ? 'track' : 'tracks'}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracks.map((track) => (
            <MusicCard
              key={track.id}
              title={track.title}
              artist={track.featuring ? `${track.artist} ft. ${track.featuring}` : track.artist}
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
            artist: currentTrack.featuring 
              ? `${currentTrack.artist} ft. ${currentTrack.featuring}` 
              : currentTrack.artist,
            artwork: currentTrack.artwork
          }}
        />
      )}
    </div>
  );
};

export default Music;
