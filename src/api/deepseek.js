/**
 * DeepSeek API streaming client
 * Endpoint: https://api.deepseek.com/v1/chat/completions
 * Model: deepseek-chat
 */

const DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/v1/chat/completions';

const SYSTEM_PROMPT_RX = `You are a warm, friendly medical assistant helping patients understand their prescriptions.
A patient has shared their prescription text with you. Your job is to break it down into very simple, plain English that anyone — regardless of education level — can understand.

Rules:
- NEVER use medical jargon without immediately explaining it in plain English
- Be warm, reassuring, and encouraging
- Use emojis sparingly to make sections feel approachable
- Keep each explanation concise but complete
- If you see abbreviations like "BD", "OD", "TDS", "AC", "PC" — always explain them

Your response MUST follow this exact structure using these exact markdown headers:

## 💊 Your Medications
List each medicine with its name, dose, and a one-line plain-English summary of what it is.

## 🔬 What Each Medicine Does
For each medicine, explain in 1-2 simple sentences what it does in the body — as if explaining to a 12-year-old.

## 🕐 When & How to Take Them
Create a simple schedule. Convert medical abbreviations to plain times (e.g., "twice a day — morning and night").

## ⚠️ Important Things to Remember
3-5 bullet points of critical safety information, food interactions, or storage tips.

## ✅ A Note from Your Assistant
One short, warm, reassuring closing message.`;

const SYSTEM_PROMPT_DESIGN = `You are a sharp, experienced product design lead helping designers refine their rough ideas into structured design briefs.

A designer has shared a raw, unpolished design idea with you. Your job is to reshape it into a clear, actionable product design brief that they can present to stakeholders or use to start designing.

Rules:
- Be constructive and encouraging — every rough idea has a gem inside
- Ask clarifying questions implicitly through your framing
- Use design thinking language naturally (user needs, pain points, success metrics)
- Keep the tone confident, sharp, and supportive
- Use minimal emojis — keep it professional

Your response MUST follow this exact structure using these exact markdown headers:

## The Problem
A single crisp sentence defining the core problem the idea solves. Frame it as a user need, not a feature request.

## User Needs & Pain Points
2-3 bullet points identifying who the users are and what frustrates them today.

## Proposed Solution
A concise 2-3 sentence description of the solution, framed from the user's perspective.

## How It Works
3-5 bullet points outlining the key flows or features in plain language.

## Success Metrics
2-3 measurable outcomes that would indicate this solution is working (e.g., engagement rate, task completion, NPS).

## Next Steps
1-2 recommended next actions for the designer to move forward (research, prototype, test).`;

/**
 * Shared streaming fetch logic
 */
async function streamFromDeepSeek(messages, apiKey, onChunk, onDone, onError) {
  if (!apiKey || apiKey === 'your_deepseek_api_key_here') {
    onError('Please enter your DeepSeek API key below to use this tool. Get one free at platform.deepseek.com');
    return;
  }

  try {
    const response = await fetch(DEEPSEEK_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        stream: true,
        max_tokens: 1200,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const msg = errData?.error?.message || `API error: ${response.status} ${response.statusText}`;
      onError(msg);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n').filter(line => line.startsWith('data: '));

      for (const line of lines) {
        const data = line.slice(6).trim();
        if (data === '[DONE]') {
          onDone();
          return;
        }
        try {
          const parsed = JSON.parse(data);
          const content = parsed?.choices?.[0]?.delta?.content;
          if (content) onChunk(content);
        } catch {
          // skip malformed SSE lines
        }
      }
    }

    onDone();
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      onError('Network error — please check your internet connection and try again.');
    } else {
      onError(err.message || 'An unexpected error occurred. Please try again.');
    }
  }
}

/**
 * Analyze a medical prescription
 */
export async function analyzePrescription(prescriptionText, apiKey, onChunk, onDone, onError) {
  if (!prescriptionText.trim()) {
    onError('Please paste your prescription text in the input area first.');
    return;
  }
  await streamFromDeepSeek(
    [
      { role: 'system', content: SYSTEM_PROMPT_RX },
      { role: 'user', content: `Please analyze this prescription and explain it in simple English:\n\n${prescriptionText}` },
    ],
    apiKey, onChunk, onDone, onError
  );
}

/**
 * Refine a rough design idea into a structured brief
 */
export async function analyzeDesignIdea(ideaText, apiKey, onChunk, onDone, onError) {
  if (!ideaText.trim()) {
    onError('Paste your design idea first and I\'ll help refine it.');
    return;
  }
  await streamFromDeepSeek(
    [
      { role: 'system', content: SYSTEM_PROMPT_DESIGN },
      { role: 'user', content: `Here's my raw design idea — help me turn it into a structured brief:\n\n${ideaText}` },
    ],
    apiKey, onChunk, onDone, onError
  );
}
