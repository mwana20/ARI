import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CertificateModal } from './components/CertificateModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { WorkView } from './views/WorkView';
import { ContactView } from './views/ContactView';
import { DonationDialog } from './components/DonationDialog';
import { HeartHandshake, X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ARI_REGISTRATION, WHATSAPP_URL } from './data/organizationData';
import { prependLocalStorageItem } from './utils/storage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [pageBeforeDonate, setPageBeforeDonate] = useState<PageId>('home');
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Partnership quick proposal modal state
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    partnerType: 'School or Educational Institution',
    location: '',
    proposal: '',
  });
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Listen to browser hash changes if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'work', 'contact', 'donate'];
      setIsPartnerModalOpen(false);
      setPartnerSuccess(false);
      if (hash === 'donate') {
        setIsDonateOpen(true);
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
        setIsDonateOpen(false);
      } else {
        setCurrentPage('home');
        setIsDonateOpen(false);
        if (hash) {
          window.history.replaceState(window.history.state, '', '#home');
        }
      }
      if (hash !== 'donate') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    setIsPartnerModalOpen(false);
    setPartnerSuccess(false);

    if (page === 'donate') {
      setPageBeforeDonate(currentPage);
      setIsDonateOpen(true);
      window.location.hash = page;
      return;
    }

    setCurrentPage(page);
    setIsDonateOpen(false);
    window.location.hash = page;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitting(true);

    const payload = {
      ...partnerForm,
      message: partnerForm.proposal,
      inquiryType: 'partnership',
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Local fallback
    }

    prependLocalStorageItem('ari_partnerships', payload);

    setPartnerSubmitting(false);
    setPartnerSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F7] text-[#29252A] selection:bg-[#74172F]/15 selection:text-[#74172F]">
      {/* Primary Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPartner={() => setIsPartnerModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenPartner={() => setIsPartnerModalOpen(true)}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenPartner={() => setIsPartnerModalOpen(true)}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
        {currentPage === 'work' && (
          <WorkView
            onNavigate={handleNavigate}
            onOpenPartner={() => setIsPartnerModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
      </main>

      {isDonateOpen && (
        <DonationDialog onClose={() => handleNavigate(pageBeforeDonate)} />
      )}

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Official Certificate of Incorporation Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      {/* Quick Partnership Proposal Dialog */}
      {isPartnerModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
        >
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-neutral-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#74172F] text-white">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-rose-200" />
                <h3 id="partner-modal-title" className="text-base sm:text-lg font-bold">
                  Partner With Acute Resuscitation Initiative
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsPartnerModalOpen(false);
                  setPartnerSuccess(false);
                }}
                type="button"
                className="p-1 text-white/80 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {partnerSuccess ? (
                <div className="text-center space-y-4 py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">
                    Partnership Proposal Submitted
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for your interest in collaborating with ARI. Our leadership team reviews proposals weekly and will reach out to discuss collaborative pathways.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsPartnerModalOpen(false);
                        setPartnerSuccess(false);
                      }}
                      type="button"
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#74172F] rounded-xl hover:bg-[#5e1225]"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    ARI collaborates with educational institutions, community groups, healthcare clinics, and corporate entities across Uganda to expand CPR awareness.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        placeholder="e.g., Patrick Okello"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="e.g., okello@institution.ug"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Organization / Entity *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.organization}
                        onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                        placeholder="e.g., Nabumali High School"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Entity Category
                      </label>
                      <select
                        value={partnerForm.partnerType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                      >
                        <option>School or Educational Institution</option>
                        <option>Healthcare Center or Clinic</option>
                        <option>Transport or Taxi Association</option>
                        <option>Faith-Based Community</option>
                        <option>Corporate Employer / Enterprise</option>
                        <option>Civil Society / NGO Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Location in Uganda (District / Town)
                    </label>
                    <input
                      type="text"
                      value={partnerForm.location}
                      onChange={(e) => setPartnerForm({ ...partnerForm, location: e.target.value })}
                      placeholder="e.g., Mbale City / Tororo / Jinja / Kampala"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Partnership Idea / Intended Resuscitation Objective *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={partnerForm.proposal}
                      onChange={(e) => setPartnerForm({ ...partnerForm, proposal: e.target.value })}
                      placeholder="Briefly describe what you would like to accomplish with ARI (e.g., host a CPR demonstration for 200 secondary students)..."
                      className="w-full px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 hover:underline"
                    >
                      Or chat on WhatsApp
                    </a>

                    <button
                      type="submit"
                      disabled={partnerSubmitting}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#74172F] hover:bg-[#5e1225] disabled:opacity-40 rounded-xl transition-colors shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{partnerSubmitting ? 'Submitting...' : 'Submit Proposal'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />
    </div>
  );
}
