import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface AudioPlayerProps {
  currentTrack?: {
    title: string;
    artist: string;
    artwork: string;
  };
}

const AudioPlayer = ({ currentTrack }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-3 min-w-[200px]">
            <img 
              src={currentTrack.artwork} 
              alt={currentTrack.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">{currentTrack.title}</p>
              <p className="text-xs text-muted-foreground">{currentTrack.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                className="w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md flex items-center gap-2">
              <span className="text-xs text-muted-foreground">0:00</span>
              <Slider 
                value={[progress]} 
                max={100} 
                step={1}
                onValueChange={(value) => setProgress(value[0])}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">3:45</span>
            </div>
          </div>

          {/* Volume */}
          <div className="hidden lg:flex items-center gap-2 min-w-[150px]">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <Slider 
              value={[volume]} 
              max={100} 
              step={1}
              onValueChange={(value) => setVolume(value[0])}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
