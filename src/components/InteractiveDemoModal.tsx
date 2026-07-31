import React, { useState } from 'react';
import { Project } from '../types';
import { X, Play, Copy, Check, Sparkles, Terminal, Globe, Code2, Cpu, ExternalLink, RefreshCw, Layers } from 'lucide-react';

interface InteractiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // AI Code Reviewer Demo States
  const [codeToReview, setCodeToReview] = useState<string>(
    `function calculateTotal(items) {\n  let total = 0;\n  for (var i = 0; i < items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}`
  );
  const [reviewing, setReviewing] = useState<boolean>(false);
  const [reviewResult, setReviewResult] = useState<string | null>(null);

  // URL Shortener Demo States
  const [originalUrl, setOriginalUrl] = useState<string>('https://github.com/aditieishh/url-shortener');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState<number>(14);
  const [copied, setCopied] = useState<boolean>(false);

  // Orvexa Code Editor States
  const [editorCode, setEditorCode] = useState<string>(
    `// Orvexa Real-Time Collaborative Workspace\n// Room: #ORV-7892 (Connected Users: 3)\n\nimport { io } from 'socket.io-client';\n\nconst socket = io('https://orvexa-code-editor.onrender.com');\nsocket.emit('join-room', { roomId: 'ORV-7892' });\n\nconsole.log('Synchronized with peer cursors!');`
  );
  const [activePeers, setActivePeers] = useState<number>(3);

  const handleSimulateReview = () => {
    setReviewing(true);
    setReviewResult(null);
    setTimeout(() => {
      setReviewing(false);
      setReviewResult(`### AI Code Review Report (Gemini API)
✅ **Syntax & Execution**: Code is valid JavaScript.
⚠️ **Optimization Suggestion**: Replace 'var i' with 'let' or use \`items.reduce((acc, item) => acc + item.price, 0)\` for functional readability.
🛡️ **Safety Check**: Ensure \`items\` array is validated before access to prevent null/undefined runtime crashes.`);
    }, 1200);
  };

  const handleSimulateShorten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl.trim()) return;
    const hash = Math.random().toString(36).substring(2, 7);
    setShortUrl(`https://short.link/${hash}`);
    setClickCount(1);
  };

  const handleCopyLink = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#5C4B4B]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#F2E8DA] shadow-[8px_8px_0px_0px_#D9C5B2] relative flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 bg-[#5C4B4B] text-white flex items-center justify-between sticky top-0 z-10 border-b border-[#F2E8DA]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-[#E59A9A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">{project.title} &bull; Interactive Sandbox</h3>
              <p className="text-xs text-[#FFDEDE] font-medium">{project.subtitle}</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#FFF0F0] rounded-xl border border-[#FFDEDE] shadow-[2px_2px_0px_0px_#D9C5B2]">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-white text-[#5C4B4B] text-xs font-bold border border-[#F2E8DA]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-[#5C4B4B] hover:text-[#E59A9A] flex items-center gap-1 cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#5C4B4B] text-white text-xs font-bold flex items-center gap-1 hover:bg-[#5C4B4B]/90 transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#D9C5B2]"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E59A9A]" />
              </a>
            </div>
          </div>

          {/* DEMO TYPE 1: AI Code Reviewer */}
          {project.demoType === 'ai-reviewer' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#5C4B4B] flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#E59A9A]" />
                  <span>Submit Code for Gemini AI Review</span>
                </span>
                <span className="text-xs text-[#8A7A7A] font-medium">Live API Simulation</span>
              </div>

              <textarea
                value={codeToReview}
                onChange={(e) => setCodeToReview(e.target.value)}
                rows={5}
                className="w-full p-3 font-mono text-xs bg-[#5C4B4B] text-white rounded-xl border border-[#F2E8DA] focus:outline-none focus:border-[#E59A9A]"
              />

              <button
                onClick={handleSimulateReview}
                disabled={reviewing}
                className="px-5 py-2.5 rounded-full bg-[#5C4B4B] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-[2px_2px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none disabled:opacity-50"
              >
                {reviewing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#E59A9A]" />
                    <span>Analyzing Code via Gemini API...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-[#E59A9A]" />
                    <span>Run AI Code Audit</span>
                  </>
                )}
              </button>

              {reviewResult && (
                <div className="p-4 bg-[#FFF0F0] text-[#5C4B4B] rounded-xl font-mono text-xs space-y-2 border border-[#FFDEDE] shadow-[2px_2px_0px_0px_#D9C5B2] animate-in fade-in">
                  <div className="text-[#E59A9A] font-bold border-b border-[#FFDEDE] pb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#E59A9A]" />
                    <span>Gemini AI Audit Results</span>
                  </div>
                  <div className="whitespace-pre-line text-[#5C4B4B] leading-relaxed pt-1">
                    {reviewResult}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DEMO TYPE 2: URL Shortener */}
          {project.demoType === 'url-shortener' && (
            <div className="space-y-4">
              <div className="text-sm font-extrabold text-[#5C4B4B] flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#E59A9A]" />
                <span>Test Full-Stack URL Shortener</span>
              </div>

              <form onSubmit={handleSimulateShorten} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  placeholder="Enter long website URL..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#F2E8DA] text-xs sm:text-sm focus:outline-none focus:border-[#E59A9A] bg-[#FFF0F0]/30 text-[#5C4B4B] font-medium"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#5C4B4B] text-white font-bold text-xs transition-all shrink-0 cursor-pointer shadow-[2px_2px_0px_0px_#D9C5B2]"
                >
                  Shorten URL
                </button>
              </form>

              {shortUrl && (
                <div className="p-4 bg-[#FFF0F0] border border-[#FFDEDE] rounded-xl space-y-3 animate-in fade-in shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#5C4B4B]">
                    <span>Generated Short Link:</span>
                    <span className="text-[#E59A9A] bg-white border border-[#FFDEDE] px-2 py-0.5 rounded-full">Active Code</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#F2E8DA]">
                    <span className="font-mono text-sm font-bold text-[#E59A9A]">{shortUrl}</span>
                    <button
                      onClick={handleCopyLink}
                      className="px-3 py-1 rounded-full bg-[#FFF0F0] hover:bg-[#FFDEDE] text-[#5C4B4B] text-xs font-bold flex items-center gap-1 border border-[#FFDEDE] transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#E59A9A]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#8A7A7A] font-semibold pt-1">
                    <span>Original: <span className="font-mono truncate max-w-xs">{originalUrl}</span></span>
                    <span className="font-bold text-[#E59A9A]">Total Clicks: {clickCount}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DEMO TYPE 3: Orvexa Code Editor */}
          {project.demoType === 'code-editor' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#5C4B4B] flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#E59A9A]" />
                  <span>Orvexa Collaborative Code Editor Room</span>
                </span>
                <span className="text-xs bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#E59A9A] animate-ping" />
                  <span>{activePeers} Peer Cursors Live</span>
                </span>
              </div>

              <div className="bg-[#5C4B4B] rounded-xl overflow-hidden border border-[#F2E8DA] font-mono text-xs shadow-inner">
                <div className="bg-[#4D3E3E] px-4 py-2 border-b border-white/10 flex items-center justify-between text-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#E59A9A]" />
                    <div className="w-3 h-3 rounded-full bg-[#D9C5B2]" />
                    <div className="w-3 h-3 rounded-full bg-[#F2E8DA]" />
                    <span className="text-[11px] text-[#FFDEDE] ml-2">room: ORV-7892 &bull; index.js</span>
                  </div>
                  <button 
                    onClick={() => setActivePeers(p => p === 5 ? 2 : p + 1)}
                    className="text-[11px] text-[#E59A9A] hover:underline cursor-pointer font-bold"
                  >
                    + Simulate Peer Join
                  </button>
                </div>

                <textarea
                  value={editorCode}
                  onChange={(e) => setEditorCode(e.target.value)}
                  rows={6}
                  className="w-full p-4 bg-transparent text-white focus:outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* Key Highlights List */}
          <div className="pt-2 border-t border-[#F2E8DA]">
            <h4 className="text-xs font-extrabold text-[#8A7A7A] uppercase tracking-wider mb-2">Key Highlights</h4>
            <ul className="space-y-1.5 text-xs text-[#5C4B4B] font-medium">
              {project.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#E59A9A] font-bold">&bull;</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
