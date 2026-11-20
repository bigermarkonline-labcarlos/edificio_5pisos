import express from 'express';
import dotenv from 'dotenv';
import {GoogleGenAI} from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini AI client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({status: 'ok', message: 'AI Studio React Template API'});
});

// Gemini API proxy endpoint
app.post('/api/gemini', async (req, res) => {
  try {
    const {prompt, model = 'gemini-1.5-flash'} = req.body;

    if (!prompt) {
      return res.status(400).json({error: 'Prompt is required'});
    }

    const result = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    res.json({response: result.text});
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({error: 'Failed to generate content'});
  }
});

// Catch-all for API routes
app.use('/api', (req, res) => {
  res.status(404).json({error: 'API endpoint not found'});
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Gemini API proxy available at /api/gemini`);
});