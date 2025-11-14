import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Music2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import queenJenny from "@/assets/queen-jenny.jpg";
import djSunco from "@/assets/dj-sunco.jpg";
import { getTracksByArtist } from "@/data/tracks";

const artists = [
  {
    name: "Queen Jenny",
    role: "Vocalist & Producer",
    bio: "Queen Jenny is the powerful voice behind Sanco Vision's biggest hits. With her unique blend of traditional African vocals and modern production techniques, she brings soul and energy to every track.",
    image: queenJenny,
    social: {
      instagram: "#",
      spotify: "#"
    },
    tag: "queen-jenny" as const
  },
  {
    name: "DJ Sunco",
    role: "Producer & DJ",
    bio: "DJ Sunco is the sonic architect of the Sanco Vision sound. His innovative production style and deep understanding of Amapiano rhythms have made him one of Southern Africa's most sought-after producers.",
    image: djSunco,
    social: {
      instagram: "#",
      spotify: "#"
    },
    tag: "dj-sunco" as const
  }
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gradient-primary">
            Our Artists
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the creative duo powering the Sanco Vision Music sound - Queen Jenny and DJ Sunco.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {artists.map((artist, index) => {
            const artistTracks = getTracksByArtist(artist.tag);
            
            return (
              <Card 
                key={artist.name} 
                className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className={`relative aspect-square overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                        <h2 className={`text-4xl font-black mb-1 ${index === 0 ? 'text-gradient-primary' : 'text-gradient-accent'}`}>
                          {artist.name}
                        </h2>
                        <p className="text-sm text-primary font-semibold">{artist.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                      <div className="hidden md:block">
                        <h2 className={`text-5xl font-black mb-2 ${index === 0 ? 'text-gradient-primary' : 'text-gradient-accent'}`}>
                          {artist.name}
                        </h2>
                        <p className="text-lg text-primary font-semibold">{artist.role}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {artist.bio}
                      </p>

                      <div className="flex gap-4">
                        <div className="flex-1 text-center p-4 bg-muted rounded-lg border border-border">
                          <div className="text-3xl font-black text-primary mb-1">{artistTracks.length}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Tracks</div>
                        </div>
                        <div className="flex-1 text-center p-4 bg-muted rounded-lg border border-border">
                          <div className="text-3xl font-black text-secondary mb-1">2019</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Since</div>
                        </div>
                      </div>

                      {/* Latest Tracks */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">Latest Releases</h3>
                        <div className="space-y-2">
                          {artistTracks.slice(0, 3).map((track) => (
                            <div 
                              key={track.id} 
                              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group/track"
                            >
                              <img 
                                src={track.artwork} 
                                alt={track.title}
                                className="w-12 h-12 rounded object-cover"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-foreground truncate group-hover/track:text-primary transition-colors">
                                  {track.title}
                                </p>
                                <p className="text-xs text-muted-foreground">{track.year}</p>
                              </div>
                              <a 
                                href={track.streamingLinks.appleMusic} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          asChild
                        >
                          <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-4 h-4 mr-2" />
                            Instagram
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
                          asChild
                        >
                          <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer">
                            <Music2 className="w-4 h-4 mr-2" />
                            Spotify
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Artists;
