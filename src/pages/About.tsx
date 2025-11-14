import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music2, Users, TrendingUp, Globe } from "lucide-react";

const values = [
  {
    icon: Music2,
    title: "Authentic Sound",
    description: "We create music that stays true to our African roots while pushing boundaries."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our fans and artists are family. Every track is made with the community in mind."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly evolving our sound and production techniques to stay ahead of the curve."
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Bringing Southern African music to the world stage, one track at a time."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient-primary">
              About Sanco Vision
            </h1>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              Sanco Vision Music is a Botswana-based label curating the future of{" "}
              <span className="text-primary font-semibold">Amapiano</span> and{" "}
              <span className="text-secondary font-semibold">Afro-House</span>, built on the powerful collaboration between DJ Sunco and Queen Jenny.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2019, we've been on a mission to create music that moves bodies, touches souls, and elevates the vibrant sound of Southern Africa to the global stage.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-card py-16 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-center text-gradient-accent">
                Our Mission
              </h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                To be the heartbeat of Southern African dance music, creating unforgettable sonic experiences that celebrate our culture, inspire our community, and define the sound of now and next.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-foreground">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-black text-gradient-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Tracks Released</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-black text-gradient-accent mb-2">6</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-black text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">Core Artists</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-4xl font-black text-secondary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Vibes Created</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
