import { FocusArea, NewsItem, RegistrationDetails, SocialLinks } from '../types';

export const ARI_REGISTRATION: RegistrationDetails = {
  organizationName: 'Acute Resuscitation Initiative (ARI) Ltd',
  entityType: 'Company Limited by Guarantee Without Share Capital',
  incorporationDate: 'November 5, 2024',
  registrationNumber: '80034997267053',
  registrarAgency: 'Uganda Registration Services Bureau (URSB)',
  registeredOffice: 'Plot 4-5 Buteza Close, Magezi Cell, Nabuyonga Ward, Northern Division, Mbale District, Uganda',
  postalAddress: 'P. O. Box 1873, Mbale, Uganda',
  country: 'Republic of Uganda',
  contactEmail: 'info@ari.org.ug',
  contactPhone: '+256 758 360707',
  officialWhatsAppNumber: '+256 758 360707',
};

export const ARI_VISION = 
  'To create a nation where every individual is equipped with life-saving knowledge and skills of CPR, ensuring a safe and healthier Uganda through widespread public education, training, and cultural change.';

export const ARI_MISSION = 
  'Increase awareness, accessibility, and education of CPR across Uganda; empower communities by overcoming barriers through strategic partnerships, innovative training programs, and sustainable public-health initiatives.';

export const ARI_COMMITMENTS = [
  {
    title: 'Preventing Avoidable Mortality',
    description: 'Promoting timely, appropriate CPR education and rapid bystander emergency-response awareness so cardiac arrest victims receive help before irreversible injury occurs.',
  },
  {
    title: 'Accessible Community Knowledge',
    description: 'Demystifying resuscitation techniques through plain-language instruction, vernacular explanations, and culturally tailored public health materials.',
  },
  {
    title: 'Responsible Public Health Education',
    description: 'Ensuring all guidance adheres to internationally validated resuscitation science while addressing the infrastructural and emergency realities of Uganda.',
  },
  {
    title: 'Institutional Capacity Support',
    description: 'Collaborating with primary schools, secondary institutions, vocational colleges, and rural health clinics to cultivate resilient first-response capacity.',
  },
  {
    title: 'Strategic Nationwide Alliances',
    description: 'Forging collaborative pathways with civil society, local governments, emergency medical services, and health professional associations across Uganda.',
  },
];

export const ARI_SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/ariuganda',
  twitter: 'https://x.com/ari_uganda',
  linkedin: 'https://linkedin.com/company/acute-resuscitation-initiative',
  instagram: 'https://instagram.com/ari_uganda',
  whatsapp: 'https://wa.me/256758360707',
};

export const WHATSAPP_PREFILLED_MESSAGE = 
  'Hello Acute Resuscitation Initiative (ARI), I visited your website and would like to learn more about your work.';

