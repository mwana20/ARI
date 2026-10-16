import React, { useState } from 'react';
import { PageId } from '../types';
import { FOCUS_AREAS, WHATSAPP_URL } from '../data/organizationData';
import { EventIdeasHub } from '../components/EventIdeasHub';
import { CheckCircle2, ArrowRight, HeartHandshake, MapPin, Target, Sparkles, Filter } from 'lucide-react';

interface WorkViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate, onOpenPartner }) => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active Initiative' | 'Proposed Program'>('All');

  const filteredAreas = FOCUS_AREAS.filter((area) => {
    if (statusFilter === 'All') return true;
    return area.status === statusFilter;
  });

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-[#1e221d] text-white lg:bg-gradient-to-b lg:from-[#4A0D20] lg:to-[#74172F] lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-0 lg:px-8">
          <div className="relative grid min-h-[390px] grid-cols-1 items-start sm:min-h-[430px] lg:min-h-0 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="relative z-10 w-full space-y-4 px-4 pb-8 pt-[10px] sm:px-8 sm:pb-10 lg:col-span-7 lg:px-0 lg:py-0">
              <div className="hidden flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-xs lg:flex lg:text-rose-200">
                <span>Our Programs</span>
                <span aria-hidden="true">·</span>
                <span>Areas of Focus</span>
                <span aria-hidden="true">·</span>
                <span>Uganda Emergency Preparedness</span>
              </div>
              <h1 className="text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[clamp(2.2rem,4vw,4rem)] lg:leading-tight">
                Our Work & Strategic Initiatives
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-rose-100/90">
                Advancing practical, community-centered CPR education across
                neighborhoods, educational institutions, transit hubs, and
                healthcare clinics throughout Uganda.
              </p>
            </div>
            <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:col-span-5">
              <div className="absolute inset-0 overflow-hidden lg:relative lg:rounded-3xl lg:border lg:border-white/10 lg:shadow-2xl">
                <img
                  src="https://pub-b2e691025f20417aaae7fc6f66f2ac7d.r2.dev/ARI/school.png"
                  alt="A resuscitation training instructor demonstrating CPR with a medical mannequin"
                  className="h-full w-full object-cover lg:h-[22rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80 lg:bg-gradient-to-t lg:from-[#4A0D20]/80 lg:via-[#4A0D20]/10 lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Scope & Filter Controls */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#29252A]">
                Programs & Areas of Focus
              </h2>
              <p className="text-xs text-[#686168]">
                Clear operational distinction between active initiatives and proposed programs for institutional partnership.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
              {(['All', 'Active Initiative', 'Proposed Program'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    statusFilter === tab
                      ? 'bg-white text-[#74172F] shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {tab === 'All' ? 'All Focus Areas' : tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Program Cards */}
      <section className="py-16 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredAreas.map((area, idx) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Media column */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-neutral-100">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-md shadow-xs ${
                    area.status === 'Active Initiative'
                      ? 'bg-[#74172F] text-white'
                      : 'bg-neutral-800 text-white'
                  }`}>
                    {area.status}
                  </span>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#74172F]">
                      {area.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-[#29252A] mt-1">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#686168] leading-relaxed">
                    {area.description}
                  </p>

                  {/* Impact & Audience Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#FAF7F7] rounded-xl border border-neutral-200 text-xs text-neutral-700">
                    <div>
                      <strong className="block font-semibold text-neutral-900 mb-0.5">
                        Target Audience
                      </strong>
                      <span>{area.targetAudience}</span>
                    </div>
                    <div>
                      <strong className="block font-semibold text-neutral-900 mb-0.5">
                        Strategic Objective
                      </strong>
                      <span>{area.impactObjective}</span>
                    </div>
                  </div>

                  {/* Key Interventions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#686168] mb-2.5">
                      Key Interventions & Activities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                      {area.keyInterventions.map((ki, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ki}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={onOpenPartner}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#74172F] hover:text-[#4A0D20] group"
                  >
                    <span>Propose a collaboration for this focus area</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Event & Campaign Idea Planner */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#74172F] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#74172F]" />
              <span>Interactive Campaign Planner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] tracking-tight">
              Event Ideas Hub: Plan a CPR Awareness Day
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#686168] leading-relaxed">
              Are you a teacher, church leader, market chairperson, sports
              organizer, or employer in Uganda? Use this planner to generate
              tailored, practical CPR event concepts, talking points in local
              languages, and logistic checklists.
            </p>
          </div>

          <EventIdeasHub />
        </div>
      </section>

      {/* Partnership CTA Banner */}
      <section className="py-16 bg-[#74172F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to Bring Resuscitation Training to Your Community?
          </h2>
          <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed max-w-2xl mx-auto">
            Whether you represent a secondary school, a transport stage, a faith
            congregation, or a district healthcare facility, ARI welcomes
            structured partnerships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenPartner}
              type="button"
              className="px-6 py-3 text-sm font-bold text-[#74172F] bg-white hover:bg-rose-50 rounded-xl transition-colors shadow-sm"
            >
              Submit Partnership Inquiry
            </button>
            <button
              onClick={() => onNavigate('contact')}
              type="button"
              className="px-6 py-3 text-sm font-bold text-white bg-[#4A0D20] hover:bg-[#380A18] rounded-xl transition-colors border border-white/20"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
