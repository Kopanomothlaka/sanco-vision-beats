import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient-primary animate-fade-in">
            SANCO VISION
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-8 text-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The Sound of Now. The Vision of Next.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Experience the pulse of Southern African Amapiano and Afro-House from the heartbeat of Botswana.
          </p>
          
          <Button 
            size="lg"
            className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow shadow-2xl shadow-primary/50"
          >
            <Play className="w-10 h-10 ml-1" />
          </Button>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-gradient-primary mb-2">100+</div>
            <p className="text-muted-foreground">Tracks Released</p>
          </div>
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:border-secondary transition-colors">
            <div className="text-4xl font-bold text-gradient-accent mb-2">2019</div>
            <p className="text-muted-foreground">Established</p>
          </div>
          <div className="text-center p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors">
            <div className="text-4xl font-bold text-accent mb-2">2</div>
            <p className="text-muted-foreground">Core Artists</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