export const WHATSAPP_URL = 
  `https://wa.me/256758360707?text=${encodeURIComponent(WHATSAPP_PREFILLED_MESSAGE)}`;

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'community-cpr',
    title: 'Community CPR Education',
    subtitle: 'Practical bystander readiness in local neighborhoods and public venues',
    description: 'Promote public awareness and practical CPR education so everyday community members—from market vendors and transport operators to family caregivers—understand how to recognize cardiac emergencies and respond with confidence.',
    targetAudience: 'Local community members, market associations, transport hubs, civic groups',
    impactObjective: 'Equip lay citizens with hands-only CPR competence and the confidence to intervene immediately.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    status: 'Active Initiative',
    keyInterventions: [
      'Hands-only adult chest compression workshops using realistic manikins',
      'Vernacular emergency terminology sessions in Luganda, Lumasaba, and English',
      'Step-by-step victim responsiveness assessment techniques',
      'Practical guidance on organizing local crowd control and calling for help',
    ],
  },
  {
    id: 'public-awareness',
    title: 'Public Awareness Campaigns',
    subtitle: 'Disseminating life-saving knowledge through responsible media and outreach',
    description: 'Encourage widespread CPR awareness through community barazas, targeted radio messaging, clear educational posters, and digital public health materials that debunk resuscitation misconceptions.',
    targetAudience: 'General public across urban centers and rural districts of Uganda',
    impactObjective: 'Shift resuscitation from an unfamiliar clinical procedure to an essential civic responsibility.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    status: 'Active Initiative',
    keyInterventions: [
      'Community radio broadcasts explaining the signs of sudden cardiac collapse',
      'Infographics and illustrated posters distributed in busy civic spaces',
      'Public health discussions clarifying the difference between heart attack and cardiac arrest',
      'Awareness rallies during national and international health observance days',
    ],
  },
  {
    id: 'school-education',
    title: 'CPR Education in Schools',
    subtitle: 'Nurturing an emergency-ready generation from primary to tertiary levels',
    description: 'Support efforts to make age-appropriate CPR awareness and emergency preparedness an integral part of educational environments, empowering students, prefects, and teachers to safeguard their school communities.',
    targetAudience: 'Secondary school students, primary teachers, university health clubs',
    impactObjective: 'Build early muscle memory and leadership instincts for acute emergency situations.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    status: 'Proposed Program',
    keyInterventions: [
      'Peer-led junior resuscitation demonstrations during school health assemblies',
      'Teacher emergency response orientation and first-aid club mentoring',
      'Manikin-assisted compression training integrated into extracurricular health clubs',
      'Basic campus emergency action plans for school sports and boarding events',
    ],
  },
  {
    id: 'healthcare-development',
    title: 'Healthcare Professional Development',
    subtitle: 'Strengthening frontline resuscitation knowledge across clinic environments',
    description: 'Support opportunities to strengthen CPR knowledge and relevant resuscitation skills among primary healthcare workers, clinical officers, nurses, and allied staff, aligned with actual accredited continuing professional education standards.',
    targetAudience: 'Health Center III & IV staff, nursing students, private dispensary teams',
    impactObjective: 'Standardize high-quality Basic Life Support (BLS) protocols across primary care tiers.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    status: 'Proposed Program',
    keyInterventions: [
      'Resuscitation protocol refreshers for rural health center personnel',
      'Team-based cardiac arrest simulation and role coordination drills',
      'Bag-valve-mask ventilatory support and AED familiarity orientations',
      'Post-resuscitation stabilization and emergency transfer coordination',
    ],
  },
  {
    id: 'community-partnerships',
    title: 'Community Partnerships',
    subtitle: 'Collaborating with institutions to amplify life-saving impact',
    description: 'Encourage active collaboration with healthcare facilities, educational institutions, district health offices, faith-based leaders, transport associations, and civil society partners to build sustainable emergency networks.',
    targetAudience: 'District health teams, faith institutions, NGO partners, corporate employers',
    impactObjective: 'Create institutional ownership so CPR training becomes recurring and locally sustained.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
    status: 'Active Initiative',
    keyInterventions: [
      'Joint training arrangements with community sports clubs and religious centers',
      'Coordination with local ambulance services and hospital casualty departments',
      'Workplace emergency preparedness packages for regional enterprises',
      'Stakeholder advisory roundtables on pre-hospital resuscitation in Eastern Uganda',
    ],
  },
  {
    id: 'public-health-advocacy',
    title: 'Public Health Advocacy',
    subtitle: 'Elevating resuscitation policy and community emergency response',
    description: 'Promote greater recognition of CPR education as a vital component of public health and disaster preparedness in Uganda, advocating for accessible public defibrillation and community emergency training frameworks.',
    targetAudience: 'Policy influencers, local government leaders, health sector advocates',
    impactObjective: 'Foster policy environments that encourage bystander intervention and emergency accessibility.',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80',
    status: 'Active Initiative',
    keyInterventions: [
      'Documenting bystander intervention challenges in non-urban Ugandan settings',
      'Engaging civic stakeholders on good Samaritan protections for lay rescuers',
      'Advocating for CPR curriculum integration in technical and secondary institutions',
      'Promoting public AED awareness and placement in high-density transit zones',
    ],
  },
];

export const VERIFIED_NEWS: NewsItem[] = [
  {
    id: 'incorporation-announcement',
    title: 'Acute Resuscitation Initiative (ARI) Ltd Formally Incorporated to Expand CPR Education Across Uganda',
    category: 'Announcement',
    date: 'November 2024',
    summary: 'ARI Ltd has officially completed its registration under the laws of Uganda as a company limited by guarantee, establishing its institutional headquarters in Mbale District.',
    content: 'Acute Resuscitation Initiative (ARI) Ltd has received its official Certificate of Incorporation (Reg. No. 80034997267053) from the Uganda Registration Services Bureau (URSB). Established as a non-profit company limited by guarantee without share capital, ARI is dedicated to addressing the critical gap in bystander cardiopulmonary resuscitation (CPR) awareness and practical first-response skills throughout Uganda.\n\nOperating from its registered office in Mbale District, the organization has commenced stakeholder consultations with local health institutions, educators, and community leadership to structure sustainable community training modules.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    location: 'Mbale District, Uganda',
    readTime: '3 min read',
  },
  {
    id: 'community-preparedness-dialogue',
    title: 'Consultations Open for Community Resuscitation Education Framework in Eastern Uganda',
    category: 'Community Outreach',
    date: 'December 2024',
    summary: 'Dialogue underway with community health workers, local educators, and civil society actors to design culturally grounded CPR instruction formats.',
    content: 'To ensure CPR education is accessible and culturally resonant, ARI has commenced preliminary discussions with community stakeholders across Nabuyonga Ward and Northern Division in Mbale. Key considerations include delivering hands-on demonstrations in local languages, engaging transport and trade associations who are frequently first on scene during public collapses, and producing clear visual emergency action guides.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    location: 'Mbale, Uganda',
    readTime: '4 min read',
  },
  {
    id: 'partnership-invitation-2025',
    title: 'ARI Invites Academic, Healthcare, and Corporate Partners to Strengthen First-Response Education',
    category: 'Partnership',
    date: 'January 2025',
    summary: 'Organizations committed to public health, youth empowerment, and emergency preparedness are invited to explore collaborative initiatives with ARI.',
    content: 'Through its strategic partnership framework, ARI is actively welcoming collaboration with secondary schools, tertiary colleges, corporate employers, and public health advocates. Collaborative initiatives focus on delivering hands-only CPR sessions, supporting training equipment procurement (such as adult training manikins), and fostering an enduring culture of civic emergency preparedness across Uganda.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    location: 'Uganda (Nationwide)',
    readTime: '3 min read',
  },
];
