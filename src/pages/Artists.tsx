import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import queenJenny from "@/assets/queen-jenny.jpg";
import djSunco from "@/assets/dj-sunco.jpg";

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
    stats: {
      tracks: "50+",
      since: "2019"
    }
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
    stats: {
      tracks: "75+",
      since: "2019"
    }
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {artists.map((artist, index) => (
            <Card 
              key={artist.name} 
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className={`text-4xl font-black mb-1 ${index === 0 ? 'text-gradient-primary' : 'text-gradient-accent'}`}>
                      {artist.name}
                    </h2>
                    <p className="text-sm text-primary font-semibold mb-4">{artist.role}</p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {artist.bio}
                  </p>

                  <div className="flex gap-4">
                    <div className="flex-1 text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">{artist.stats.tracks}</div>
                      <div className="text-xs text-muted-foreground">Tracks</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{artist.stats.since}</div>
                      <div className="text-xs text-muted-foreground">Since</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      asChild
                    >
                      <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                      asChild
                    >
                      <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer">
                        <Music2 className="w-4 h-4 mr-2" />
                        Spotify
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Artists;
