import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Music } from "lucide-react";

const releases = [
  { year: 2025, status: "coming-soon", count: "Multiple releases planned", color: "accent" },
  { year: 2024, status: "active", count: "18 tracks released", color: "primary" },
  { year: 2023, status: "completed", count: "24 tracks released", color: "secondary" },
  { year: 2022, status: "completed", count: "20 tracks released", color: "muted" },
  { year: 2021, status: "completed", count: "16 tracks released", color: "muted" },
  { year: 2020, status: "completed", count: "12 tracks released", color: "muted" },
  { year: 2019, status: "completed", count: "10 tracks released", color: "muted" }
];

const Releases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gradient-primary">
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

                <Card className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} bg-card border-border hover:border-${release.color} transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-black text-foreground mb-1">
                          {release.year}
                        </h3>
                        <p className="text-sm text-muted-foreground">{release.count}</p>
                      </div>
                      
                      {release.status === "coming-soon" ? (
                        <Badge className="bg-accent text-accent-foreground">Coming Soon</Badge>
                      ) : release.status === "active" ? (
                        <Badge className="bg-primary text-primary-foreground">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Completed</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

                    {release.status === "coming-soon" && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-accent/20">
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
