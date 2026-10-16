import React from 'react';
import { ARI_REGISTRATION } from '../data/organizationData';
import { X, Printer, ShieldCheck } from 'lucide-react';

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
          <div className="certificate-print-area rounded-lg border border-neutral-200 bg-white p-2 shadow-sm">
            <img
              src="/assets/license.jpg"
              alt="ARI Ltd Certificate of Incorporation issued by the Uganda Registration Services Bureau on 5 November 2024, registration number 80034997267053"
              className="block h-auto w-full rounded object-contain"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-neutral-200 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Certificate issued by URSB • Registration No. {ARI_REGISTRATION.registrationNumber}</span>
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
