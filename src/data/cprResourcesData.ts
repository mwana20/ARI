import { CPRResource } from '../types';

export const CPR_EMERGENCY_STEPS = [
  {
    step: '1',
    title: 'Recognize & Check Responsiveness',
    subtitle: 'Assess safety and victim responsiveness',
    action: 'First ensure the immediate scene is safe for you. Tap the person firmly on both shoulders and shout loudly: "Are you okay?" Look at their chest for breathing: if they are unresponsive and not breathing normally (or only making irregular gasping sounds), they need immediate help.',
    keyRule: 'Agonal gasps (irregular, snoring sounds) are a sign of cardiac arrest, NOT normal breathing.',
  },
  {
    step: '2',
    title: 'Call for Emergency Assistance',
    subtitle: 'Alert responders and assign a specific helper',
    action: 'Immediately call for emergency medical help. Point to a specific bystander and command clearly: "You in the blue shirt, call for an ambulance and alert the nearest clinic immediately!" If an Automated External Defibrillator (AED) is available nearby, send someone to fetch it.',
    keyRule: 'Never delay compressions to wait for help. Start compressions immediately.',
  },
  {
    step: '3',
    title: 'Deliver High-Quality Chest Compressions',
    subtitle: 'Push hard and fast in the center of the chest',
    action: 'Place the heel of one hand in the center of the chest (lower half of the breastbone). Interlock your other hand on top. Keep your arms straight and shoulders directly over your hands. Push down firmly at least 5 to 6 cm (2 inches) at a rhythm of 100 to 120 compressions per minute.',
    keyRule: 'Allow full chest recoil between compressions. Do not lean on the chest.',
  },
  {
    step: '4',
    title: 'Continue Until Professional Handover',
    subtitle: 'Maintain continuous rhythm or swap rescuers',
    action: 'Continue uninterrupted compressions until: 1. The person clearly starts breathing, moving, or wakes up; 2. An AED arrives, is turned on, and instructs you to pause; 3. Trained healthcare professionals take over; or 4. You become too physically exhausted to continue (swap rescuers smoothly every 2 minutes if someone else is available).',
    keyRule: 'Minimizing interruptions in chest compressions maximizes blood flow to the brain.',
  },
];

