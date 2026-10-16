import React, { useState } from 'react';
import { CPR_EMERGENCY_STEPS } from '../data/cprResourcesData';
import { Activity, PhoneCall, HeartPulse, UserCheck, ChevronRight, AlertCircle } from 'lucide-react';

export const EmergencyActionChain: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <UserCheck key="0" className="w-6 h-6 text-[#74172F]" />,
    <PhoneCall key="1" className="w-6 h-6 text-[#74172F]" />,
    <HeartPulse key="2" className="w-6 h-6 text-[#74172F]" />,
    <Activity key="3" className="w-6 h-6 text-[#74172F]" />,
  ];

  return (
    <section className="py-16 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
            <span>Emergency Action Chain</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
            What to Do When Someone Collapses
          </h2>
          <p className="mt-3 text-base text-[#686168] leading-relaxed">
            In sudden cardiac arrest, blood circulation ceases immediately. Taking decisive action within the first four minutes dramatically improves the likelihood of recovery before professional medical teams take over.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {CPR_EMERGENCY_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                type="button"
                className={`text-left p-5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] ${
                  isSelected
                    ? 'bg-[#FAF7F7] border-[#74172F] shadow-sm'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100">
                    {stepIcons[idx]}
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-[#74172F] text-white' : 'text-[#686168] bg-neutral-100'
                  }`}>
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#29252A] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#686168] mt-1 line-clamp-2">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Focus Panel */}
        <div className="bg-[#FAF7F7] rounded-2xl p-6 sm:p-8 border border-neutral-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#74172F]">
                <span>Step {CPR_EMERGENCY_STEPS[activeStep].step} of 4</span>
                <span className="text-neutral-400">·</span>
                <span>{CPR_EMERGENCY_STEPS[activeStep].subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#29252A]">
                {CPR_EMERGENCY_STEPS[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {CPR_EMERGENCY_STEPS[activeStep].action}
              </p>

              {/* Critical Rule Banner */}
              <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/80 border border-rose-100 rounded-xl text-xs sm:text-sm text-[#4A0D20] font-medium">
                <AlertCircle className="w-5 h-5 text-[#74172F] shrink-0 mt-0.5" />
                <span>
                  <strong>Essential Rule:</strong> {CPR_EMERGENCY_STEPS[activeStep].keyRule}
                </span>
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                type="button"
                className="px-4 py-2 text-xs font-bold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous Step
              </button>
              <button
                disabled={activeStep === CPR_EMERGENCY_STEPS.length - 1}
                onClick={() => setActiveStep(Math.min(CPR_EMERGENCY_STEPS.length - 1, activeStep + 1))}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#74172F] hover:bg-[#5e1225] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
