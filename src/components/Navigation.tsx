import { NavLink } from "./NavLink";
import { Music2 } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/music", label: "Music" },
    { to: "/artists", label: "Artists" },
    { to: "/releases", label: "Releases" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Music2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-xl font-bold text-gradient-primary">SANCO VISION</span>
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                activeClassName="text-primary"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button - implement mobile menu later if needed */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
