import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Vlowzy"
                className="h-8 w-auto"
                loading="lazy"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed">
              AI Software House company, bagian dari <strong className="text-foreground">PT Tritech Dynamic Indonesia</strong>.
            </p>
            <div className="flex gap-4 pt-4">
              {/* <a 
                href="https://instagram.com/vlowzy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/company/vlowzy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:info@vlowzy.com"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a> */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produk & Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Chat Agent
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Voice Agent
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Operational Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom AI Systems
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Hubungi Kami</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Email:</strong>
                <br />
                <a href="mailto:info@vlowzy.com" className="hover:text-primary transition-colors">
                  info@vlowzy.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">WhatsApp:</strong>
                <br />
                <a href="https://wa.me/6285102629999" className="hover:text-primary transition-colors">
                  +62 85102629999
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Vlowzy - PT Tritech Dynamic Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
