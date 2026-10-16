import React, { useState } from 'react';
import { PageId, NewsItem } from '../types';
import { VERIFIED_NEWS, ARI_REGISTRATION, WHATSAPP_URL } from '../data/organizationData';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Mail, Send, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface NewsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPartner: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onNavigate, onOpenPartner }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = ['All', 'Announcement', 'Community Outreach', 'Partnership'];

  const filteredNews = VERIFIED_NEWS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#4A0D20] to-[#74172F] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
              <span>Official Communications</span>
              <span aria-hidden="true">·</span>
              <span>Public Health Notices</span>
              <span aria-hidden="true">·</span>
              <span>ARI Ltd</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              News, Official Notices & Community Outreach
            </h1>
            <p className="text-base sm:text-lg text-rose-100/90 leading-relaxed">
              Official institutional announcements, public-health campaign
              briefings, and verified organizational updates from Acute
              Resuscitation Initiative (ARI) Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#74172F]" />
            <span className="text-xs font-semibold text-neutral-700">
              Only verified organizational releases are published on this portal.
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#74172F] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat === 'All' ? 'All Communications' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-16 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="p-12 bg-white rounded-3xl border border-neutral-200 text-center space-y-3 max-w-lg mx-auto">
              <Calendar className="w-8 h-8 text-neutral-400 mx-auto" />
              <h3 className="text-base font-bold text-neutral-800">No current notices in this category</h3>
              <p className="text-xs text-neutral-500">
                Official announcements are posted as programmatic milestones and verified partnerships are confirmed.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-semibold px-2.5 py-1 bg-[#74172F] text-white rounded-md shadow-xs">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-[#686168]">
                        <span>{item.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.readTime}</span>
                        {item.location && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{item.location}</span>
                          </>
                        )}
                      </div>

                      <h2 className="text-lg font-bold text-[#29252A] leading-snug">
                        {item.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#686168] line-clamp-3 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-100">
                    <button
                      onClick={() => setActiveArticle(item)}
                      type="button"
                      className="w-full mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-[#74172F] bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
                    >
                      <span>Read Full Notice</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Selected Notice Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-neutral-200">
            <div className="flex items-center justify-between px-6 py-4 bg-[#74172F] text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                Official Release
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                type="button"
                className="p-1 text-white/80 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>{activeArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#74172F]">{activeArticle.category}</span>
                {activeArticle.location && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.location}</span>
                  </>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#29252A]">
                {activeArticle.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line pt-2">
                {activeArticle.content}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
                <span>Issuer: Acute Resuscitation Initiative (ARI) Ltd</span>
                <a
                  href={`mailto:${ARI_REGISTRATION.contactEmail}?subject=${encodeURIComponent('Inquiry regarding: ' + activeArticle.title)}`}
                  className="font-semibold text-[#74172F] hover:underline"
                >
                  Contact Secretariat for Press Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Event Hosting Request Callout */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A]">
            Request a Verified CPR Educational Session
          </h2>
          <p className="text-sm text-[#686168] max-w-2xl mx-auto leading-relaxed">
            Are you planning a community health assembly, a teachers’ workshop,
            or an organizational safety briefing in Uganda? ARI reviews
            educational invitations from accredited schools, faith institutions,
            and community organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenPartner}
              type="button"
              className="px-6 py-3 text-xs font-bold text-white bg-[#74172F] hover:bg-[#5e1225] rounded-xl transition-colors shadow-2xs"
            >
              Submit Educational Session Request
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
            >
              Direct Inquiries via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
