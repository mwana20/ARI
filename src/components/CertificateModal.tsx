import React from 'react';
import { ARI_REGISTRATION } from '../data/organizationData';
import { X, Printer, ShieldCheck, ExternalLink, Building2, Calendar, FileText, MapPin } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-neutral-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#74172F] text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-rose-200" />
            <h2 id="certificate-title" className="text-base sm:text-lg font-bold tracking-tight">
              Official Certificate of Incorporation
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close certificate dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Canvas */}
        <div className="p-6 sm:p-10 bg-[#FAF7F7]">
          {/* Framed Certificate Document */}
          <div className="relative bg-white border-8 border-double border-[#74172F]/30 p-6 sm:p-10 rounded-lg shadow-sm text-center">
            {/* National Crest & Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-block p-2 rounded-full bg-[#FAF7F7] border border-[#74172F]/20 mb-2">
                <ShieldCheck className="w-10 h-10 text-[#74172F]" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#686168]">
                THE REPUBLIC OF UGANDA
              </p>
              <p className="text-xs font-medium text-[#686168]">
                The Companies Act, 2012
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#74172F] tracking-wide pt-2">
                CERTIFICATE OF INCORPORATION
              </h3>
              <p className="text-xs font-mono text-gray-500 pt-1">
                Company Registration No. <span className="font-bold text-[#29252A]">{ARI_REGISTRATION.registrationNumber}</span>
              </p>
            </div>

            {/* Official Certification Declaration */}
            <div className="my-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#29252A] max-w-xl mx-auto">
              <p className="font-serif italic text-neutral-600">
                I hereby Certify that
              </p>
              <p className="text-lg sm:text-xl font-bold tracking-tight text-[#4A0D20] uppercase bg-[#FAF7F7] py-2 px-4 rounded border border-neutral-200">
                {ARI_REGISTRATION.organizationName}
              </p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-normal">
                is this day incorporated under the Companies Act, 2012 as a{' '}
                <span className="font-semibold text-[#74172F]">{ARI_REGISTRATION.entityType}</span>.
              </p>
              <div className="pt-2 text-xs text-neutral-500">
                Given under my hand at Kampala, this{' '}
                <span className="font-semibold text-neutral-800">5th day of November, 2024</span>.
              </div>
            </div>

            {/* Verification Metadata Grid */}
            <div className="mt-8 pt-6 border-t border-dashed border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs text-neutral-600">
              <div className="flex items-start gap-2 bg-[#FAF7F7] p-3 rounded-lg">
                <Building2 className="w-4 h-4 text-[#74172F] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">Registrar of Companies</span>
                  <span>Uganda Registration Services Bureau (URSB)</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-[#FAF7F7] p-3 rounded-lg">
                <Calendar className="w-4 h-4 text-[#74172F] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">Incorporation Date</span>
                  <span>November 5, 2024</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-[#FAF7F7] p-3 rounded-lg sm:col-span-2">
                <MapPin className="w-4 h-4 text-[#74172F] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">Registered Office in Uganda</span>
                  <span>{ARI_REGISTRATION.registeredOffice} (P. O. Box 1873, Mbale)</span>
                </div>
              </div>
            </div>

            {/* Official Footer Statement */}
            <div className="mt-6 text-[11px] text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">
              This digital presentation reflects the verified institutional registration records of Acute Resuscitation Initiative (ARI) Ltd filed with the Uganda Registration Services Bureau.
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-neutral-200 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>URSB Verified Registration • Status: Active & In Good Standing</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
