import { Play, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface MusicCardProps {
  title: string;
  artist: string;
  year: number;
  artwork: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
  };
  onPlay: () => void;
}

const MusicCard = ({ title, artist, year, artwork, streamingLinks, onPlay }: MusicCardProps) => {
  return (
    <Card className="group bg-card hover:bg-muted/50 border-border transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={artwork} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="lg"
              onClick={onPlay}
              className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{artist}</p>
            <p className="text-xs text-muted-foreground mt-1">{year}</p>
          </div>

          <div className="flex items-center gap-2">
            {streamingLinks.spotify && (
              <a 
                href={streamingLinks.spotify} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Spotify
                </Button>
              </a>
            )}
            {streamingLinks.appleMusic && (
              <a 
                href={streamingLinks.appleMusic} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full text-xs hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Apple
                </Button>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicCard;
