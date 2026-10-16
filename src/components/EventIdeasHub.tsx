import React, { useState } from 'react';
import { Lightbulb, Sparkles, CheckCircle2, Copy, Check, Users, Building, School, Church, Truck, ShoppingBag, Briefcase } from 'lucide-react';

interface EventPlan {
  title: string;
  targetSetting: string;
  theme: string;
  audienceEngagementFormat: string;
  keyActivities: string[];
  vernacularTalkingPoints: string[];
  logisticsChecklist: string[];
  evaluationMetric: string;
}

const SETTING_OPTIONS = [
  { id: 'schools', label: 'Secondary Schools & Colleges', icon: School },
  { id: 'places-of-worship', label: 'Churches & Mosques', icon: Church },
  { id: 'transport-hubs', label: 'Taxi Parks & Boda Stages', icon: Truck },
  { id: 'markets', label: 'Markets & Trading Centers', icon: ShoppingBag },
  { id: 'workplace', label: 'Workplaces & Enterprises', icon: Briefcase },
  { id: 'community-sports', label: 'Sports Galas & Football Matches', icon: Users },
];

const CURATED_EVENT_PLANS: Record<string, EventPlan> = {
  'schools': {
    title: 'School Resuscitation Heroes: Hands-On CPR Youth Drive',
    targetSetting: 'Secondary Schools & Vocational Colleges',
    theme: '"Every Youth a First Responder"',
    audienceEngagementFormat: 'Interactive school health assembly followed by small-group practical manikin practice led by senior prefects and science teachers.',
    keyActivities: [
      '15-Minute Assembly Demonstration: Live adult compression demonstration on an authentic training manikin.',
      'Classroom Compression Relay: Groups practice pushing at 110 bpm to music rhythm for 2-minute intervals to experience rescuer fatigue.',
      'Emergency Action Drill: Role-playing how a student alerts the school matron or headteacher while compressions continue.',
      'Appointment of Student CPR Champions: Recognizing student leaders to maintain health club emergency posters.',
    ],
    vernacularTalkingPoints: [
      '"Tosoberwa omuntu bw\'agwa eri:" (Do not hesitate when a person collapses: recognize and act).',
      '"Kuba ekifuba waggulu n\'obwangu:" (Push hard and fast on the center of the chest).',
      '"Tokkiriza muntu kuteeka kijiko mu kamwa:" (Never put spoons or fingers into an unconscious person\'s mouth).',
    ],
    logisticsChecklist: [
      'Adult CPR training manikins with sanitizing wipes',
      'Audio speaker for 110 bpm rhythm track',
      'School administration permission and timetable clearance',
      'Printable emergency action summary cards for students to take home',
    ],
    evaluationMetric: 'Number of students completing 2 continuous minutes of correct-rate chest compressions.',
  },
  'places-of-worship': {
    title: 'Sanctuary Life-Savers: Faith Community Emergency Preparedness',
    targetSetting: 'Churches, Mosques & Religious Congregations',
    theme: '"Caring for Our Neighbors Through Timely Action"',
    audienceEngagementFormat: 'Post-service or fellowship educational session in the community hall with volunteer ushers and elders.',
    keyActivities: [
      'Usher Emergency Team Orientation: Training designated church/mosque ushers to spot sudden collapse during large gatherings.',
      'Crowd Management Protocol: Establishing quiet clearance of aisles so the rescuer has space and air circulation.',
      'Manikin Hands-Only Demonstration: Giving mothers\' union and youth fellowship members the chance to practice chest compressions.',
      'Parish Transport Chain: Creating a verified emergency contact list for congregation members with accessible vehicles.',
    ],
    vernacularTalkingPoints: [
      '"Okutaasa obulamu bwa muganda wo gwe mulimu gwa ffenna" (Preserving a brother\'s life is our shared duty).',
      '"Tulekera awo okutya:" (Let us replace panic with knowledge).',
      '"Omuntu bw\'azirika nga takyassa, tunda mangu amanyi mu kifuba:" (When someone collapses and ceases breathing, push firmly on the chest immediately).',
    ],
    logisticsChecklist: [
      'Coordination with church elders / mosque leadership committee',
      'Designated mat or carpet space for clean knee protection during manikin practice',
      'Emergency telephone contact card placed at the main church office/reception',
    ],
    evaluationMetric: 'Active participation of at least 8 designated ushers and community stewards in practical drills.',
  },
  'transport-hubs': {
    title: 'Boda & Taxi Resuscitation Vigilance: Transit First-Response',
    targetSetting: 'Taxi Parks, Bus Terminals & Boda-Boda Stages',
    theme: '"The First on Scene Know What to Do"',
    audienceEngagementFormat: 'Short, high-energy 20-minute open-air demonstration during driver staging breaks, respecting work schedules.',
    keyActivities: [
      '5-Minute Rapid Action Brief: Stage leaders demonstrate the 4 steps of recognizing collapse and pushing hard in the chest.',
      'Crowd Clearance Drill: Training drivers on how to establish a perimeter around a patient in crowded taxi parks.',
      'Rapid Transport Integration: Best practices for transporting cardiac arrest victims without stopping compressions during loading.',
      'Stage First-Response Captains: Nominating stage welfare officers as focal points for emergency coordination.',
    ],
    vernacularTalkingPoints: [
      '"Abavuzi be basooka okutuuka:" (Drivers are always first on the scene—your hands can save a life).',
      '"Totya kumenya mbiriizi—okukuba ekifuba ky\'ekitaasa obulamu:" (Do not fear rib cracking—compressions are what keep the person alive).',
      '"Owalala amangu ambulensi:" (Call for medical transfer immediately while one driver continues compressions).',
    ],
    logisticsChecklist: [
      'Megaphone or portable battery PA system for outdoor market/park acoustics',
      'Rugged, durable training manikin for ground demonstration',
      'Laminated poster for stage noticeboard with 4 emergency steps',
    ],
    evaluationMetric: 'Driver stage committee agreement to display emergency CPR instructions at the stage shed.',
  },
  'markets': {
    title: 'Marketplace Life-Force: Trading Center Bystander Campaign',
    targetSetting: 'Fresh Produce Markets & Urban Trading Centers',
    theme: '"Healthy Markets, Safe Communities"',
    audienceEngagementFormat: 'Interactive stall-to-stall roving health education and a central gazebo demonstration during midday trading lull.',
    keyActivities: [
      'Central Gazebo Demonstration: Ongoing 10-minute drop-in hands-on compression demonstrations on manikins.',
      'Market Women\'s Leadership Engagement: Working with market chairpersons to debunk tongue-swallowing myths.',
      'Visual Emergency Posters: Hanging illustrated guides in local languages near water collection and management offices.',
    ],
    vernacularTalkingPoints: [
      '"Akamwa k\'omuntu tebakateekamu kijiko:" (Never force spoons into the mouth).',
      '"Okunyiga mu kifuba kuleeta omusaayi mu bwongo:" (Pushing on the chest pumps life-giving blood to the brain).',
    ],
    logisticsChecklist: [
      'Market management board clearance and scheduling',
      'Colorful visual banners and flyers in local vernacular',
      'Disinfectant wipes for manikin hygiene between participants',
    ],
    evaluationMetric: 'Direct engagement and hands-on practice by market vendors and shoppers.',
  },
  'workplace': {
    title: 'Workplace Resuscitation Readiness: Corporate & Enterprise BLS',
    targetSetting: 'Corporate Offices, Banks, Telecom Branches & NGOs',
    theme: '"Resilient Workplaces Protect Their Teams"',
    audienceEngagementFormat: 'Structured 90-minute lunch-and-learn workshop combining awareness presentation, AED orientation, and team simulation.',
    keyActivities: [
      'Emergency Chain of Survival in Modern Offices: Identifying location of first-aid kits and nearest referral hospitals.',
      'Hands-Only CPR Practical Drills: Every employee completes 2 minutes of compression practice.',
      'AED Awareness: Overview of how automated defibrillators operate and what to look for when procuring equipment.',
      'Floor Warden Emergency Protocols: Assigning specific roles in office emergency plans.',
    ],
    vernacularTalkingPoints: [
      'Early CPR before emergency response arrival preserves neurological function.',
      'Creating a company culture of safety and preparedness.',
    ],
    logisticsChecklist: [
      'Projector and presentation screen for introductory slide overview',
      'Multiple manikins to facilitate parallel team drills',
      'Certificates of attendance for participating staff members',
    ],
    evaluationMetric: '100% of participating staff correctly demonstrating hand placement and compression depth.',
  },
  'community-sports': {
    title: 'Pitch-Side Cardiac Safety: Community Football & Sports Gala',
    targetSetting: 'Community Football Pitches & Sports Tournaments',
    theme: '"Play Hard, Respond Fast"',
    audienceEngagementFormat: 'Pre-match and half-time public address demonstrations, with referee and coach emergency briefing.',
    keyActivities: [
      'Referees & Coaches Briefing: Recognizing sudden collapse in young athletes (commotio cordis or sudden cardiac arrest).',
      'Half-time 5-Minute Crowd Demo: Announcers walk the crowd through the hands-only CPR rhythm with live manikin demo on pitch.',
      'Pitch-side First Aid Kit Check: Ensuring coaches have emergency transport contacts readily saved on their phones.',
    ],
    vernacularTalkingPoints: [
      '"Omusambi bw\'agwa tewali kumufuuwa mpewo:" (When a player collapses unexpectedly, do not fan them with shirts—check responsiveness immediately).',
      '"Nyiga ekifuba obutasalako:" (Push on the chest without interruption).',
    ],
    logisticsChecklist: [
      'Tournament organizers\' cooperation and match-day announcer script',
      'Pitch-side medical space and designated emergency transport vehicle on standby',
    ],
    evaluationMetric: 'All team coaches equipped with emergency casualty phone numbers and basic CPR awareness.',
  },
};

