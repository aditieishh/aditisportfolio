import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { ArrowUp, Heart, Github, Linkedin, Mail, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github className="w-4 h-4" />;
      case 'Linkedin': return <Linkedin className="w-4 h-4" />;
      case 'Mail': return <Mail className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#FFFBFB] border-t border-[#F2E8DA] pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#F2E8DA]">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#FFDEDE] border border-[#F2E8DA] flex items-center justify-center text-[#E59A9A] font-extrabold text-lg shadow-[2px_2px_0px_0px_#F2E8DA]">
              AP
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#5C4B4B]">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-[#E59A9A] font-bold">{PERSONAL_INFO.title}</p>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-[#FFF0F0] text-[#5C4B4B] hover:text-[#E59A9A] transition-colors border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA] flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title={link.name}
              >
                {getSocialIcon(link.icon)}
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#5C4B4B] text-white hover:bg-[#5C4B4B]/90 transition-all flex items-center gap-2 text-xs font-bold shadow-[2px_2px_0px_0px_#D9C5B2] cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E59A9A]" />
          </button>

        </div>

        {/* Copyright & Palette Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8A7A7A] font-bold">
          <p>&copy; {new Date().getFullYear()} Aditi Pallai. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-1 text-[#E59A9A]">
            <span>Professional Polish Theme</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[#E59A9A] inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
