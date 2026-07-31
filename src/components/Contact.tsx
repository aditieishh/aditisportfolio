import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { Send, Mail, Phone, MapPin, CheckCircle, Copy, Check, Github, Linkedin, Code } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Linkedin': return <Linkedin className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
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
            Open for SDE, Full-Stack, and Software Engineering opportunities. Feel free to send a message!
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
                {/* Email Item */}
                <div className="p-4 bg-[#FFF0F0] rounded-xl border border-[#FFDEDE] flex items-center justify-between gap-3 shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white border border-[#F2E8DA] text-[#E59A9A]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8A7A7A] font-bold">Direct Email</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#5C4B4B] truncate max-w-[180px] sm:max-w-none">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-full bg-white hover:bg-[#FFDEDE] text-[#5C4B4B] border border-[#F2E8DA] transition-colors cursor-pointer"
                    title="Copy Email"
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
                    <div className="text-xs sm:text-sm font-extrabold text-[#5C4B4B]">
                      {PERSONAL_INFO.phone}
                    </div>
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

              {/* Social Media Profile Cards */}
              

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] relative overflow-hidden">
            
            <h3 className="text-xl font-extrabold text-[#5C4B4B] mb-6">
              Send a Direct Inquiry
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-[#FFF0F0] text-[#E59A9A] border border-[#FFDEDE] rounded-full flex items-center justify-center mx-auto shadow-[2px_2px_0px_0px_#D9C5B2]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-[#5C4B4B]">Message Sent Successfully!</h4>
                <p className="text-xs sm:text-sm text-[#5C4B4B]/80 max-w-sm mx-auto font-medium">
                  Thank you for reaching out, Aditi will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#5C4B4B] text-white font-bold text-xs shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E59A9A]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
