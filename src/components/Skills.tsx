import React, { useState } from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Database, Cpu, Wrench, BookOpen, Layers, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_CATEGORIES.map(c => c.title)];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#E59A9A]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#E59A9A]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#D9C5B2]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#E59A9A]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#5C4B4B]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#E59A9A]" />;
      default: return <Layers className="w-5 h-5 text-[#E59A9A]" />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? SKILLS_CATEGORIES
    : SKILLS_CATEGORIES.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#FFFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-xs font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C4B4B] tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-[#5C4B4B]/80 mt-2 text-sm sm:text-base font-medium">
            Comprehensive skill set spanning full-stack development, machine learning, databases, and core CS concepts.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#5C4B4B] text-white shadow-[2px_2px_0px_0px_#D9C5B2]'
                  : 'bg-white text-[#5C4B4B] border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, categoryIdx) => (
            <div 
              key={categoryIdx}
              className="bg-white rounded-2xl p-6 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#EBD8C3] transition-all space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#F2E8DA]">
                <div className="p-2.5 rounded-xl bg-[#FFF0F0] border border-[#FFDEDE]">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="font-extrabold text-[#5C4B4B] text-lg">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#5C4B4B]">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E59A9A] shrink-0" />
                        <span className="font-bold text-[#5C4B4B]">{skill.name}</span>
                      </div>
                      {skill.badge && (
                        <span className="text-[10px] font-extrabold text-[#E59A9A] bg-[#FFF0F0] px-2 py-0.5 rounded-full border border-[#FFDEDE]">
                          {skill.badge}
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {skill.level && (
                      <div className="w-full h-2 bg-[#F2E8DA] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#E59A9A] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
