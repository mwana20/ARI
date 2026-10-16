import React from 'react';
import { PageId } from '../types';
import {
  ARI_VISION,
  ARI_MISSION,
  ARI_COMMITMENTS,
  FOCUS_AREAS,
  ARI_REGISTRATION,
  WHATSAPP_URL,
} from '../data/organizationData';
import { EmergencyActionChain } from '../components/EmergencyActionChain';
import { CPRKnowledgeAssistant } from '../components/CPRKnowledgeAssistant';
import {
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  MapPin,
  HeartPulse,
  Activity,
  Users,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
  onOpenCertificate: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenPartner,
  onOpenCertificate,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[#FAF7F7]">
        <div className="lg:hidden">
          <div className="relative isolate min-h-[500px] bg-[#1e221d] sm:min-h-[520px]">
            <img
              src="https://pub-b2e691025f20417aaae7fc6f66f2ac7d.r2.dev/ARI/Home.png"
              alt="CPR instruction on an adult training mannequin with medical instructor guiding learners"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/80" />

            <div className="relative z-10 flex min-h-[500px] items-start px-4 pb-8 pt-[10px] sm:min-h-[520px] sm:px-8 sm:pb-10">
              <div className="w-full max-w-xl">
                <div className="hidden flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-xs">
                  <span>Republic of Uganda</span>
                  <span aria-hidden="true">·</span>
                  <span>Public Health & CPR Education</span>
                </div>

                <h1 className="text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl">
                  A Nation Prepared to <span className="text-rose-200">Save Lives.</span>
                </h1>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                  Acute Resuscitation Initiative (ARI) Ltd is working to expand CPR awareness, education, and life-saving skills across Uganda, empowering individuals and communities to respond confidently when emergencies occur.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => onNavigate('work')}
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#74172F] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#5e1225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={onOpenPartner}
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/70 bg-white/95 px-6 py-3.5 text-sm font-bold text-[#74172F] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
                  >
                    <HeartHandshake className="h-4 w-4" />
                    <span>Partner With ARI</span>
                  </button>
                </div>

                <p className="mt-5 text-xs font-medium text-white/80">
                  Incorporated in Uganda <span className="mx-1.5 text-white/50">·</span> Mbale District Headquarters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Quiet unboxed metadata kicker */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#74172F]">
                  <span>Republic of Uganda</span>
                  <span aria-hidden="true">·</span>
                  <span>Public Health & CPR Education</span>
                  <span aria-hidden="true">·</span>
                  <span>Reg. No. 80034997267053</span>
                </div>

                {/* Exact Hero Headline from brief */}
                <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold text-[#29252A] tracking-tight leading-[1.08]">
                  A Nation Prepared to{' '}
                  <span className="text-[#74172F] underline decoration-rose-200 decoration-wavy decoration-2">
                    Save Lives.
                  </span>
                </h1>

                {/* Supporting Text verbatim from brief */}
                <p className="text-sm sm:text-base lg:text-lg text-[#686168] leading-relaxed max-w-2xl">
                  Acute Resuscitation Initiative (ARI) Ltd is working to expand CPR
                  awareness, education, and life-saving skills across Uganda,
                  empowering individuals and communities to respond confidently
                  when emergencies occur.
                </p>

                {/* Hero Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onNavigate('work')}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#74172F] hover:bg-[#5e1225] active:bg-[#4A0D20] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenPartner}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#74172F] bg-white hover:bg-rose-50 border border-[#74172F]/30 rounded-xl transition-all duration-200 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#74172F]" />
                    <span>Partner With ARI</span>
                  </button>
                </div>

                {/* Verified Institutional Assurance */}
                <div className="pt-4 flex items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#74172F]" />
                    <span>Incorporated in Uganda</span>
                  </div>
                  <span className="text-neutral-300">|</span>
                  <span>Non-Profit Guarantee</span>
                  <span className="text-neutral-300">|</span>
                  <span>Mbale District Headquarters</span>
                </div>
              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative order-first lg:order-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white group">
                  <img
                    src="https://pub-b2e691025f20417aaae7fc6f66f2ac7d.r2.dev/ARI/Home.png"
                    alt="CPR instruction on an adult training mannequin with medical instructor guiding learners"
                    className="w-full h-72 sm:h-80 md:h-96 lg:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-rose-200 font-semibold mb-1">
                      Hands-On Resuscitation Training
                    </span>
                    <p className="text-sm font-semibold text-white/95">
                      Realistic manikin training builds the muscle memory and calm confidence needed to restart a heart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to ARI */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F]">
                <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
                <span>About the Initiative</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29252A] tracking-tight">
                Making Life-Saving Resuscitation Knowledge Accessible Across Uganda
              </h2>
              <div className="space-y-4 text-base text-[#686168] leading-relaxed">
                <p>
                  In Uganda, sudden cardiac arrest and acute respiratory
                  emergencies can occur without warning in homes, schools, busy
                  markets, workplaces, and rural trading centers. When someone
                  collapses, the minutes before clinical medical responders
                  arrive are decisive.
                </p>
                <p>
                  Without immediate intervention, the absence of blood flow to the
                  brain leads to irreversible damage within four to six minutes.
                  Yet in many communities, bystander hesitation, fear of causing
                  harm, and long-standing misconceptions—such as forcing spoons or
                  fingers into an unconscious person’s mouth—delay or prevent
                  effective help.
                </p>
                <p>
                  Acute Resuscitation Initiative (ARI) Ltd was founded to change
                  this reality. By promoting clear, practical Hands-Only CPR
                  awareness and partnering with schools, health centers, and
                  civic groups, ARI empowers ordinary citizens to act as the
                  first link in the chain of survival.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#74172F] hover:text-[#4A0D20] group"
                >
                  <span>Learn more about our organizational background</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F7] p-8 rounded-2xl border border-neutral-200 space-y-6">
              <h3 className="text-lg font-bold text-[#29252A]">
                The Three Pillars of Community Resuscitation
              </h3>
              <ul className="space-y-4 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Immediate Recognition:</strong>
                    <span>Understanding when an unresponsive individual is not breathing normally (including recognizing agonal gasps).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold">High-Quality Compressions:</strong>
                    <span>Pushing hard and fast in the center of the chest to maintain vital cerebral blood flow.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-neutral-200 text-[#74172F] shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold">Bystander Mobilization:</strong>
                    <span>Directing specific helpers to organize clinical transport and alert local health units.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why CPR Education Matters & 4-Step Action Chain */}
      <EmergencyActionChain />

      {/* 4. Our Areas of Focus (Unnumbered cards as required) */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
              <span>Our Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
              Our Areas of Focus
            </h2>
            <p className="mt-3 text-base text-[#686168] leading-relaxed">
              ARI concentrates its efforts on practical, community-centered
              interventions that make resuscitation knowledge sustainable,
              culturally grounded, and widely understood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area, index) => (
              <div
                key={area.id}
                className={`${index > 0 ? 'hidden md:flex' : 'flex'} bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex-col`}
              >
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs ${
                      area.status === 'Active Initiative'
                        ? 'bg-[#74172F] text-white'
                        : 'bg-neutral-800 text-white'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#29252A]">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686168] leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Key Interventions
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {area.keyInterventions.slice(0, 2).map((ki, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#74172F] font-bold">›</span>
                          <span>{ki}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center md:mt-10">
            <button
              onClick={() => onNavigate('work')}
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-[#74172F] bg-white hover:bg-rose-50 border border-[#74172F]/30 rounded-xl transition-colors shadow-2xs md:w-auto"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Vision and Mission (Distinctive, unnumbered presentation) */}
      <section className="py-20 bg-gradient-to-br from-[#4A0D20] via-[#74172F] to-[#4A0D20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision Block */}
            <div className="bg-white/10 backdrop-blur-xs p-8 sm:p-10 rounded-2xl border border-white/15 space-y-4">
              <div className="inline-block px-3 py-1 bg-white/20 text-rose-200 text-xs font-bold uppercase tracking-wider rounded-md">
                Our Vision
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                A Uganda where every individual is equipped with life-saving skills.
              </h3>
              <blockquote className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-serif italic border-l-2 border-rose-300 pl-4 py-1">
                "{ARI_VISION}"
              </blockquote>
            </div>

            {/* Mission Block */}
            <div className="bg-white/10 backdrop-blur-xs p-8 sm:p-10 rounded-2xl border border-white/15 space-y-4">
              <div className="inline-block px-3 py-1 bg-white/20 text-rose-200 text-xs font-bold uppercase tracking-wider rounded-md">
                Our Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Overcoming barriers through education and sustainable partnerships.
              </h3>
              <blockquote className="text-sm sm:text-base text-rose-100/90 leading-relaxed font-serif italic border-l-2 border-rose-300 pl-4 py-1">
                "{ARI_MISSION}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Commitment to Uganda */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
              <span>Our Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
              Our Commitment to Uganda
            </h2>
            <p className="mt-3 text-base text-[#686168] leading-relaxed">
              We anchor our initiatives in authentic public health ethics,
              practical training standards, and transparent community stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARI_COMMITMENTS.map((comm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F7] border border-neutral-200 space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#74172F]/10 text-[#74172F] flex items-center justify-center font-bold">
                  <CheckCircle className="w-5 h-5 text-[#74172F]" />
                </div>
                <h3 className="text-base font-bold text-[#29252A]">
                  {comm.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#686168] leading-relaxed">
                  {comm.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Interactive CPR Knowledge Hub & AI Assistant Preview */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F]">
                <span className="w-2 h-2 rounded-full bg-[#74172F]"></span>
                <span>CPR Knowledge Hub</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29252A] tracking-tight">
                Ask Questions, Learn Techniques & Master the Rhythm
              </h2>
              <p className="text-sm sm:text-base text-[#686168] leading-relaxed">
                Explore our interactive CPR reference assistant designed to
                clarify common questions about adult resuscitation, chest
                compression depth, AED operation, and bystander responsibilities.
              </p>
              <div className="p-4 bg-white rounded-xl border border-neutral-200 space-y-3 text-xs text-neutral-700">
                <p className="font-semibold text-[#74172F]">
                  Features of the Knowledge Hub:
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74172F]"></span>
                    <span>110 BPM CPR practice metronome with audio guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74172F]"></span>
                    <span>Resuscitation science aligned with ILCOR consensus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74172F]"></span>
                    <span>Clear medical disclaimers distinguishing education from emergency clinical care</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="lg:col-span-7">
              <CPRKnowledgeAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Official Registration and Legal Status Section */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F]">
                  <ShieldCheck className="w-4 h-4 text-[#74172F]" />
                  <span>Verified Legal Entity & Incorporation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
                  Official Registration & Corporate Details
                </h2>
                <p className="text-sm text-[#686168] leading-relaxed max-w-2xl">
                  Acute Resuscitation Initiative (ARI) Ltd is formally
                  incorporated under the Companies Act, 2012 of the Republic of
                  Uganda. Registered as a non-profit company limited by guarantee
                  without share capital, ARI maintains full compliance with the
                  Uganda Registration Services Bureau (URSB).
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-700">
                  <div className="bg-[#FAF7F7] p-3 rounded-xl border border-neutral-200">
                    <span className="block font-semibold text-neutral-900">Registration Number</span>
                    <span className="font-mono">{ARI_REGISTRATION.registrationNumber}</span>
                  </div>
                  <div className="bg-[#FAF7F7] p-3 rounded-xl border border-neutral-200">
                    <span className="block font-semibold text-neutral-900">Date of Incorporation</span>
                    <span>{ARI_REGISTRATION.incorporationDate}</span>
                  </div>
                  <div className="bg-[#FAF7F7] p-3 rounded-xl border border-neutral-200 sm:col-span-2">
                    <span className="block font-semibold text-neutral-900">Registered Office in Uganda</span>
                    <span>{ARI_REGISTRATION.registeredOffice} (P. O. Box 1873, Mbale)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#FAF7F7] rounded-2xl border border-dashed border-[#74172F]/30 text-center space-y-4">
                <button
                  onClick={onOpenCertificate}
                  type="button"
                  aria-label="Open certificate image"
                  className="group w-full overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
                >
                  <img
                    src="/assets/license.jpg"
                    alt="ARI Ltd Certificate of Incorporation"
                    className="h-40 w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </button>
                <div>
                  <h3 className="text-base font-bold text-[#29252A]">
                    Certificate of Incorporation
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Click the certificate to enlarge
                  </p>
                </div>
                <button
                  onClick={onOpenCertificate}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#74172F] hover:bg-[#5e1225] rounded-xl transition-colors shadow-2xs"
                >
                  <Building2 className="w-4 h-4 text-rose-200" />
                  <span>View Official Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Partnership Invitation (Maroon-accented section from prompt) */}
      <section className="py-20 bg-[#74172F] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full text-xs font-semibold text-rose-200">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Institutional Collaboration</span>
          </div>

          {/* Exact Headline from Prompt */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Together, We Can Build a Nation That Knows How to Save Lives.
          </h2>

          {/* Exact Supporting Text from Prompt */}
          <p className="text-base sm:text-lg text-rose-100/90 max-w-3xl mx-auto leading-relaxed">
            Join Acute Resuscitation Initiative in advancing CPR awareness,
            strengthening community preparedness, and expanding access to
            life-saving education throughout Uganda.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenPartner}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#74172F] bg-white hover:bg-rose-50 rounded-xl shadow-md transition-colors"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Partner With ARI</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#4A0D20] hover:bg-[#380A18] border border-white/20 rounded-xl transition-colors"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-xs"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
