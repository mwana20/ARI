import React, { useState } from 'react';
import { PageId } from '../types';
import { WHATSAPP_URL, ARI_REGISTRATION } from '../data/organizationData';
import { Menu, X, HeartHandshake, Phone, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenPartner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About ARI' },
    { id: 'work', label: 'Our Work' },
    { id: 'resources', label: 'CPR Resources' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#74172F]/10 transition-all duration-200">
      {/* Top Utility Bar for Contact & Direct WhatsApp */}
      <div className="bg-[#4A0D20] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-rose-100/90 font-medium tracking-wide">
              Acute Resuscitation Initiative (ARI) Ltd • Mbale, Uganda
            </span>
            <span className="text-rose-200/40">|</span>
            <a
              href={`tel:${ARI_REGISTRATION.contactPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-rose-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-300" />
              <span>{ARI_REGISTRATION.contactPhone}</span>
            </a>
            <span className="text-rose-200/40">|</span>
            <a
              href={`mailto:${ARI_REGISTRATION.contactEmail}`}
              className="hover:text-rose-200 transition-colors"
            >
              {ARI_REGISTRATION.contactEmail}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Helpline</span>
            </a>
            <span className="text-rose-200/40">|</span>
            <span className="text-rose-200/80 text-[11px]">
              URSB Reg: 80034997267053
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            type="button"
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] rounded-lg p-1"
          >
            {/* Visual Brand Monogram Badge */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#74172F] to-[#4A0D20] text-white flex flex-col items-center justify-center shadow-md shadow-[#74172F]/20 font-bold tracking-tighter shrink-0 border border-white/20">
              <span className="text-sm font-extrabold leading-none">ARI</span>
              <span className="text-[8px] uppercase tracking-widest text-rose-200 leading-none mt-0.5">UG</span>
            </div>

            <div>
              <span className="block text-base sm:text-lg font-extrabold text-[#74172F] tracking-tight leading-tight">
                Acute Resuscitation Initiative
              </span>
              <span className="block text-[11px] font-medium text-[#686168] tracking-wide">
                ARI Ltd • Saving Lives Through CPR Education
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] ${
                    isActive
                      ? 'text-[#74172F] bg-[#FAF7F7] border-b-2 border-[#74172F]'
                      : 'text-[#29252A] hover:text-[#74172F] hover:bg-[#FAF7F7]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action: Partner With ARI */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenPartner}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#74172F] hover:bg-[#5e1225] active:bg-[#4A0D20] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] focus-visible:ring-offset-2"
            >
              <HeartHandshake className="w-4 h-4 text-rose-200" />
              <span>Partner With ARI</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPartner}
              type="button"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#74172F] rounded-lg sm:inline-flex"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2.5 text-[#29252A] hover:text-[#74172F] hover:bg-neutral-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  type="button"
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl text-left transition-colors ${
                    isActive
                      ? 'text-[#74172F] bg-[#FAF7F7] font-bold'
                      : 'text-[#29252A] hover:text-[#74172F] hover:bg-neutral-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartner();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#74172F] hover:bg-[#4A0D20] rounded-xl shadow-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Partner With ARI</span>
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
              >
                <span>Chat on WhatsApp (+256 758 360707)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