export const CPR_RESOURCES: CPRResource[] = [
  {
    id: 'hands-only-cpr-guide',
    title: 'Adult Hands-Only CPR: Complete Bystander Guide',
    category: 'Emergency Steps',
    summary: 'A definitive guide to performing bystander hands-only cardiopulmonary resuscitation for an adult experiencing sudden cardiac collapse.',
    readTime: '5 min read',
    publishedDate: 'January 2025',
    authoritativeSource: 'Based on ILCOR and Resuscitation Science Consensus Guidelines',
    warningNote: 'This educational material is for public awareness. In an actual emergency, call for urgent medical help immediately and begin chest compressions.',
    content: [
      'Cardiopulmonary resuscitation (CPR) is an emergency procedure that combines chest compressions often with artificial ventilation in an effort to manually preserve intact brain function until further measures are taken to restore spontaneous blood circulation and breathing.',
      'For untrained bystanders or witnesses in public spaces, Hands-Only CPR (compression-only CPR) is recommended by global resuscitation bodies as an effective, life-saving intervention. Hands-Only CPR eliminates the reluctance and delay associated with mouth-to-mouth ventilation while maintaining vital blood perfusion to the brain and heart muscle.',
      'Positioning: Ensure the victim is lying flat on a firm, level surface. Kneel beside their chest. Place the heel of one hand in the middle of the chest and interlock the fingers of your second hand.',
      'Compression Technique: Lock your elbows straight. Use your upper body weight to compress the chest downwards 5 to 6 cm. Deliver 100 to 120 compressions per minute. Allow complete chest recoil between each push.',
    ],
    keyTakeaways: [
      'Rate: 100 to 120 compressions per minute (the tempo of songs like "Stayin\' Alive")',
      'Depth: 5 to 6 cm (approximately 2 inches) on an adult',
      'Location: Center of the chest, lower half of the sternum',
      'Hands-only CPR without rescue breaths is highly effective for adult cardiac arrest witnesses',
    ],
  },
  {
    id: 'cardiac-arrest-vs-heart-attack',
    title: 'Recognizing Cardiac Arrest vs. Heart Attack',
    category: 'Fundamentals',
    summary: 'Understanding the crucial clinical differences between an electrical emergency (cardiac arrest) and a plumbing emergency (myocardial infarction).',
    readTime: '4 min read',
    publishedDate: 'January 2025',
    authoritativeSource: 'Clinical Resuscitation Literature & Public Health Cardiology',
    warningNote: 'Both conditions are life-threatening medical emergencies requiring immediate clinical transfer.',
    content: [
      'Many people mistakenly use the terms "heart attack" and "cardiac arrest" interchangeably. However, they are distinct clinical conditions that require distinct first-response actions.',
      'Heart Attack (Circulation / "Plumbing" Problem): Occurs when a coronary artery is blocked, depriving heart muscle of oxygenated blood. The patient is usually conscious, breathing, and experiencing symptoms such as crushing chest tightness, pain radiating to the jaw or arm, sweating, nausea, and severe anxiety. The person is alive and awake—they do NOT need CPR while conscious.',
      'Cardiac Arrest (Electrical / "Pump Failure" Problem): Occurs when an abrupt electrical malfunction causes the heart to unexpectedly stop beating effectively. Blood stops flowing to the brain and lungs. Within seconds, the person collapses, loses consciousness, and stops breathing normally. They appear dead and WILL die without immediate CPR and defibrillation.',
    ],
    keyTakeaways: [
      'Conscious person with chest pain: Heart attack (keep calm, sit them upright, call hospital immediately)',
      'Unresponsive person not breathing normally: Cardiac arrest (CALL HELP & START CPR IMMEDIATELY)',
      'Every minute of delayed CPR reduces the probability of neurologically intact survival',
    ],
  },
  {
    id: 'calling-emergency-uganda',
    title: 'Navigating Emergency Medical Dispatch & Community Transport in Uganda',
    category: 'Bystander Guidance',
    summary: 'Practical approaches to mobilizing assistance, crowd management, and organizing transport during a medical crisis in Ugandan towns and rural districts.',
    readTime: '6 min read',
    publishedDate: 'February 2025',
    authoritativeSource: 'Acute Resuscitation Initiative Public Health Protocol',
    content: [
      'In many parts of Uganda, formal municipal ambulance dispatch systems may experience delays due to traffic density, distance, or limited fleet availability. In an acute emergency, bystander coordination is paramount.',
      'Designate Specific Helpers: Avoid calling out vague requests to a crowd. Make direct eye contact with specific individuals and assign designated roles: one person to contact the nearest referral hospital casualty department, one person to clear the road or gate, and one person to prepare transport.',
      'Maintain Compressions During Coordination: The rescuer administering chest compressions must not pause or leave the patient. Continue compressions continuously while other community members organize vehicle or ambulance arrival.',
      'Safe Handling and Transfer: Keep the patient flat on a firm backboard or rigid stretcher when moving them to an emergency vehicle. Maintain an open airway and continue monitoring breathing status throughout transfer.',
    ],
    keyTakeaways: [
      'Assign single, unambiguous tasks to named community bystanders',
      'Never pause chest compressions to talk on the telephone or direct traffic yourself',
      'Know the emergency numbers and casualty unit contact for your local district hospital',
    ],
  },
  {
    id: 'aed-basics-guide',
    title: 'Automated External Defibrillators (AEDs): Public Awareness & Function',
    category: 'Fundamentals',
    summary: 'What an AED is, how voice prompts guide any layperson, and why defibrillation is essential for shockable cardiac rhythms.',
    readTime: '4 min read',
    publishedDate: 'February 2025',
    authoritativeSource: 'Global Resuscitation Consensus & Medical Device Guidelines',
    content: [
      'An Automated External Defibrillator (AED) is a portable medical device designed to analyze the heart rhythm and deliver an electric shock to restore an effective heartbeat in victims of ventricular fibrillation (VF) or pulseless ventricular tachycardia (VT).',
      'Modern AEDs are designed for use by completely untrained laypersons. Once turned on (by opening the lid or pressing the power button), the device speaks clear, step-by-step audible instructions in English or configured languages.',
      'Electrode Pad Placement: Adhesive pads are placed on the victim\'s bare chest—one on the upper right chest below the collarbone, and the other on the lower left side below the armpit.',
      'Safety Assurance: An AED will NEVER deliver a shock unless it detects a shockable lethal rhythm. It cannot accidentally shock someone who does not need it.',
    ],
    keyTakeaways: [
      'AEDs give clear spoken voice instructions and visual diagrams',
      'Cannot deliver a shock unless a shockable cardiac rhythm is confirmed by the computer',
      'Pad positions: Upper right chest and lower left ribcage on bare, dry skin',
    ],
  },
  {
    id: 'cpr-myths-facts',
    title: 'Common Resuscitation Myths Debunked',
    category: 'Community FAQs',
    summary: 'Clarifying widespread misconceptions regarding tongue swallowing, broken ribs, mouth-to-mouth requirements, and legal liability.',
    readTime: '5 min read',
    publishedDate: 'February 2025',
    authoritativeSource: 'ARI Community Health Advisory Panel',
    content: [
      'Myth: "You can swallow your tongue during a collapse, so you must stick fingers or spoons into the mouth."\nFACT: It is anatomically impossible to swallow your tongue. Inserting fingers, spoons, or wooden sticks into an unconscious person\'s mouth causes severe dental trauma, soft-tissue injury, and airway obstruction. To clear an airway, simply perform the gentle Head-Tilt, Chin-Lift maneuver.',
      'Myth: "If you break a rib during CPR, you have harmed the person and will get in trouble."\nFACT: Proper chest compressions require pushing hard (5–6 cm). Rib fractures or cartilage separation occasionally occur, particularly in older adults. Without CPR, the person will not survive. Survival with a cracked rib is vastly preferable to death.',
      'Myth: "You must do mouth-to-mouth rescue breaths for CPR to work."\nFACT: For adult sudden cardiac arrest witnessed in public, blood contains residual oxygen for several minutes. Hands-Only CPR circulating that oxygenated blood through chest compressions alone provides substantial life support while avoiding rescue breath hesitation.',
    ],
    keyTakeaways: [
      'Never place spoons, fingers, or objects into an unconscious person\'s mouth',
      'Perform the head-tilt, chin-lift to keep the airway open',
      'Hands-only compressions are safe, effective, and prioritize continuous blood circulation',
    ],
  },
];

