import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Sparkles, Volume2, VolumeX, ShieldAlert, BookOpen, RotateCcw, AlertTriangle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sourceNote?: string;
  isFallback?: boolean;
}

const PRESET_QUESTIONS = [
  'How do I perform Hands-Only CPR on an adult?',
  'What is the difference between a heart attack and cardiac arrest?',
  'What are agonal gasps and why do people mistake them for breathing?',
  'How do Automated External Defibrillators (AEDs) work safely?',
  'What should bystanders do while waiting for transport in Uganda?',
];

const CURATED_ANSWERS: Record<string, string> = {
  'How do I perform Hands-Only CPR on an adult?': 
    'Hands-Only CPR is cardiopulmonary resuscitation without mouth-to-mouth breaths, recommended for bystanders who witness an adult suddenly collapse.\n\n1. Check for responsiveness: Tap both shoulders firmly and shout loudly. Check if they are breathing normally.\n2. Call emergency help: Alert nearby helpers and ask someone to call an ambulance or arrange transport to the nearest hospital.\n3. Push hard and fast: Place the heel of one hand in the center of the chest (lower breastbone) and interlock your other fingers. Keep your arms straight and push down 5 to 6 cm (2 inches) at 100 to 120 beats per minute.\n4. Do not stop: Continue compressions until the person shows signs of life, an AED arrives, or healthcare professionals take over.',

  'What is the difference between a heart attack and cardiac arrest?':
    'A Heart Attack is a "circulation" problem: an artery feeding the heart muscle becomes blocked. The person remains conscious and breathing, but experiences severe chest tightness, pain radiating to the jaw/arm, cold sweats, and anxiety. Do NOT perform CPR if the person is awake and talking.\n\nSudden Cardiac Arrest is an "electrical" problem: the heart stops pumping abruptly. The victim collapses within seconds, loses consciousness, and stops breathing normally. They WILL die without immediate CPR. An unresponsive person not breathing normally needs immediate chest compressions.',

  'What are agonal gasps and why do people mistake them for breathing?':
    'Agonal gasping is an abnormal, reflex pattern that occurs in up to 40% of cardiac arrest victims during the first few minutes of collapse. It sounds like heavy snoring, groaning, or irregular labored gasps.\n\nCritically, agonal gasping is NOT normal breathing. It is a sign of brainstem dying due to absent oxygen. Untrained bystanders often mistake this sound for recovery or choking. If an unconscious person is gasping irregularly, immediately begin chest compressions.',

  'How do Automated External Defibrillators (AEDs) work safely?':
    'An Automated External Defibrillator (AED) is an intelligent, portable device designed for any layperson. When turned on, it provides audible spoken and visual instructions.\n\n1. Apply the two adhesive pads to the victim\'s bare chest as illustrated on the pads.\n2. The AED automatically analyzes the cardiac electrical rhythm. It will NEVER shock unless a dangerous shockable rhythm (such as ventricular fibrillation) is present.\n3. If a shock is advised, ensure no one touches the victim and press the shock button when prompted. Then resume chest compressions immediately.',

  'What should bystanders do while waiting for transport in Uganda?':
    'In Ugandan towns and rural districts where ambulance arrival may take time, bystander organization is critical:\n\n1. Designate roles: Nominate one specific bystander to call the nearest district or referral hospital casualty unit, one to clear the road/gate, and one to arrange a vehicle.\n2. Keep compressions going: The person performing chest compressions must NEVER stop pushing to make phone calls. Switch rescuers every 2 minutes to prevent fatigue.\n3. Keep the patient flat: During transfer into a transport vehicle, support the head and back firmly in a horizontal position while continuing life-support checks.',
};

