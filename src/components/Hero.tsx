import React from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Send, Sparkles, Code2, Award, Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background Soft Pink & Beige Aesthetics */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-pink-200/40 via-rose-100/50 to-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300/20 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E59A9A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E59A9A]"></span>
              </span>
              <span className="text-xs font-bold text-[#E59A9A] tracking-wider uppercase">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Greeting Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#5C4B4B] tracking-tight">
                Hi, I'm <span className="text-[#E59A9A] underline decoration-[#FFDEDE] decoration-wavy decoration-2">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#5C4B4B]/80">
                {PERSONAL_INFO.title} &bull; <span className="text-[#E59A9A]">{PERSONAL_INFO.subtitle}</span>
              </h2>
            </div>

            {/* Objective Narrative */}
            <p className="text-base sm:text-lg text-[#5C4B4B]/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {PERSONAL_INFO.about}
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-semibold text-[#5C4B4B]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA]">
                <MapPin className="w-3.5 h-3.5 text-[#E59A9A]" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA]">
                <Award className="w-3.5 h-3.5 text-[#D9C5B2]" />
                <span>B.Tech CSE (8.67 CGPA)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA]">
                <Code2 className="w-3.5 h-3.5 text-[#E59A9A]" />
                <span>100+ LeetCode DSA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#5C4B4B] text-white font-bold text-xs shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Explore Projects</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E59A9A] text-white font-bold text-xs shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#FFF0F0] text-[#5C4B4B] font-bold text-xs border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#E59A9A]" />
                <span>Contact Me</span>
              </a>
            </div>



          </div>

          {/* Right Column: Profile Avatar with Subtle 3D Depth */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileAvatar className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80" />
          </div>

        </div>
      </div>
    </section>
  );
};
