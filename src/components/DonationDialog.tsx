import React, { useEffect } from 'react';
import { ARI_REGISTRATION } from '../data/organizationData';
import { Info, X } from 'lucide-react';

interface DonationDialogProps {
  onClose: () => void;
}

export const DonationDialog: React.FC<DonationDialogProps> = ({ onClose }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/55 p-4 backdrop-blur-[2px]"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-dialog-title"
        className="relative my-auto w-full max-w-lg rounded-lg bg-white px-6 py-6 text-[#3f4859] shadow-2xl sm:px-7"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h1 id="donate-dialog-title" className="text-xl font-bold text-[#a51d32]">
            Support Our Mission
          </h1>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close donation details"
            className="-mr-1 -mt-1 rounded p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-4 text-base leading-relaxed">
          Your contribution helps us provide essential CPR training and equipment across Uganda. Thank you for your generosity!
        </p>

        <div className="space-y-4 text-base leading-6">
          <section aria-labelledby="donation-bank-title">
            <h2 id="donation-bank-title" className="font-bold">Bank Transfer (International)</h2>
            <p><span className="text-slate-500">Bank:</span> Lloyd&apos;s Bank</p>
            <p><span className="text-slate-500">Account Name:</span> London Point Care Ltd</p>
            <p><span className="text-slate-500">Sort Code:</span> 30-98-97</p>
            <p><span className="text-slate-500">Account Number:</span> 48646963</p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-5 text-slate-500">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <span>A SWIFT/BIC code is typically required for international bank transfers. Please contact ARI for the correct code for London Point Care Ltd.</span>
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              The listed account name differs from ARI Ltd. Please confirm with ARI that this account is authorized to receive donations before transferring funds.
            </p>
          </section>

          <section aria-labelledby="donation-mobile-title">
            <h2 id="donation-mobile-title" className="font-bold">Mobile Money (Uganda)</h2>
            <p><span className="text-slate-500">Network:</span> Airtel</p>
            <p><span className="text-slate-500">Number:</span> +256 758 360707</p>
          </section>
        </div>

        <p className="mt-4 text-sm leading-5 text-slate-500">
          For questions or other donation methods, please email us at{' '}
          <a
            href={`mailto:${ARI_REGISTRATION.contactEmail}`}
            className="font-medium text-[#74172F] underline underline-offset-2"
          >
            {ARI_REGISTRATION.contactEmail}
          </a>.
        </p>
      </section>
    </div>
  );
};