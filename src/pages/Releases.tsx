import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Music } from "lucide-react";
import { getAllYears, getTracksByYear } from "@/data/tracks";

const Releases = () => {
  const years = getAllYears();
  
  const getYearStats = (year: number) => {
    const yearTracks = getTracksByYear(year);
    const status = year === 2025 ? "coming-soon" : year === 2024 ? "active" : "completed";
    return {
      year,
      status,
      count: yearTracks.length,
      tracks: yearTracks
    };
  };

  const releases = years.map(getYearStats);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-gradient-primary">
            Release Timeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our musical journey from 2019 to today. Witness the evolution of the Sanco Vision sound.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {releases.map((release, index) => (
              <div 
                key={release.year} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background z-10" />

                <Card className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-card border-border hover:border-primary transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-4xl font-black text-foreground mb-1">
                          {release.year}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {release.count} {release.count === 1 ? 'track' : 'tracks'} released
                        </p>
                      </div>
                      
                      {release.status === "coming-soon" ? (
                        <Badge className="bg-accent text-accent-foreground">Coming Soon</Badge>
                      ) : release.status === "active" ? (
                        <Badge className="bg-primary text-primary-foreground">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Completed</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {release.status === "coming-soon" ? (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Stay tuned for announcements</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          <span>Available on all platforms</span>
                        </div>
                      )}
                    </div>

                    {/* Track List Preview */}
                    <div className="space-y-2">
                      {release.tracks.slice(0, 3).map((track, idx) => (
                        <div 
                          key={track.id}
                          className="flex items-center gap-3 p-2 bg-muted/30 rounded text-sm"
                        >
                          <span className="text-muted-foreground font-mono">{String(idx + 1).padStart(2, '0')}</span>
                          <span className="text-foreground font-medium truncate flex-1">{track.title}</span>
                        </div>
                      ))}
                      {release.tracks.length > 3 && (
                        <p className="text-xs text-muted-foreground pl-2">
                          +{release.tracks.length - 3} more {release.tracks.length - 3 === 1 ? 'track' : 'tracks'}
                        </p>
                      )}
                    </div>

                    {release.status === "coming-soon" && (
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm text-foreground font-medium">
                          Exciting new releases on the horizon. Pre-save on Spotify and Apple Music to be the first to listen.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Releases;
