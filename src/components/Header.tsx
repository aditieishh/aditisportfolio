import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Sparkles, Send, User, Code, GraduationCap, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height compensation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFBFB]/90 backdrop-blur-md border-b border-[#F2E8DA] py-3 shadow-xs' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFDEDE] border border-[#F2E8DA] flex items-center justify-center font-extrabold text-[#E59A9A] text-sm group-hover:scale-105 transition-transform shrink-0">
              AP
            </div>
            <span className="font-bold text-[#5C4B4B] text-base sm:text-lg tracking-tight group-hover:text-[#E59A9A] transition-colors whitespace-nowrap">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive 
                      ? 'bg-[#E59A9A] text-white shadow-[2px_2px_0px_0px_#D9C5B2]' 
                      : 'text-[#5C4B4B] hover:text-[#E59A9A] hover:bg-[#FFF0F0]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#E59A9A]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button: Quick Resume Download */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="bg-[#5C4B4B] text-white px-5 py-2 rounded-full text-xs font-bold shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 cursor-pointer group"
            >
              <FileText className="w-3.5 h-3.5 text-white/90 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 text-xs font-bold rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#5C4B4B] hover:text-[#E59A9A] hover:bg-[#FFF0F0] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E59A9A]" /> : <Menu className="w-6 h-6 text-[#5C4B4B]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFBFB]/95 backdrop-blur-xl border-b border-[#F2E8DA] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="text-xs font-bold text-[#E59A9A] uppercase tracking-wider px-3 mb-1">
            Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#E59A9A] text-white shadow-xs' 
                    : 'text-[#5C4B4B] hover:bg-[#FFF0F0] hover:text-[#E59A9A]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#E59A9A]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-2 border-t border-[#F2E8DA]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full mt-2 py-3 px-4 rounded-full bg-[#5C4B4B] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#D9C5B2]"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
