import React from 'react';
import { PageId } from '../types';
import { ARI_REGISTRATION, ARI_SOCIAL_LINKS, WHATSAPP_URL } from '../data/organizationData';
import { Mail, Phone, MapPin, ShieldCheck, HeartPulse, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCertificate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCertificate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A0D20] text-neutral-200 border-t border-[#74172F]">
      {/* Top Banner: Emergency Clarification & Medical Disclaimer */}
      <div className="bg-[#380A18] border-b border-[#74172F]/50 px-4 py-3 text-xs text-rose-100/90 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="font-semibold text-rose-300">Public Health Notice:</span>
          <span>
            This website provides educational awareness. In an active cardiac emergency, shout for immediate help, alert local clinical transport, and begin uninterrupted chest compressions.
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Organization & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#74172F] text-white flex flex-col items-center justify-center font-bold tracking-tighter border border-rose-300/20 shadow-xs">
                <span className="text-sm font-extrabold leading-none">ARI</span>
                <span className="text-[7px] uppercase tracking-widest text-rose-200 leading-none mt-0.5">UG</span>
              </div>
              <div>
                <span className="block text-base font-bold text-white tracking-tight">
                  Acute Resuscitation Initiative
                </span>
                <span className="block text-xs text-rose-200/80 font-medium">
                  ARI Ltd • Non-Profit Organization
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
              Acute Resuscitation Initiative (ARI) Ltd is dedicated to expanding cardiopulmonary resuscitation (CPR) awareness, accessible training, and life-saving preparedness across Ugandan communities.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCertificate}
                type="button"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-rose-100 bg-[#74172F]/70 hover:bg-[#74172F] rounded-lg transition-colors border border-rose-300/20 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
              >
                <ShieldCheck className="w-4 h-4 text-rose-300" />
                <span>View Official Certificate (URSB: 80034997267053)</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  About ARI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  CPR Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  News & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  type="button"
                  className="hover:text-white transition-colors text-left"
                >
                  Contact ARI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Direct Contact
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-rose-100/90">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-rose-200/60 font-medium">Official Inquiries</span>
                  <a
                    href={`mailto:${ARI_REGISTRATION.contactEmail}`}
                    className="hover:text-white hover:underline transition-colors font-medium"
                  >
                    {ARI_REGISTRATION.contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-rose-200/60 font-medium">Telephone</span>
                  <a
                    href={`tel:${ARI_REGISTRATION.contactPhone.replace(/\s+/g, '')}`}
                    className="hover:text-white hover:underline transition-colors font-medium"
                  >
                    {ARI_REGISTRATION.contactPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div>
                  <span className="block text-[11px] text-rose-200/60 font-medium">WhatsApp Helpline</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 hover:underline transition-colors font-semibold"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office & Social Media */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Registered Office
            </p>
            <div className="text-xs text-rose-100/80 space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>
                  {ARI_REGISTRATION.registeredOffice}
                </span>
              </div>
              <p className="pl-6 text-rose-200/70">
                Postal Address: {ARI_REGISTRATION.postalAddress}
              </p>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-rose-300 mb-2">
                Connect With ARI
              </p>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href={ARI_SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Acute Resuscitation Initiative on Facebook"
                  className="w-8 h-8 rounded-lg bg-[#74172F] hover:bg-[#922B46] text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href={ARI_SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Acute Resuscitation Initiative on X"
                  className="w-8 h-8 rounded-lg bg-[#74172F] hover:bg-[#922B46] text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={ARI_SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Acute Resuscitation Initiative on LinkedIn"
                  className="w-8 h-8 rounded-lg bg-[#74172F] hover:bg-[#922B46] text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={ARI_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Acute Resuscitation Initiative on Instagram"
                  className="w-8 h-8 rounded-lg bg-[#74172F] hover:bg-[#922B46] text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Acute Resuscitation Initiative on WhatsApp"
                  className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, URSB Registration & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#74172F] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-rose-200/70">
          <p>
            © {new Date().getFullYear()} {ARI_REGISTRATION.organizationName}. Incorporated in the Republic of Uganda (Reg. No. {ARI_REGISTRATION.registrationNumber}).
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCertificate}
              type="button"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Legal Status
            </button>
            <span className="text-rose-200/30">·</span>
            <button
              onClick={() => handleNav('about')}
              type="button"
              className="hover:text-white transition-colors"
            >
              Governance & Oversight
            </button>
            <span className="text-rose-200/30">·</span>
            <button
              onClick={() => handleNav('resources')}
              type="button"
              className="hover:text-white transition-colors"
            >
              Educational Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