export const EventIdeasHub: React.FC = () => {
  const [selectedSetting, setSelectedSetting] = useState('schools');
  const [customGoal, setCustomGoal] = useState('');
  const [currentPlan, setCurrentPlan] = useState<EventPlan>(CURATED_EVENT_PLANS['schools']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (settingId: string) => {
    setSelectedSetting(settingId);
    setIsGenerating(true);

    try {
      const response = await fetch('/api/event-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          setting: settingId,
          customGoal: customGoal.trim(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.plan) {
          setCurrentPlan(data.plan);
          setIsGenerating(false);
          return;
        }
      }
    } catch {
      // Continue to fallback
    }

    // Curated local plan
    setTimeout(() => {
      const basePlan = CURATED_EVENT_PLANS[settingId] || CURATED_EVENT_PLANS['schools'];
      setCurrentPlan(basePlan);
      setIsGenerating(false);
    }, 400);
  };

  const copyPlanToClipboard = () => {
    const text = `
ACUTE RESUSCITATION INITIATIVE (ARI) LTD
EVENT CONCEPT: ${currentPlan.title}
Target: ${currentPlan.targetSetting}
Theme: ${currentPlan.theme}

ENGAGEMENT FORMAT:
${currentPlan.audienceEngagementFormat}

KEY ACTIVITIES:
${currentPlan.keyActivities.map((a) => `• ${a}`).join('\n')}

VERNACULAR TALKING POINTS (Uganda):
${currentPlan.vernacularTalkingPoints.map((v) => `• ${v}`).join('\n')}

LOGISTICS & SAFETY CHECKLIST:
${currentPlan.logisticsChecklist.map((l) => `[ ] ${l}`).join('\n')}

EVALUATION:
${currentPlan.evaluationMetric}
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#74172F] text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/10 rounded-xl text-rose-200">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              Community Event & Campaign Idea Planner
            </h3>
            <p className="text-xs text-rose-200/80">
              Generate culturally grounded CPR awareness campaign frameworks tailored for Ugandan settings
            </p>
          </div>
        </div>
      </div>

      {/* Setting Selector */}
      <div className="p-6 bg-[#FAF7F7] border-b border-neutral-200 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#686168] mb-3">
            Select Your Target Venue / Community Group:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {SETTING_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedSetting === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleGenerate(opt.id)}
                  type="button"
                  className={`flex flex-col items-center justify-center p-3 text-center rounded-xl border transition-all text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] ${
                    isSelected
                      ? 'bg-[#74172F] text-white border-[#74172F] shadow-sm'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-white' : 'text-[#74172F]'}`} />
                  <span className="line-clamp-2 leading-tight">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom refinement input */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
            placeholder="Optional custom objective (e.g., 'Focus on Mbale taxi drivers' or 'Primary school teachers')..."
            className="flex-1 w-full px-4 py-2 text-xs bg-white border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F]"
          />
          <button
            onClick={() => handleGenerate(selectedSetting)}
            disabled={isGenerating}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#4A0D20] hover:bg-[#380A18] rounded-xl transition-colors shadow-2xs whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGenerating ? 'Structuring Plan...' : 'Generate Plan'}</span>
          </button>
        </div>
      </div>

      {/* Generated Event Plan Card */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#74172F] mb-1">
              <span>{currentPlan.targetSetting}</span>
              <span className="text-neutral-400">·</span>
              <span className="italic font-medium">{currentPlan.theme}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#29252A]">
              {currentPlan.title}
            </h4>
          </div>

          <button
            onClick={copyPlanToClipboard}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#74172F] bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors shrink-0"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Plan Copied!' : 'Copy Complete Plan'}</span>
          </button>
        </div>

        {/* Audience Engagement Format */}
        <div className="bg-[#FAF7F7] p-4 rounded-xl border border-neutral-200">
          <p className="text-xs font-bold uppercase tracking-wider text-[#686168] mb-1">
            Audience Engagement Format
          </p>
          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
            {currentPlan.audienceEngagementFormat}
          </p>
        </div>

        {/* 2-Column Grid: Key Activities & Vernacular Talking Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
              Key Practical Activities
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
              {currentPlan.keyActivities.map((act, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#74172F]">
              Culturally Resonant Vernacular Messaging
            </h5>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 bg-rose-50/50 p-4 rounded-xl border border-rose-100">
              {currentPlan.vernacularTalkingPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#74172F] font-bold">›</span>
                  <p className="italic">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logistics Checklist & Evaluation */}
        <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#686168] mb-2">
              Logistics & Readiness Checklist
            </h5>
            <ul className="space-y-1.5 text-xs text-neutral-600">
              {currentPlan.logisticsChecklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded border border-neutral-400 inline-block shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#686168] mb-2">
              Suggested Outcome & Impact Metric
            </h5>
            <p className="text-xs text-neutral-700 bg-[#FAF7F7] p-3 rounded-xl border border-neutral-200">
              {currentPlan.evaluationMetric}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
