import React from 'react';
import { ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Trophy, Award, Mic, Users, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const AchievementsCertifications: React.FC = () => {
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Speaker': return <Mic className="w-5 h-5 text-[#E59A9A]" />;
      case 'Competition': return <Trophy className="w-5 h-5 text-[#D9C5B2]" />;
      case 'Leadership': return <Users className="w-5 h-5 text-[#E59A9A]" />;
      case 'Hackathon': return <Sparkles className="w-5 h-5 text-[#E59A9A]" />;
      case 'Problem Solving': return <Code2 className="w-5 h-5 text-[#5C4B4B]" />;
      default: return <Award className="w-5 h-5 text-[#E59A9A]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 bg-[#FFFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C4B4B] tracking-tight">
            Awards, Leadership & Certifications
          </h2>
          <p className="text-[#5C4B4B]/80 mt-2 text-sm sm:text-base font-medium">
            Recognized for public speaking, hackathon execution, community leadership, and certified technical skill sets.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Achievements & Awards (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-extrabold text-[#5C4B4B] flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-[#E59A9A]" />
              <span>Awards & Leadership Highlights</span>
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS_DATA.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#EBD8C3] transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#FFF0F0] border border-[#FFDEDE] shrink-0">
                    {getAchievementIcon(item.category)}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-extrabold text-[#5C4B4B] text-base">
                        {item.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-[10px] font-extrabold uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-[#E59A9A]">
                      {item.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#5C4B4B]/80 leading-relaxed pt-1 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-extrabold text-[#5C4B4B] flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#E59A9A]" />
              <span>Verified Certifications</span>
            </h3>

            <div className="bg-white rounded-2xl p-6 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-white rounded-xl border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA] flex items-center justify-between gap-3 hover:border-[#FFDEDE] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E59A9A] shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#5C4B4B]">{cert.title}</div>
                      <div className="text-xs font-medium text-[#8A7A7A]">{cert.provider}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFF0F0] text-[#E59A9A] border border-[#FFDEDE]">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Note */}
            <div className="p-4 rounded-2xl bg-[#FFF0F0] border border-[#FFDEDE] text-[#5C4B4B] text-xs font-semibold leading-relaxed flex items-center gap-2 shadow-[2px_2px_0px_0px_#D9C5B2]">
              <Sparkles className="w-4 h-4 text-[#E59A9A] shrink-0" />
              <span>Certified across Python, SQL, Java, and Machine Learning virtual internships.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
