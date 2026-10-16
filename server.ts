import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Server-side Gemini initialization
  const apiKey = process.env.GEMINI_API_KEY || '';
  const ai = apiKey
    ? new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      })
    : null;

  // 1. CPR Assistant API endpoint
  app.post('/api/cpr-assistant', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      if (!ai) {
        return res.status(503).json({ error: 'Gemini API key is not configured' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'You are the educational assistant for Acute Resuscitation Initiative (ARI) Ltd, a Ugandan organization dedicated to CPR awareness. ' +
            'CRITICAL GUIDELINES: ' +
            '1. This is strictly educational awareness, NEVER clinical medical advice or formal certification. ' +
            '2. In an active emergency, state that the bystander must immediately alert medical help/transport and begin continuous chest compressions. ' +
            '3. Follow international consensus (ILCOR): adult chest compression rate is 100-120 per minute, depth 5-6 cm (2 inches), complete recoil, minimal interruptions. ' +
            '4. Explain that agonal gasping is abnormal and an indicator of cardiac arrest. ' +
            '5. Warn against harmful myths like putting spoons or fingers in an unconscious person\'s mouth. ' +
            '6. Keep responses concise, clear, and relevant to the Ugandan community context.',
          temperature: 0.3,
        },
      });

      const text = response.text || '';
      return res.json({ answer: text });
    } catch (error: any) {
      console.error('CPR assistant server error:', error);
      return res.status(500).json({ error: error.message || 'Error processing request' });
    }
  });

  // 2. Event Ideas Hub API endpoint
  app.post('/api/event-ideas', async (req, res) => {
    try {
      const { setting, customGoal } = req.body;
      if (!ai) {
        return res.status(503).json({ error: 'Gemini API key is not configured' });
      }

      const promptText = `Generate a structured, culturally grounded community CPR awareness event plan for: ${setting} in Uganda. Specific goal: ${customGoal || 'Engage everyday citizens with hands-only CPR training'}.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptText,
        config: {
          systemInstruction:
            'You are a public health event planner for Acute Resuscitation Initiative (ARI) Ltd in Uganda. ' +
            'Return a structured JSON object with keys: title (string), targetSetting (string), theme (string), audienceEngagementFormat (string), keyActivities (array of strings), vernacularTalkingPoints (array of strings with local Ugandan phrases), logisticsChecklist (array of strings), evaluationMetric (string).',
          responseMimeType: 'application/json',
          temperature: 0.4,
        },
      });

      const text = response.text || '{}';
      try {
        const plan = JSON.parse(text);
        return res.json({ plan });
      } catch {
        return res.status(500).json({ error: 'Failed to parse plan JSON' });
      }
    } catch (error: any) {
      console.error('Event ideas server error:', error);
      return res.status(500).json({ error: error.message || 'Error generating plan' });
    }
  });

  // 3. Contact Form Submission API endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, message, subject, organization, inquiryType } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const referenceId = `ARI-${Date.now().toString().slice(-6)}`;
    console.log(`[ARI Contact Received] Ref: ${referenceId} from ${name} (${email}) - Inquiry: ${inquiryType || 'general'}`);

    return res.json({
      success: true,
      referenceId,
      message: 'Inquiry successfully received by ARI secretariat',
    });
  });

  // Mount Vite dev server or serve production build
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ARI Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
