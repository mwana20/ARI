import React, { useState } from 'react';
import { PageId, CPRResource } from '../types';
import { CPR_RESOURCES, CPR_FAQS } from '../data/cprResourcesData';
import { CPRKnowledgeAssistant } from '../components/CPRKnowledgeAssistant';
import { EmergencyActionChain } from '../components/EmergencyActionChain';
import {
  Search,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  FileText,
  ChevronDown,
  Printer,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate, onOpenPartner }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeArticle, setActiveArticle] = useState<CPRResource | null>(CPR_RESOURCES[0]);

  const categories = ['All', 'Fundamentals', 'Emergency Steps', 'Bystander Guidance', 'Community FAQs'];

  const filteredResources = CPR_RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#4A0D20] to-[#74172F] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
              <span>Knowledge Base</span>
              <span aria-hidden="true">·</span>
              <span>Resuscitation Science</span>
              <span aria-hidden="true">·</span>
              <span>Public Health Education</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              CPR Educational Resources & Knowledge Hub
            </h1>
            <p className="text-base sm:text-lg text-rose-100/90 leading-relaxed">
              Clear, evidence-based educational materials on adult cardiopulmonary
              resuscitation, sudden cardiac arrest recognition, and community emergency
              response.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Medical Disclaimer Banner */}
      <section className="bg-rose-50 border-b border-rose-200 px-4 py-4 text-xs text-[#4A0D20]">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#74172F] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold block text-sm text-[#74172F]">
              Important Medical & Legal Disclaimer:
            </strong>
            <p className="text-neutral-700 leading-relaxed">
              The contents of this website are published solely for general
              public education and awareness. This information does NOT constitute
              professional medical diagnosis, clinical dispatch instructions, or
              formal CPR provider certification. In a real emergency, immediately
              shout for help, alert local medical facilities or transport, and
              begin continuous chest compressions. Formal CPR certification
              requires practical, accredited hands-on training with an authorized
              resuscitation organization.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources (e.g., 'Hands-only', 'AED', 'Myths')..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FAF7F7] border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#74172F] text-white shadow-2xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Library & Article Viewer */}
      <section className="py-16 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Resource Article List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#686168]">
                  Available Educational Guides ({filteredResources.length})
                </span>
              </div>

              {filteredResources.length === 0 ? (
                <div className="p-8 bg-white rounded-2xl border border-neutral-200 text-center text-xs text-neutral-500">
                  No resources matched your search query. Try searching for "compressions", "AED", or "myths".
                </div>
              ) : (
                filteredResources.map((res) => {
                  const isSelected = activeArticle?.id === res.id;
                  return (
                    <button
                      key={res.id}
                      onClick={() => setActiveArticle(res)}
                      type="button"
                      className={`w-full text-left p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-white border-[#74172F] shadow-sm ring-1 ring-[#74172F]/20'
                          : 'bg-white/80 border-neutral-200 hover:bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[11px] text-[#686168] mb-1.5">
                        <span className="font-semibold text-[#74172F]">{res.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{res.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{res.publishedDate}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#29252A] leading-snug">
                        {res.title}
                      </h3>
                      <p className="text-xs text-[#686168] mt-1.5 line-clamp-2 leading-relaxed">
                        {res.summary}
                      </p>
                    </button>
                  );
                })
              )}
            </div>

            {/* Right Column: Full Article Reader */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
              {activeArticle ? (
                <>
                  <div className="space-y-3 pb-6 border-b border-neutral-100">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-[#686168]">
                        <span className="font-semibold text-[#74172F]">{activeArticle.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Reviewed: {activeArticle.publishedDate}</span>
                        <span aria-hidden="true">·</span>
                        <span>{activeArticle.readTime}</span>
                      </div>

                      <button
                        onClick={() => window.print()}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Print / Save Guide</span>
                      </button>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29252A] leading-tight">
                      {activeArticle.title}
                    </h2>

                    <p className="text-xs text-neutral-500 font-medium">
                      Authoritative Basis: {activeArticle.authoritativeSource}
                    </p>

                    {activeArticle.warningNote && (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
                        {activeArticle.warningNote}
                      </div>
                    )}
                  </div>

                  {/* Article Body Paragraphs */}
                  <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {activeArticle.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Key Takeaways Box */}
                  <div className="p-5 bg-[#FAF7F7] rounded-2xl border border-neutral-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
                      Key Takeaways for Bystanders
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                      {activeArticle.keyTakeaways.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center text-xs text-neutral-500">
                  Select an article from the list to view its complete guide.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Action Chain refresher */}
      <EmergencyActionChain />

      {/* Interactive AI CPR Assistant Tool */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
              AI Resuscitation Q&A
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A]">
              Ask the CPR Educational Assistant
            </h2>
            <p className="text-xs sm:text-sm text-[#686168]">
              Have a question about compression cadence, chest recoil, or bystander safety? Ask our guided assistant below.
            </p>
          </div>

          <CPRKnowledgeAssistant />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-[#FAF7F7] border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#74172F]">
              <HelpCircle className="w-4 h-4 text-[#74172F]" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A]">
              Frequently Asked Questions About CPR
            </h2>
          </div>

          <div className="space-y-3">
            {CPR_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#29252A] hover:text-[#74172F] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#74172F]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
