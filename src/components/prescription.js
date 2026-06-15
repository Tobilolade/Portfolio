const SAMPLE_IDEA = `I want to build an app that helps freelancers track their project finances — invoices, expenses, taxes — but in a way that doesn't feel like accounting software. More like a friendly dashboard that shows you "you're doing well" or "you need to send more invoices this month." Maybe with smart insights like "your top clients this quarter" and "estimated tax set-aside."`;

const DEMO_RESPONSES = [
  `## The Problem
Freelancers managing their own finances often juggle multiple tools — one for invoicing, another for expenses, a spreadsheet for taxes. The result is a fragmented workflow that leads to missed invoices, late tax filings, and financial stress.

## User Needs & Pain Points
- Freelancers want a single place to see their financial health without learning accounting software
- Tracking income and expenses manually is error-prone and time-consuming
- Tax time becomes a scramble because deductible expenses aren't organized throughout the year

## Proposed Solution
A friendly, all-in-one financial dashboard designed specifically for freelancers. It replaces spreadsheets and scattered tools with a single view that shows cash flow, upcoming invoices, and tax insights — using plain language and visual cues instead of accounting jargon.

## How It Works
- **Dashboard snapshot** shows your monthly income, outstanding invoices, and estimated tax set-aside at a glance
- **Smart invoicing** lets you create and send invoices in under 30 seconds with auto-reminders for overdue payments
- **Expense tracking** connects to your bank or lets you snap receipt photos — automatically categorizing deductions
- **Tax readiness** calculates estimated quarterly taxes and surfaces deductible expenses as you go

## Success Metrics
- 80% of users report feeling "in control" of their finances within the first month
- Average invoice payment time reduced from 45 to 14 days with smart reminders
- Users save an average of 6 hours per week on financial admin

## Next Steps
1. Validate with 10–15 freelancers through concept testing
2. Prioritize the MVP around the dashboard + invoicing flows
3. Build a simple prototype in Figma and run usability tests before building`,
];

function generateResponse(idea) {
  const lower = idea.toLowerCase();

  if (lower.includes('freelanc') || lower.includes('invoice') || lower.includes('finance')) {
    return DEMO_RESPONSES[0];
  }

  if (lower.includes('learn') || lower.includes('course') || lower.includes('education') || lower.includes('skill')) {
    return `## The Problem
Learners face overwhelming choice when browsing courses and learning resources, leading to decision paralysis and low completion rates.

## User Needs & Pain Points
- Users don't know where to start and spend more time browsing than learning
- Course recommendations feel generic and don't account for existing knowledge
- Learners lose motivation without clear milestones or a sense of progress

## Proposed Solution
A structured, guided learning platform that creates personalized learning paths based on a user's goals, current skill level, and preferred pace — making education feel like a journey, not a firehose.

## How It Works
- **Skill assessment** at onboarding determines starting level and goals
- **Curated learning paths** combine courses, articles, and projects tailored to each user
- **Progress tracking** shows completion milestones and suggests next steps
- **Community check-ins** provide accountability and peer support along the way

## Success Metrics
- Course completion rates increase from 12% industry average to 45%
- Users complete their first learning path within 30 days of signup
- NPS score of 60+ driven by personalized guidance

## Next Steps
1. Define 3 core learning path templates and test with target users
2. Map the onboarding quiz to valid skill assessments
3. Prototype the progress dashboard and test comprehension`;
  }

  if (lower.includes('health') || lower.includes('fitness') || lower.includes('wellness') || lower.includes('habit')) {
    return `## The Problem
People struggle to build consistent healthy habits because existing apps focus on tracking metrics rather than understanding the psychology of behavior change.

## User Needs & Pain Points
- Habit tracking apps feel like chores — users quit within 2 weeks on average
- Generic plans don't account for individual lifestyle, triggers, or motivation style
- Users need encouragement, not just data points

## Proposed Solution
A behavior-first wellness app that pairs habit tracking with personalized coaching, gentle nudges, and a forgiving approach that celebrates consistency over perfection.

## How It Works
- **Onboarding quiz** identifies your motivation style, schedule, and habit goals
- **Micro-habits** start small — 2-minute actions that build momentum
- **Adaptive nudges** adjust reminders based on your actual behavior patterns
- **Streaks with grace** allow skip days without resetting progress — building long-term consistency

## Success Metrics
- 60% of users maintain their habit for 30+ days (vs 15% industry average)
- Daily active usage remains above 40% after 8 weeks
- Users report improved well-being scores after 3 months

## Next Steps
1. Research behavior change models (BJ Fogg, James Clear) to inform the approach
2. Design the micro-habit flow and test for friction
3. Build a working prototype and run a 2-week user study`;
  }

  if (lower.includes('market') || lower.includes('shop') || lower.includes('ecommerc') || lower.includes('store')) {
    return `## The Problem
Small businesses struggle to stand out online because marketplace platforms commoditize their products and offer limited tools for brand differentiation.

## User Needs & Pain Points
- Business owners want a unique brand presence but lack design and development resources
- Marketplace fees eat into already tight margins
- Managing inventory across multiple sales channels is manual and error-prone

## Proposed Solution
A lightweight e-commerce platform designed for independent brands — combining beautiful, customizable storefronts with simple inventory management and built-in marketing tools.

## How It Works
- **Visual store builder** uses AI to generate a branded storefront from product photos and copy
- **Multi-channel sync** connects inventory across your own store, social platforms, and marketplaces
- **Smart insights** surface which products are trending and recommend pricing adjustments
- **One-click campaigns** let you create and launch promotions in minutes

## Success Metrics
- Average store setup time reduced from weeks to under 2 hours
- 30% increase in average order value through AI-driven product recommendations
- 50% reduction in inventory management time through multi-channel sync

## Next Steps
1. Audit existing e-commerce tools for gaps and integration opportunities
2. Design the store builder wizard and test with 5 small business owners
3. Build the MVP focusing on storefront + single-channel inventory first`;
  }

  // Default generic response
  return DEMO_RESPONSES[0];
}

