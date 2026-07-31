import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS_DATA, ACHIEVEMENTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ADITI PALLAI
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

CAREER OBJECTIVE
${PERSONAL_INFO.about}

EDUCATION
${EDUCATION_DATA.institution} (${EDUCATION_DATA.period})
${EDUCATION_DATA.degree} | CGPA: ${EDUCATION_DATA.cgpa}
Coursework: ${EDUCATION_DATA.relevantCoursework.join(', ')}

PROJECTS
${PROJECTS_DATA.map(p => `- ${p.title}: ${p.subtitle}\n  Tech: ${p.technologies.join(', ')}\n  Highlights: ${p.keyHighlights.join('; ')}`).join('\n\n')}

AWARDS & ACHIEVEMENTS
${ACHIEVEMENTS_DATA.map(a => `- ${a.title}: ${a.description}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `- ${c.title} (${c.provider})`).join('\n')}
    `;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#5C4B4B]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#F2E8DA] shadow-[8px_8px_0px_0px_#D9C5B2] flex flex-col">
        
        {/* Sticky Action Header */}
        <div className="p-4 sm:p-5 bg-[#5C4B4B] text-white flex items-center justify-between sticky top-0 z-10 print:hidden border-b border-[#F2E8DA]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#E59A9A]" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">Aditi Pallai &bull; SDE Resume</h3>
              <p className="text-xs text-[#FFDEDE]">Latest Official Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#E59A9A] hover:bg-[#d88989] text-white text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_0px_#D9C5B2] cursor-pointer"
              title="Open Resume directly in Google Drive"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Google Drive Resume</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#E59A9A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-[#FFF0F0] text-[#5C4B4B] hover:bg-white text-xs font-extrabold flex items-center gap-1.5 transition-colors border border-[#FFDEDE] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#E59A9A]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button 
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 text-[#5C4B4B] space-y-6 font-sans text-xs sm:text-sm bg-white print:p-0">
          
          {/* Google Drive Embedded PDF Section */}
          <div className="bg-[#FFF0F0] border border-[#FFDEDE] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#F2E8DA] space-y-3 print:hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#FFDEDE] text-[#E59A9A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#5C4B4B]">Google Drive Resume PDF</h4>
                  <p className="text-xs text-[#8A7A7A]">Official Resume Document</p>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#E59A9A] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 hover:bg-[#d88989] transition-all shadow-[2px_2px_0px_0px_#D9C5B2] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open in Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Drive Preview Frame */}
            <div className="w-full h-[520px] rounded-xl overflow-hidden border border-[#F2E8DA] bg-white shadow-inner">
              <iframe
                src="https://drive.google.com/file/d/1UMd1-d36iywI7nM1MtNbJgtVrsnRZlBy/preview"
                title="Aditi Pallai Resume Google Drive Preview"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
          
          {/* Document Header */}
          <div className="border-b-2 border-[#5C4B4B] pb-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#5C4B4B] uppercase">
              {PERSONAL_INFO.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-[#5C4B4B]/80 pt-2 font-semibold">
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-[#E59A9A]" />{PERSONAL_INFO.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#E59A9A]" />{PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3 h-3 text-[#E59A9A]" />LinkedIn</span>
              <span className="flex items-center gap-1"><Github className="w-3 h-3 text-[#E59A9A]" />github.com/aditieishh</span>
            </div>
          </div>

          {/* Section: Career Objective */}
          <div>
            <h2 className="text-xs font-extrabold uppercase text-[#5C4B4B] border-b border-[#F2E8DA] pb-1 mb-2 tracking-wider">
              Career Objective
            </h2>
            <p className="text-[#5C4B4B]/90 leading-relaxed text-xs sm:text-sm font-medium">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-extrabold uppercase text-[#5C4B4B] border-b border-[#F2E8DA] pb-1 mb-2 tracking-wider">
              Education
            </h2>
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <span className="font-extrabold text-[#5C4B4B]">{EDUCATION_DATA.institution}</span>
                <div className="text-[#5C4B4B]/80 font-medium">{EDUCATION_DATA.degree}</div>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#5C4B4B]">{EDUCATION_DATA.period}</span>
                <div className="font-extrabold text-[#E59A9A]">CGPA: {EDUCATION_DATA.cgpa}</div>
              </div>
            </div>
            <div className="text-xs text-[#8A7A7A] pt-1">
              <span className="font-bold">Relevant Coursework:</span> {EDUCATION_DATA.relevantCoursework.join(', ')}
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h2 className="text-xs font-extrabold uppercase text-[#5C4B4B] border-b border-[#F2E8DA] pb-1 mb-2 tracking-wider">
              Key Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-center font-extrabold text-[#5C4B4B]">
                    <span>{p.title} – {p.subtitle}</span>
                    <span className="text-xs font-mono text-[#8A7A7A]">{p.category}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#5C4B4B]/80 space-y-0.5 font-medium">
                    {p.keyHighlights.map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-[#E59A9A] font-extrabold">
                    Tech: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Awards & Achievements */}
          <div>
            <h2 className="text-xs font-extrabold uppercase text-[#5C4B4B] border-b border-[#F2E8DA] pb-1 mb-2 tracking-wider">
              Awards & Achievements
            </h2>
            <ul className="list-disc list-inside text-xs text-[#5C4B4B]/80 space-y-1 font-medium">
              {ACHIEVEMENTS_DATA.map((a) => (
                <li key={a.id}>
                  <strong className="text-[#5C4B4B]">{a.title}:</strong> {a.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="text-xs font-extrabold uppercase text-[#5C4B4B] border-b border-[#F2E8DA] pb-1 mb-2 tracking-wider">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-[#5C4B4B]/80 space-y-1 font-medium">
              {CERTIFICATIONS_DATA.map((c, idx) => (
                <li key={idx}>
                  <strong className="text-[#5C4B4B]">{c.title}</strong> – {c.provider}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
