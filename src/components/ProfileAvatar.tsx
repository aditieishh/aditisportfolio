import React, { useState } from 'react';
import { Sparkles, Code2, Award, Terminal } from 'lucide-react';

interface ProfileAvatarProps {
  className?: string;
  showBadges?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  className = "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64",
  showBadges = true 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative inline-block perspective-1000 group select-none">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/40 via-rose-200/50 to-amber-200/40 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 3D Container with Mouse Tilt */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
        className={`relative ${className} rounded-full p-2 bg-gradient-to-tr from-pink-200 via-white to-amber-100 shadow-xl border border-pink-100/80 cursor-pointer transform-style-3d`}
      >
        {/* Inner Avatar Ring */}
        <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white shadow-inner bg-gradient-to-b from-rose-50 to-pink-100">
          
          {/* Custom SVG Illustration Portrait representing Aditi Pallai */}
          <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0B092" />
                <stop offset="100%" stopColor="#C98B6D" />
              </linearGradient>
              <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2A242B" />
                <stop offset="100%" stopColor="#181319" />
              </linearGradient>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2F6" />
                <stop offset="50%" stopColor="#FDE8F0" />
                <stop offset="100%" stopColor="#F8E3EB" />
              </linearGradient>
              <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#900" floodOpacity="0.1" />
              </filter>
            </defs>

            {/* Background Canvas */}
            <rect width="300" height="300" fill="url(#bgGrad)" />
            
            {/* Subtle Bokeh Elements */}
            <circle cx="60" cy="80" r="35" fill="#FCE7F0" opacity="0.6" />
            <circle cx="240" cy="70" r="45" fill="#FAE8DF" opacity="0.7" />
            <circle cx="230" cy="220" r="25" fill="#F472B6" opacity="0.15" />

            {/* Dark Wavy Hair (Back) */}
            <path d="M 70,120 Q 60,180 80,240 L 220,240 Q 240,180 230,120 Q 210,50 150,50 Q 90,50 70,120 Z" fill="#1C181D" />

            {/* Neck */}
            <rect x="130" y="160" width="40" height="50" rx="8" fill="url(#skinGrad)" />
            {/* Neck Shadow */}
            <path d="M 130,165 Q 150,180 170,165 L 170,175 Q 150,190 130,175 Z" fill="#B87B5E" opacity="0.5" />

            {/* White Blouse / Inner Collar */}
            <polygon points="120,200 150,250 180,200 190,280 110,280" fill="#FFFFFF" />

            {/* Face Shape */}
            <path d="M 105,100 Q 100,160 150,185 Q 200,160 195,100 Q 190,75 150,75 Q 110,75 105,100 Z" fill="url(#skinGrad)" />

            {/* Wavy Hair (Front framing face) */}
            <path d="M 90,110 C 85,75 120,55 150,55 C 180,55 215,75 210,110 C 205,135 195,160 200,190 C 185,150 190,105 170,80 C 150,90 130,85 100,95 C 105,130 95,160 100,190 C 100,150 95,135 90,110 Z" fill="#1C181D" />

            {/* Eyes */}
            <ellipse cx="130" cy="120" rx="7" ry="5" fill="#2B1A24" />
            <ellipse cx="170" cy="120" rx="7" ry="5" fill="#2B1A24" />
            <circle cx="132" cy="118" r="2" fill="#FFFFFF" />
            <circle cx="172" cy="118" r="2" fill="#FFFFFF" />

            {/* Eyebrows */}
            <path d="M 120,110 Q 130,106 140,111" stroke="#1A1217" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 160,111 Q 170,106 180,110" stroke="#1A1217" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Nose */}
            <path d="M 150,120 L 148,138 Q 152,141 155,138" stroke="#B87B5E" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Soft Lips / Smile */}
            <path d="M 136,152 Q 150,162 164,152" fill="#C9637E" />
            <path d="M 138,152 Q 150,158 162,152" stroke="#A84B64" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Stylish Glasses (Wire-rimmed) */}
            {/* Left Lens */}
            <rect x="115" y="108" width="30" height="24" rx="8" fill="rgba(255,255,255,0.25)" stroke="#D4AF37" strokeWidth="2" />
            {/* Right Lens */}
            <rect x="155" y="108" width="30" height="24" rx="8" fill="rgba(255,255,255,0.25)" stroke="#D4AF37" strokeWidth="2" />
            {/* Glasses Bridge */}
            <line x1="145" y1="116" x2="155" y2="116" stroke="#D4AF37" strokeWidth="2" />
            {/* Glasses Arms */}
            <line x1="115" y1="116" x2="102" y2="114" stroke="#D4AF37" strokeWidth="2" />
            <line x1="185" y1="116" x2="198" y2="114" stroke="#D4AF37" strokeWidth="2" />

            {/* Black Blazer */}
            <path d="M 85,280 L 115,205 L 145,230 L 150,280 Z" fill="url(#blazerGrad)" filter="url(#softShadow)" />
            <path d="M 215,280 L 185,205 L 155,230 L 150,280 Z" fill="url(#blazerGrad)" filter="url(#softShadow)" />
            <path d="M 90,280 L 110,210 L 135,280 Z" fill="#201A22" />
            <path d="M 210,280 L 190,210 L 165,280 Z" fill="#201A22" />

            {/* Earring accent */}
            <circle cx="102" cy="132" r="3" fill="#F59E0B" />
            <circle cx="198" cy="132" r="3" fill="#F59E0B" />
          </svg>
        </div>

        {/* Soft Decorative 3D Floating Badges */}
        {showBadges && (
          <>
            <div 
              style={{ transform: 'translateZ(30px)' }}
              className="absolute -top-2 -right-2 bg-white px-3 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#F2E8DA] border border-[#F2E8DA] flex items-center gap-1.5 text-xs font-bold text-[#5C4B4B] animate-bounce"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E59A9A]" />
              <span>SDE Aspirant</span>
            </div>

            <div 
              style={{ transform: 'translateZ(25px)' }}
              className="absolute -bottom-1 -left-2 bg-white px-3 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#F2E8DA] border border-[#F2E8DA] flex items-center gap-1.5 text-xs font-bold text-[#5C4B4B]"
            >
              <Code2 className="w-3.5 h-3.5 text-[#E59A9A]" />
              <span>Full Stack</span>
            </div>

            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="absolute bottom-6 -right-4 bg-[#FFF0F0] px-2.5 py-1 rounded-full shadow-[2px_2px_0px_0px_#D9C5B2] border border-[#FFDEDE] flex items-center gap-1 text-[11px] font-extrabold text-[#E59A9A]"
            >
              <Award className="w-3 h-3 text-[#E59A9A]" />
              <span>CGPA 8.67</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
