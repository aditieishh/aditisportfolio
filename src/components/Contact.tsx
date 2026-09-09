import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Send, Mail, Phone, MapPin, CheckCircle, Copy, Check, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'activation_needed' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const subjectLine = formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || 'Visitor'}`;

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(
    `Hi Aditi,\n\n${formData.message.trim() || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${formData.name.trim() || 'Visitor'}\n${formData.email.trim()}`
  )}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(
    `Hi Aditi,\n\n${formData.message.trim() || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${formData.name.trim() || 'Visitor'}\n${formData.email.trim()}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      // Real form submission via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: subjectLine,
          message: formData.message,
          _cc: 'aditipallai3@gmail.com',
          _template: 'box',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      // Backup locally so no enquiry is lost
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_enquiries') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('portfolio_enquiries', JSON.stringify(stored));
      } catch {
        // ignore localStorage access limits if any
      }

      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setStatusMessage('Your inquiry has been successfully sent to Aditi! She will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('activation_needed');
        setStatusMessage(
          "FormSubmit has sent a one-time 'Activate Form' link to Aditi's inbox. Once clicked, all messages will flow into her inbox automatically."
        );
      } else {
        throw new Error(data.message || 'Failed to dispatch form submission.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Network error or blocked request.';
      setStatus('error');
      setStatusMessage(message);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-xs font-bold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C4B4B] tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-[#5C4B4B]/80 mt-2 text-sm sm:text-base font-medium">
            Open for SDE, Full-Stack, and Software Engineering opportunities. Feel free to send an inquiry!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] space-y-6">
              <h3 className="text-xl font-extrabold text-[#5C4B4B]">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Email Item - Clickable to open email client + Copy button */}
                <div className="p-4 bg-[#FFF0F0] rounded-xl border border-[#FFDEDE] flex items-center justify-between gap-3 shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3 group overflow-hidden"
                    title="Click to compose email"
                  >
                    <div className="p-2.5 rounded-lg bg-white border border-[#F2E8DA] text-[#E59A9A] group-hover:bg-[#E59A9A] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-[#8A7A7A] font-bold flex items-center gap-1">
                        <span>Direct Email</span>
                        <ExternalLink className="w-3 h-3 text-[#8A7A7A] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#5C4B4B] group-hover:text-[#E59A9A] transition-colors truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-full bg-white hover:bg-[#FFDEDE] text-[#5C4B4B] border border-[#F2E8DA] transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#E59A9A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 bg-[#FFF0F0] rounded-xl border border-[#FFDEDE] flex items-center gap-3 shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <div className="p-2.5 rounded-lg bg-white border border-[#F2E8DA] text-[#E59A9A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8A7A7A] font-bold">Phone Number</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-extrabold text-[#5C4B4B] hover:text-[#E59A9A] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 bg-[#FFF0F0] rounded-xl border border-[#FFDEDE] flex items-center gap-3 shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <div className="p-2.5 rounded-lg bg-white border border-[#F2E8DA] text-[#E59A9A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8A7A7A] font-bold">Location</div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#5C4B4B]">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Direct Email Buttons */}
              <div className="pt-2 border-t border-[#F2E8DA] space-y-2">
                <span className="text-xs font-bold text-[#8A7A7A] uppercase tracking-wider block">
                  Direct Inbox Composing
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-white border border-[#F2E8DA] hover:border-[#FFDEDE] text-[#5C4B4B] hover:text-[#E59A9A] text-xs font-bold flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0] transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E59A9A]" />
                    <span>Open in Gmail</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="py-2 px-3 rounded-xl bg-white border border-[#F2E8DA] hover:border-[#FFDEDE] text-[#5C4B4B] hover:text-[#E59A9A] text-xs font-bold flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0] transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#E59A9A]" />
                    <span>Email App</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] relative overflow-hidden">
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-[#5C4B4B]">
                Send a Direct Inquiry
              </h3>
              <span className="text-[11px] font-bold text-[#8A7A7A] bg-[#FFF0F0] border border-[#FFDEDE] px-2.5 py-1 rounded-full">
                Delivered to Aditi's Inbox
              </span>
            </div>

            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-[#FFF0F0] text-[#E59A9A] border border-[#FFDEDE] rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#D9C5B2]">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#5C4B4B]">Message Delivered Successfully!</h4>
                  <p className="text-xs sm:text-sm text-[#5C4B4B]/80 max-w-md mx-auto font-medium mt-1">
                    {statusMessage || 'Your enquiry has been delivered to Aditi Pallai. Thank you for connecting!'}
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setStatus('idle')}
                    className="py-2.5 px-5 rounded-full bg-[#5C4B4B] text-white font-bold text-xs shadow-[2px_2px_0px_0px_#D9C5B2] hover:bg-[#4a3c3c] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={mailtoUrl}
                    className="py-2.5 px-5 rounded-full bg-white border border-[#F2E8DA] text-[#5C4B4B] hover:text-[#E59A9A] font-bold text-xs shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0] transition-all flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Also Send Copy via Mail App</span>
                  </a>
                </div>
              </div>
            ) : status === 'activation_needed' ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-[#FFF0F0] text-[#E59A9A] border border-[#FFDEDE] rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#D9C5B2]">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#5C4B4B]">Enquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-[#5C4B4B]/80 max-w-md mx-auto font-medium mt-1">
                    FormSubmit requires a 1-time activation: please check your inbox (or spam) for the confirmation link. You can also send directly right now:
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 rounded-full bg-[#E59A9A] text-white font-bold text-xs shadow-[2px_2px_0px_0px_#D9C5B2] hover:bg-[#d88989] transition-all flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Gmail Now</span>
                  </a>
                  <button
                    onClick={() => setStatus('idle')}
                    className="py-2.5 px-5 rounded-full bg-white border border-[#F2E8DA] text-[#5C4B4B] hover:text-[#E59A9A] font-bold text-xs shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0] transition-all cursor-pointer"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-[#FFF0F0] border border-[#FFDEDE] text-xs space-y-2 animate-in fade-in">
                    <div className="flex items-start gap-2 text-[#E59A9A] font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{statusMessage || 'Unable to deliver message automatically.'}</span>
                    </div>
                    <p className="text-[#5C4B4B] text-[11px] font-medium pl-6">
                      No problem! You can send your prefilled message directly using one of these options:
                    </p>
                    <div className="flex items-center gap-2 pl-6 pt-1">
                      <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-3 rounded-lg bg-white border border-[#FFDEDE] text-[#5C4B4B] hover:text-[#E59A9A] font-bold text-xs flex items-center gap-1 shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#E59A9A]" />
                        <span>Send via Gmail</span>
                      </a>
                      <a
                        href={mailtoUrl}
                        className="py-1.5 px-3 rounded-lg bg-white border border-[#FFDEDE] text-[#5C4B4B] hover:text-[#E59A9A] font-bold text-xs flex items-center gap-1 shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#E59A9A]" />
                        <span>Email App</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4B4B]">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#F2E8DA] text-xs sm:text-sm focus:outline-none focus:border-[#E59A9A] bg-[#FFF0F0]/30 text-[#5C4B4B] font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#5C4B4B]">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#F2E8DA] text-xs sm:text-sm focus:outline-none focus:border-[#E59A9A] bg-[#FFF0F0]/30 text-[#5C4B4B] font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#5C4B4B]">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="SDE Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F2E8DA] text-xs sm:text-sm focus:outline-none focus:border-[#E59A9A] bg-[#FFF0F0]/30 text-[#5C4B4B] font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#5C4B4B]">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Aditi, I checked out your portfolio and would love to connect regarding an SDE role..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F2E8DA] text-xs sm:text-sm focus:outline-none focus:border-[#E59A9A] bg-[#FFF0F0]/30 text-[#5C4B4B] font-medium resize-none"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 rounded-full bg-[#5C4B4B] text-white font-bold text-xs shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw className="w-4 h-4 text-[#E59A9A] animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#E59A9A]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#8A7A7A] font-medium">
                    <span>Or send directly with prefilled message:</span>
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E59A9A] font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      Gmail <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>•</span>
                    <a
                      href={mailtoUrl}
                      className="text-[#E59A9A] font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      Mail App
                    </a>
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
