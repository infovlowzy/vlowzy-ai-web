import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Shield, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    solutions: [
      { name: "AI Chat Agent", href: "#solutions" },
      { name: "Smart Voice Agent", href: "#solutions" },
      { name: "Operational Automation", href: "#solutions" },
      { name: "Custom AI Systems", href: "#solutions" },
      { name: "AI Consulting", href: "#solutions" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Career", href: "#", badge: "Soon" },
      { name: "Blog", href: "#", badge: "Soon" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-and-conditions" },
    ],
  };

  const trustBadges = [
    { icon: Shield, text: "Meta Official Tech Provider" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Award, text: "50+ Clients" },
  ];

  return (
    <footer className="relative bg-neutral-950 border-t border-white/5">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="py-8 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-neutral-400"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <a href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Vlowzy"
                className="h-8 w-auto"
                loading="lazy"
              />
            </a>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              AI Software House yang membantu bisnis Indonesia bertransformasi dengan solusi AI yang powerful dan terjangkau.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-neutral-500">
                Bagian dari <span className="text-neutral-300">PT Tritech Dynamic Indonesia</span>
              </p>
              <div className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com/vlowzy.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/vlowzy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:info@vlowzy.com"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    {link.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                        link.badge === 'Hiring' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@vlowzy.com" 
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@vlowzy.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/6285102629999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +62 851-0262-9999
                </a>
              </li>
            </ul>
            
            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <a
                href="https://wa.me/6285102629999?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20AI%20solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Free Consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} Vlowzy. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
