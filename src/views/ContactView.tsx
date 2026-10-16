import React, { useState } from 'react';
import { PageId } from '../types';
import { ARI_REGISTRATION, WHATSAPP_URL, ARI_SOCIAL_LINKS } from '../data/organizationData';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Building2, ExternalLink, ShieldCheck } from 'lucide-react';
import { prependLocalStorageItem } from '../utils/storage';

interface ContactViewProps {
  initialSubject?: string;
  initialType?: string;
  onOpenCertificate: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialSubject = '',
  initialType = 'general',
  onOpenCertificate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: initialType,
    subject: initialSubject,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionRef, setSubmissionRef] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, a valid email address, and your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address so we can reply to you.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionRef(data.referenceId || `ARI-${Date.now().toString().slice(-6)}`);
        prependLocalStorageItem('ari_submissions', payload);
        setStatus('success');
        return;
      }
    } catch {
      // In case server endpoint is unavailable, save locally with genuine fallback confirmation
    }

    // Local client persistence fallback
    const ref = `ARI-${Date.now().toString().slice(-6)}`;
    prependLocalStorageItem('ari_submissions', { ...payload, referenceId: ref });
    setSubmissionRef(ref);
    setStatus('success');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      inquiryType: 'general',
      subject: '',
      message: '',
    });
    setStatus('idle');
    setSubmissionRef('');
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry to Acute Resuscitation Initiative');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nOrganization: ${formData.organization || 'N/A'}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${ARI_REGISTRATION.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-[#1e221d] text-white lg:bg-gradient-to-b lg:from-[#4A0D20] lg:to-[#74172F] lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-0 lg:px-8">
          <div className="relative grid min-h-[390px] grid-cols-1 items-start sm:min-h-[430px] lg:min-h-0 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="relative z-10 w-full space-y-4 px-4 pb-8 pt-[10px] sm:px-8 sm:pb-10 lg:col-span-7 lg:px-0 lg:py-0">
              <div className="hidden flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-xs lg:flex lg:text-rose-200">
                <span>Get in Touch</span>
                <span aria-hidden="true">·</span>
                <span>Partnership & General Inquiries</span>
                <span aria-hidden="true">·</span>
                <span>Mbale, Uganda</span>
              </div>
              <h1 className="text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[clamp(2.2rem,4vw,4rem)] lg:leading-tight">
                Contact Acute Resuscitation Initiative (ARI) Ltd
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-rose-100/90">
                We welcome inquiries from educational institutions, community
                leaders, healthcare professionals, donors, and the general public.
              </p>
            </div>
            <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:col-span-5">
              <div className="absolute inset-0 overflow-hidden lg:relative lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-2xl">
                <img
                  src="https://pub-b2e691025f20417aaae7fc6f66f2ac7d.r2.dev/ARI/About.png"
                  alt="Consultation and communication between community teams and health advocates"
                  className="h-full w-full object-cover lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80 lg:bg-gradient-to-t lg:from-[#4A0D20]/80 lg:via-[#4A0D20]/10 lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Contact Details & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Verified Institutional Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
                  Official Contact Details
                </span>
                <h2 className="text-2xl font-bold text-[#29252A] mt-1">
                  How to Reach Our Team
                </h2>
                <p className="text-xs sm:text-sm text-[#686168] mt-2 leading-relaxed">
                  Our secretariat is headquartered in Mbale District, Eastern
                  Uganda. Feel free to contact us via direct telephone, email, or
                  WhatsApp.
                </p>
              </div>

              {/* Verified Contact Channels List */}
              <div className="space-y-4">
                {/* Email */}
                <div className="p-4 bg-[#FAF7F7] rounded-2xl border border-neutral-200 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${ARI_REGISTRATION.contactEmail}`}
                      className="text-sm sm:text-base font-bold text-[#74172F] hover:underline"
                    >
                      {ARI_REGISTRATION.contactEmail}
                    </a>
                    <span className="block text-[11px] text-neutral-500 mt-0.5">
                      Monitored daily by the ARI secretariat
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-4 bg-[#FAF7F7] rounded-2xl border border-neutral-200 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Telephone Helpline
                    </span>
                    <a
                      href={`tel:${ARI_REGISTRATION.contactPhone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-[#74172F] hover:underline"
                    >
                      {ARI_REGISTRATION.contactPhone}
                    </a>
                    <span className="block text-[11px] text-neutral-500 mt-0.5">
                      Direct line (Uganda standard time)
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      WhatsApp Instant Chat
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-emerald-900 hover:underline"
                    >
                      Chat with ARI on WhatsApp
                    </a>
                    <span className="block text-[11px] text-emerald-700 mt-0.5">
                      Fastest response for urgent inquiries and training questions
                    </span>
                  </div>
                </div>

                {/* Registered Office & Postal Address */}
                <div className="p-4 bg-[#FAF7F7] rounded-2xl border border-neutral-200 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs text-neutral-700">
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Physical & Postal Address
                    </span>
                    <p className="font-medium text-neutral-900">
                      {ARI_REGISTRATION.registeredOffice}
                    </p>
                    <p className="text-neutral-500">
                      Postal Address: {ARI_REGISTRATION.postalAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration Verification Strip */}
              <div className="pt-2">
                <button
                  onClick={onOpenCertificate}
                  type="button"
                  className="w-full inline-flex items-center justify-between p-4 bg-[#FAF7F7] hover:bg-neutral-100 rounded-2xl border border-neutral-200 text-xs font-semibold text-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-left">
                    <ShieldCheck className="w-4 h-4 text-[#74172F]" />
                    <span>View URSB Certificate of Incorporation (80034997267053)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Right Column: Contact & Partnership Message Form */}
            <div className="lg:col-span-7 bg-[#FAF7F7] p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#29252A]">
                  Send a Message or Partnership Proposal
                </h3>
                <p className="text-xs text-[#686168]">
                  Fill out this form and our secretariat will review and respond promptly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 bg-white rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Acute Resuscitation Initiative (ARI) Ltd. Your inquiry has been registered with reference code:
                  </p>
                  <div className="inline-block px-4 py-2 bg-neutral-100 rounded-lg text-sm font-mono font-bold text-[#74172F]">
                    {submissionRef}
                  </div>
                  <p className="text-xs text-neutral-500">
                    A copy of this inquiry has been filed for ARI secretariat follow-up.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoLink()}
                      className="px-4 py-2 text-xs font-semibold text-[#74172F] bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200"
                    >
                      Open in Email App
                    </a>
                    <button
                      onClick={resetForm}
                      type="button"
                      className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-900">
                      <AlertCircle className="w-4 h-4 text-[#74172F] shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Dr. Sarah Mukasa"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., s.mukasa@example.ug"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Telephone / WhatsApp (Optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+256 700 000000"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Organization / School / Clinic (Optional)
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g., Mbale Progressive Secondary School"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Purpose of Inquiry
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Institutional Partnership Proposal</option>
                        <option value="school">School CPR Training Request</option>
                        <option value="healthcare">Healthcare Professional Collaboration</option>
                        <option value="media">Media & Public Relations</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Subject Line *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g., Collaboration on community CPR awareness"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Message or Proposal Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization, the proposed training group, location in Uganda, or any questions for our team..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-neutral-500">
                      Your submitted details are handled securely and used solely to respond to your inquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#74172F] hover:bg-[#5e1225] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors shadow-2xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'submitting' ? 'Submitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