export function initPrescription() {
  const section = document.getElementById('rx-tool');

  section.innerHTML = `
    <div class="rx-bg"></div>
    <div class="rx-container">
      <div class="rx-header reveal">
        <div class="section-label">AI Tool — Live Demo</div>
        <h2 class="section-title">
          Design Idea<br/><span>Refiner.</span>
        </h2>
        <p style="color:var(--gray-500); font-size:1rem; max-width:52ch; line-height:1.7; margin-top:1rem;">
          Paste a rough design idea below and watch it transform into a structured 
          design brief — problem, users, solution, and metrics. No API key needed.
        </p>
      </div>

      <div class="rx-grid reveal reveal-delay-2">

        <!-- INPUT PANEL -->
        <div class="rx-panel" id="rx-input-panel">
          <div class="rx-panel-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.2"/>
              <path d="M4 5h6M4 7h6M4 9h4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            Your Design Idea
          </div>
          <textarea
            class="rx-textarea"
            id="rx-textarea"
            placeholder="Paste your rough design idea here...&#10;&#10;Example: I want an app that helps people find local volunteer opportunities based on their skills and availability."
            spellcheck="false"
            aria-label="Design idea text input"
          ></textarea>
          <div class="rx-sample-hint">
            Need inspiration? 
            <button id="rx-sample-btn" type="button">Load a sample idea</button>
          </div>

          <button class="rx-analyze-btn" id="rx-analyze-btn" type="button">
            <span class="btn-spinner"></span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3v3l2 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
            Refine Idea
          </button>

          <div class="rx-api-note">
            ✦ This is a simulated demo. Each idea generates a pre-crafted design brief based on keywords.
          </div>
        </div>

        <!-- OUTPUT PANEL -->
        <div class="rx-panel" id="rx-output-panel">
          <div class="rx-panel-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9.5l-3 1.5.5-3.5L2 5l3.5-.5L7 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            </svg>
            Refined Design Brief
          </div>

          <div class="rx-output-empty" id="rx-empty">
            <p>Your refined design brief will<br/>appear here after analysis.</p>
          </div>

          <div class="rx-skeleton" id="rx-skeleton">
            <div class="rx-skeleton-label">
              <span class="btn-spinner" style="display:inline-block; border-color:rgba(255,255,255,0.1); border-top-color:var(--gray-500);"></span>
              Refining your idea…
            </div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
          </div>

          <div class="rx-error" id="rx-error"></div>

          <div class="rx-output-content" id="rx-output">
            <div class="rx-output-text cursor-blink" id="rx-output-text"></div>
            <div class="rx-output-actions" id="rx-output-actions" style="display:none;">
              <button class="rx-action-btn copy" id="rx-copy-btn" type="button">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
                  <path d="M1 9V2a1 1 0 011-1h7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
                Copy Result
              </button>
              <button class="rx-action-btn reset" id="rx-reset-btn" type="button">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5A4.5 4.5 0 0 1 10.5 3M11 6.5A4.5 4.5 0 0 1 2.5 10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M10.5 1.5V3H9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.5 11.5V10H4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Start Over
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  const textarea = document.getElementById('rx-textarea');
  const analyzeBtn = document.getElementById('rx-analyze-btn');
  const sampleBtn = document.getElementById('rx-sample-btn');
  const emptyEl = document.getElementById('rx-empty');
  const skeletonEl = document.getElementById('rx-skeleton');
  const errorEl = document.getElementById('rx-error');
  const outputEl = document.getElementById('rx-output');
  const outputText = document.getElementById('rx-output-text');
  const outputActions = document.getElementById('rx-output-actions');
  const copyBtn = document.getElementById('rx-copy-btn');
  const resetBtn = document.getElementById('rx-reset-btn');

  let fullText = '';
  let isStreaming = false;
  let streamTimer = null;
  let hasEverGenerated = false;

  function setState(state) {
    emptyEl.classList.remove('visible');
    skeletonEl.classList.remove('visible');
    errorEl.classList.remove('visible');
    outputEl.classList.remove('visible');

    if (state === 'empty') emptyEl.classList.add('visible');
    else if (state === 'clean') {}
    else if (state === 'loading') skeletonEl.classList.add('visible');
    else if (state === 'error') errorEl.classList.add('visible');
    else if (state === 'output') outputEl.classList.add('visible');
  }

  setState('empty');

  sampleBtn.addEventListener('click', () => {
    textarea.value = SAMPLE_IDEA;
    textarea.dispatchEvent(new Event('input'));
    textarea.focus();
  });

  function streamText(text, onChunk, onDone) {
    let index = 0;
    const charsPerTick = 3;

    function tick() {
      if (!isStreaming) return;
      const chunk = text.slice(index, index + charsPerTick);
      if (chunk) {
        onChunk(chunk);
        index += charsPerTick;
        streamTimer = setTimeout(tick, 30);
      } else {
        onDone();
      }
    }

    tick();
  }

  analyzeBtn.addEventListener('click', () => {
    if (isStreaming) return;

    const idea = textarea.value.trim();
    if (!idea) {
      textarea.focus();
      return;
    }

    isStreaming = true;
    analyzeBtn.disabled = true;
    analyzeBtn.classList.add('loading');
    analyzeBtn.querySelector('.btn-spinner').style.display = 'inline-block';
    analyzeBtn.childNodes[analyzeBtn.childNodes.length - 1].textContent = ' Refining…';
    setState('loading');

    fullText = '';
    outputText.textContent = '';
    outputText.classList.add('cursor-blink');
    outputActions.style.display = 'none';

    const response = generateResponse(idea);

    setTimeout(() => {
      if (!isStreaming) return;
      setState('output');
      streamText(
        response,
        (chunk) => {
          fullText += chunk;
          outputText.innerHTML = renderMarkdown(fullText);
        },
        () => {
          isStreaming = false;
          hasEverGenerated = true;
          analyzeBtn.disabled = false;
          analyzeBtn.classList.remove('loading');
          analyzeBtn.querySelector('.btn-spinner').style.display = 'none';
          analyzeBtn.childNodes[analyzeBtn.childNodes.length - 1].textContent = ' Refine Idea';
          outputText.classList.remove('cursor-blink');
          outputActions.style.display = 'flex';
        }
      );
    }, 800);
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      copyBtn.textContent = '✓ Copied!';
      setTimeout(() => { copyBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M1 9V2a1 1 0 011-1h7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg> Copy Result`; }, 2000);
    } catch {
      copyBtn.textContent = 'Copy failed';
    }
  });

  resetBtn.addEventListener('click', () => {
    isStreaming = false;
    clearTimeout(streamTimer);
    textarea.value = '';
    fullText = '';
    outputText.textContent = '';
    outputActions.style.display = 'none';
    setState(hasEverGenerated ? 'clean' : 'empty');
    analyzeBtn.disabled = false;
  });
}

function renderMarkdown(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^## (.+)$/gm, '<h4>$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    .replace(/^(?!<h4|<ul|<\/p|<p)(.+)/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
}
