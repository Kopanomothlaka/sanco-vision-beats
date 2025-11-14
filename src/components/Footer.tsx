import { Instagram, Music2, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Music2, href: "#", label: "Spotify" },
    { icon: Music2, href: "#", label: "Apple Music" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <Music2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient-primary">SANCO VISION</span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              For business inquiries:{" "}
              <a href="mailto:info@sancovisionmusic.com" className="text-primary hover:text-secondary transition-colors">
                info@sancovisionmusic.com
              </a>
            </p>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Sanco Vision Music. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
