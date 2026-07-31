import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2, Building2, Calendar, Target } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-[#FFFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C4B4B] tracking-tight">
            Education & Core Foundations
          </h2>
          <p className="text-[#5C4B4B]/80 mt-2 text-sm sm:text-base font-medium">
            Grounded in computer science theory with hands-on full-stack development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#E59A9A]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F2E8DA]">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#5C4B4B] leading-snug">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-[#E59A9A] font-bold text-sm mt-0.5">
                    {EDUCATION_DATA.degree}
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="inline-flex flex-col items-center justify-center px-4 py-2 bg-[#FFF0F0] border border-[#FFDEDE] rounded-xl text-center self-start sm:self-auto shadow-[2px_2px_0px_0px_#D9C5B2]">
                <span className="text-xs font-bold text-[#E59A9A] uppercase tracking-wider">CGPA Score</span>
                <span className="text-xl font-black text-[#5C4B4B]">{EDUCATION_DATA.cgpa}</span>
              </div>
            </div>

            {/* Timeline & Coursework */}
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8A7A7A]">
                <Calendar className="w-4 h-4 text-[#E59A9A]" />
                <span>Academic Tenure: {EDUCATION_DATA.period}</span>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-[#5C4B4B]/70 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E59A9A]" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#FFF0F0] border border-[#F2E8DA] text-[#5C4B4B] text-xs font-bold shadow-[2px_2px_0px_0px_#F2E8DA]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: SDE Goals & Technical CS Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SDE Target Role Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] space-y-4">
              <div className="flex items-center gap-2.5 text-[#5C4B4B] font-extrabold text-base">
                <Target className="w-5 h-5 text-[#E59A9A]" />
                <span>Career Focus & Strengths</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4B4B]/80 leading-relaxed font-medium">
                Aiming for a Software Development Engineer (SDE) / Full Stack Developer position to architect high-concurrency, real-time web applications.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Hands-on expertise in REST APIs & WebSocket real-time syncing",
                  "Structured problem solver with 100+ solved DSA problems",
                  "AI integration proficiency using modern Google Gemini models",
                  "Strong Computer Science fundamentals (OOP, DBMS, Networks, OS)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#5C4B4B]">
                    <CheckCircle2 className="w-4 h-4 text-[#E59A9A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="bg-white rounded-2xl p-5 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8A7A7A] font-bold">LeetCode DSA Record</div>
                  <div className="text-base font-extrabold text-[#5C4B4B]">100+ Solved Problems</div>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-[#FFF0F0] text-[#E59A9A] rounded-full border border-[#FFDEDE]">
                Active
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
