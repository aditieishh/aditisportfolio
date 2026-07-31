import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#5C4B4B]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden border border-[#F2E8DA] shadow-[8px_8px_0px_0px_#D9C5B2] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#5C4B4B] text-white flex items-center justify-between border-b border-[#F2E8DA]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#E59A9A]" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">Aditi Pallai &bull; Resume</h3>
              <p className="text-xs text-[#FFDEDE]">Google Drive Document</p>
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
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button 
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded Google Drive Resume PDF */}
        <div className="p-4 sm:p-6 bg-[#FFFBFB] flex-1 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-[#FFF0F0] border border-[#FFDEDE] rounded-xl">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-white text-[#E59A9A] border border-[#FFDEDE]">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#5C4B4B]">
                Official Google Drive Resume Link
              </span>
            </div>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-[#E59A9A] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[650px] max-h-[70vh] rounded-xl overflow-hidden border border-[#F2E8DA] bg-white shadow-inner">
            <iframe
              src="https://drive.google.com/file/d/1UMd1-d36iywI7nM1MtNbJgtVrsnRZlBy/preview"
              title="Aditi Pallai Resume Google Drive Preview"
              className="w-full h-full border-0"
              allow="autoplay"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