export const CPRKnowledgeAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to the ARI CPR Knowledge Hub. I can answer educational questions on cardiopulmonary resuscitation techniques, emergency recognition, AED usage, and community first-response according to international resuscitation consensus.',
      sourceNote: 'Acute Resuscitation Initiative (ARI) Educational Knowledge Base',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMetronomeActive, setIsMetronomeActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const metronomeIntervalRef = useRef<number | null>(null);
  const fallbackTimeoutRef = useRef<number | null>(null);
  const requestControllerRef = useRef<AbortController | null>(null);
  const requestGenerationRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const stopMetronome = () => {
    if (metronomeIntervalRef.current !== null) {
      window.clearInterval(metronomeIntervalRef.current);
      metronomeIntervalRef.current = null;
    }

    const context = audioContextRef.current;
    audioContextRef.current = null;
    if (context && context.state !== 'closed') {
      void context.close().catch(() => {});
    }
  };

  // 110 BPM Metronome for practicing 100-120 bpm rhythm
  const toggleMetronome = () => {
    if (isMetronomeActive) {
      stopMetronome();
      setIsMetronomeActive(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext ??
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const intervalMs = (60 / 110) * 1000;
      const playBeep = () => {
        const audioContext = audioContextRef.current;
        if (!audioContext || audioContext.state === 'closed') return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.12, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
        osc.start();
        osc.stop(audioContext.currentTime + 0.08);
      };

      void ctx.resume().catch(() => {});
      playBeep();
      metronomeIntervalRef.current = window.setInterval(playBeep, intervalMs);
      setIsMetronomeActive(true);
    } catch (err) {
      stopMetronome();
      setIsMetronomeActive(false);
      console.error('Metronome audio error:', err);
    }
  };

  useEffect(() => {
    return () => {
      requestGenerationRef.current += 1;
      requestControllerRef.current?.abort();
      if (fallbackTimeoutRef.current !== null) {
        window.clearTimeout(fallbackTimeoutRef.current);
        fallbackTimeoutRef.current = null;
      }
      stopMetronome();
    };
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const requestGeneration = ++requestGenerationRef.current;
    const controller = new AbortController();
    requestControllerRef.current = controller;

    // Try server endpoint first; fall back to curated database if needed
    try {
      const response = await fetch('/api/cpr-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query }),
        signal: controller.signal,
      });

      if (response.ok) {
        const data = await response.json();
        if (requestGeneration !== requestGenerationRef.current) return;
        if (typeof data.answer === 'string' && data.answer.trim()) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: data.answer,
              sourceNote: 'AI-generated educational summary based on ILCOR guidelines. Not medical advice.',
            },
          ]);
          setIsLoading(false);
          requestControllerRef.current = null;
          return;
        }
      }
    } catch {
      // Continue to fallback
    }

    if (requestGeneration !== requestGenerationRef.current) return;
    requestControllerRef.current = null;

    // Curated local answer or smart fallback
    fallbackTimeoutRef.current = window.setTimeout(() => {
      if (requestGeneration !== requestGenerationRef.current) return;
      fallbackTimeoutRef.current = null;
      const matched = Object.keys(CURATED_ANSWERS).find(
        (key) => key.toLowerCase() === query.toLowerCase() || query.toLowerCase().includes(key.toLowerCase())
      );

      let reply = matched
        ? CURATED_ANSWERS[matched]
        : `Regarding "${query}":\n\nIn adult sudden cardiac arrest, the most crucial intervention is immediate, high-quality chest compressions delivered hard and fast in the center of the chest at 100 to 120 compressions per minute.\n\nKey Principles to Remember:\n• Check safety, tap shoulders, and shout to verify unresponsiveness.\n• If breathing is absent or irregular (agonal gasps), begin compressions immediately.\n• Allow full chest recoil after each push.\n• Send someone to call for local transport or emergency medical help.\n\nPlease note: This educational hub does not replace certified hands-on resuscitation training or clinical dispatch instructions.`;

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: reply,
          sourceNote: 'ARI Educational Resuscitation Reference Guidelines',
          isFallback: true,
        },
      ]);
      setIsLoading(false);
    }, 450);
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
      {/* Assistant Header */}
      <div className="bg-[#74172F] text-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl text-rose-200">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold">
              CPR Educational Assistant
            </h3>
            <p className="text-xs text-rose-200/80">
              Informed by International Liaison Committee on Resuscitation (ILCOR) Guidelines
            </p>
          </div>
        </div>

        {/* 110 BPM Compression Metronome Tool */}
        <div className="flex items-center gap-2 bg-[#4A0D20] px-3 py-1.5 rounded-xl border border-rose-300/20">
          <button
            onClick={toggleMetronome}
            type="button"
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-lg transition-colors ${
              isMetronomeActive
                ? 'bg-rose-500 text-white animate-pulse'
                : 'text-rose-200 hover:text-white hover:bg-white/10'
            }`}
            title="Listen to 110 BPM CPR compression rhythm"
          >
            {isMetronomeActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isMetronomeActive ? 'CPR Metronome (110 BPM): ON' : 'CPR Rhythm Practice'}</span>
          </button>
        </div>
      </div>

      {/* Safety Notice Strip */}
      <div className="bg-rose-50 border-b border-rose-100 px-4 py-2 text-[11px] text-[#4A0D20] flex items-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-[#74172F] shrink-0" />
        <span>
          Educational tool only. If you are witnessing an active cardiac emergency right now, call for immediate medical assistance and push hard and fast in the center of the chest.
        </span>
      </div>

      {/* Suggested Prompt Buttons */}
      <div className="p-4 bg-[#FAF7F7] border-b border-neutral-200">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#686168] mb-2 flex items-center gap-1">
          <BookOpen className="w-3 h-3 text-[#74172F]" />
          <span>Suggested Topics:</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => handleSendMessage(q)}
              type="button"
              className="text-xs text-left px-3 py-1.5 bg-white hover:bg-rose-50 hover:text-[#74172F] text-neutral-700 rounded-lg border border-neutral-200 transition-colors shadow-2xs font-medium"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto bg-neutral-50/40">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-[#74172F] text-white rounded-br-xs'
                  : 'bg-white text-[#29252A] border border-neutral-200 shadow-2xs rounded-bl-xs'
              }`}
            >
              <div className="whitespace-pre-line">{m.content}</div>

              {m.sourceNote && (
                <div className="mt-2 pt-2 border-t border-neutral-100 text-[10px] text-neutral-400">
                  {m.sourceNote}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-[#74172F] bg-white p-3 rounded-xl border border-neutral-200 w-fit">
            <Sparkles className="w-4 h-4 animate-spin text-[#74172F]" />
            <span>Consulting resuscitation guidelines...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-4 bg-white border-t border-neutral-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about CPR or resuscitation (e.g., 'What is compression depth?')..."
          className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74172F] focus-visible:bg-white transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="inline-flex items-center justify-center p-2.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#74172F] hover:bg-[#5e1225] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-colors shadow-2xs"
          aria-label="Send CPR Question"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline ml-1.5">Ask</span>
        </button>
      </form>
    </div>
  );
};