export const CPR_FAQS = [
  {
    question: 'Can I do CPR on someone if I am not a certified doctor or nurse?',
    answer: 'Yes! Anyone can perform Hands-Only CPR. When someone suffers sudden cardiac arrest in a public place, their heart has stopped pumping blood. Doing hands-only compressions (pushing hard and fast in the center of the chest) can double or triple their chance of survival compared to doing nothing while waiting for help.',
  },
  {
    question: 'How fast and how deep should I push?',
    answer: 'Push at a rate of 100 to 120 compressions per minute, which is the tempo of the song "Stayin\' Alive". On an adult, push down firmly at least 5 to 6 cm (about 2 inches) and allow the chest to return to its normal position between every compression.',
  },
  {
    question: 'What if the person makes strange snoring or gasping noises?',
    answer: 'These are known as "agonal gasps". They are an abnormal reflex that happens in the first few minutes of cardiac arrest. Agonal gasps are NOT normal breathing. If the person is unresponsive and making agonal gasps, start CPR immediately.',
  },
  {
    question: 'Will reading this website make me a certified CPR provider?',
    answer: 'No. This website provides educational awareness and public health information. Formal certification requires in-person practical hands-on training with an accredited resuscitation organization where compression depth and recoil are practiced on specialized feedback manikins.',
  },
  {
    question: 'What is Acute Resuscitation Initiative (ARI) Ltd doing in Uganda?',
    answer: 'ARI is a registered Ugandan non-profit company limited by guarantee (Reg No. 80034997267053) based in Mbale District. ARI works to expand CPR awareness, advocate for community emergency preparedness, conduct practical training initiatives, and partner with schools, community groups, and health clinics across Uganda.',
  },
];
