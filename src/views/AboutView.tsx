import React from 'react';
import { PageId } from '../types';
import {
  ARI_VISION,
  ARI_MISSION,
  ARI_COMMITMENTS,
  ARI_REGISTRATION,
  FOCUS_AREAS,
} from '../data/organizationData';
import { ShieldCheck, HeartHandshake, ArrowRight, Building2, Calendar, MapPin, Award, CheckCircle2, Users } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
  onOpenCertificate: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenPartner,
  onOpenCertificate,
}) => {
  return (
    <div className="space-y-0">
      {/* Page Header Banner */}
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-[#1e221d] text-white lg:bg-gradient-to-b lg:from-[#4A0D20] lg:to-[#74172F] lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-0 lg:px-8">
          <div className="relative grid min-h-[390px] grid-cols-1 items-start sm:min-h-[430px] lg:min-h-0 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="relative z-10 w-full space-y-4 px-4 pb-8 pt-[10px] sm:px-8 sm:pb-10 lg:col-span-7 lg:px-0 lg:py-0">
              <div className="hidden flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-xs lg:flex lg:text-rose-200">
                <span>About Us</span>
                <span aria-hidden="true">·</span>
                <span>Institutional Profile</span>
                <span aria-hidden="true">·</span>
                <span>Republic of Uganda</span>
              </div>
              <h1 className="text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[clamp(2.2rem,4vw,4rem)] lg:leading-tight">
                About Acute Resuscitation Initiative (ARI) Ltd
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-rose-100/90">
                Founded in Mbale, Uganda, ARI is dedicated to creating a resilient,
                CPR-ready nation by advancing emergency resuscitation awareness,
                community education, and sustainable healthcare partnerships.
              </p>
            </div>
            <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:col-span-5">
              <div className="absolute inset-0 overflow-hidden lg:relative lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare professionals reviewing emergency response plans in a community setting"
                  className="h-full w-full object-cover lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80 lg:bg-gradient-to-t lg:from-[#4A0D20]/80 lg:via-[#4A0D20]/10 lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Background & Founding Purpose */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F]">
                <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
                <span>Background & Purpose</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29252A] tracking-tight">
                Addressing the Critical Resuscitation Gap in Uganda
              </h2>
              <div className="space-y-4 text-base text-[#686168] leading-relaxed">
                <p>
                  Across urban transit hubs, educational campuses, and rural
                  communities in Uganda, sudden cardiac arrest and acute respiratory
                  failure remain among the most devastating yet preventable causes of
                  premature mortality.
                </p>
                <p>
                  While clinical resuscitation algorithms are well-established
                  within tertiary intensive care units, the overwhelming majority of
                  cardiac events occur outside of hospitals. By the time emergency
                  medical services or private transport can navigate road infrastructure
                  to reach a hospital, the window for neurological survival has
                  frequently elapsed.
                </p>
                <p>
                  Acute Resuscitation Initiative (ARI) Ltd was established as a
                  registered non-profit company limited by guarantee to bridge this
                  gap. Our premise is simple yet transformative: by educating everyday
                  citizens—bystanders, teachers, transport workers, and primary health
                  staff—in Hands-Only CPR, we can multiply the chances that a collapsed
                  individual receives life-sustaining chest compressions before
                  professional medical personnel arrive.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F7] p-8 rounded-2xl border border-neutral-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#74172F] text-white rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#29252A]">
                    Official Registration Facts
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Republic of Uganda • URSB
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-neutral-700">
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <span className="block font-semibold text-neutral-900">Legal Entity</span>
                  <span>{ARI_REGISTRATION.entityType}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <span className="block font-semibold text-neutral-900">Registration Number</span>
                  <span className="font-mono text-[#74172F] font-bold">{ARI_REGISTRATION.registrationNumber}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <span className="block font-semibold text-neutral-900">Date of Incorporation</span>
                  <span>{ARI_REGISTRATION.incorporationDate}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200">
                  <span className="block font-semibold text-neutral-900">Registered Office</span>
                  <span>{ARI_REGISTRATION.registeredOffice}</span>
                </div>
              </div>

              <button
                onClick={onOpenCertificate}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#74172F] hover:bg-[#5e1225] rounded-xl transition-colors shadow-2xs"
              >
                <span>View Full Certificate of Incorporation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
                Our Vision
              </span>
              <h3 className="text-xl font-bold text-[#29252A]">
                A Nation Equipped with Life-Saving Knowledge
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-serif italic border-l-2 border-[#74172F] pl-4">
                "{ARI_VISION}"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
                Our Mission
              </span>
              <h3 className="text-xl font-bold text-[#29252A]">
                Accessible Education & Community Empowerment
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-serif italic border-l-2 border-[#74172F] pl-4">
                "{ARI_MISSION}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
              <span>Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
              Our Community Engagement Approach
            </h2>
            <p className="mt-3 text-base text-[#686168] leading-relaxed">
              We design educational programs around the social, linguistic, and
              geographical realities of Ugandan communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F7] border border-neutral-200 space-y-3">
              <h3 className="text-base font-bold text-[#29252A]">
                1. Culturally Grounded Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#686168] leading-relaxed">
                Resuscitation instructions are delivered in local vernaculars
                (Luganda, Lumasaba, English, and Swahili) with clear visual
                analogies, directly addressing harmful local customs such as
                inserting metallic objects into an unconscious person’s mouth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F7] border border-neutral-200 space-y-3">
              <h3 className="text-base font-bold text-[#29252A]">
                2. Hands-On Manikin Practice
              </h3>
              <p className="text-xs sm:text-sm text-[#686168] leading-relaxed">
                Lectures alone do not build the muscle memory required to
                compress an adult chest 5 to 6 cm. We prioritize physical
                compression practice on realistic adult manikins with cadence
                auditing (100–120 bpm).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F7] border border-neutral-200 space-y-3">
              <h3 className="text-base font-bold text-[#29252A]">
                3. Institutional Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#686168] leading-relaxed">
                Rather than one-off events, we train school prefects, church
                ushers, and workplace safety stewards so institutions maintain
                their own recurrent emergency response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Institutional Leadership Framework */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#74172F]" />
              <span>Governance & Oversight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
              Organizational Stewardship & Transparency
            </h2>
            <p className="mt-3 text-base text-[#686168] leading-relaxed">
              Acute Resuscitation Initiative operates under the statutory
              framework of the Companies Act, 2012. Our leadership structure is
              committed to ethical public health guidance, community accountability,
              and non-profit integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#74172F] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#29252A]">
                Board of Directors
              </h3>
              <p className="text-xs text-[#686168] leading-relaxed">
                Governing body responsible for strategic direction, statutory
                compliance with URSB, financial transparency, and programmatic
                safeguards across Uganda.
              </p>
              <p className="text-[11px] text-neutral-400 italic pt-1">
                Official officer register maintained at the registered office in Mbale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#74172F] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#29252A]">
                Clinical Resuscitation Advisory
              </h3>
              <p className="text-xs text-[#686168] leading-relaxed">
                Consultative panel ensuring all instructional materials align
                with evidence-based guidelines from global resuscitation bodies
                (ILCOR, AHA, ERC).
              </p>
              <p className="text-[11px] text-neutral-400 italic pt-1">
                Advisory panel supporting quality assurance across all training curricula.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#74172F] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#29252A]">
                Community Mobilization Team
              </h3>
              <p className="text-xs text-[#686168] leading-relaxed">
                Field educators and logistics coordinators facilitating community
                barazas, school workshops, and partnerships with local government
                authorities.
              </p>
              <p className="text-[11px] text-neutral-400 italic pt-1">
                Operating across Nabuyonga Ward, Northern Division, and neighboring districts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA: Partner or Contact */}
      <section className="py-16 bg-[#74172F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Interested in Partnering with ARI?
          </h2>
          <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed max-w-2xl mx-auto">
            We collaborate with schools, health centers, faith institutions, and
            community leaders to expand life-saving education throughout Uganda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenPartner}
              type="button"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-[#74172F] bg-white hover:bg-rose-50 rounded-xl transition-colors shadow-sm"
            >
              Submit Partnership Proposal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              type="button"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-[#4A0D20] hover:bg-[#380A18] rounded-xl transition-colors border border-white/20"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
