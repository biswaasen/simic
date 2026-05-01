<script>
  const cases = [
    { tag: 'Lead Generation', title: 'Acquire without a sales team.', body: 'Agents identify, enrich, outreach, and qualify — on a continuous loop.', metric: '3x pipeline velocity', dark: true },
    { tag: 'Sales Automation', title: 'Close more. Manage less.', body: 'CRM, follow-ups, proposals — automated end to end.', metric: '80% less rep overhead' },
    { tag: 'Ops Workflows', title: 'Replace your operations stack.', body: 'Procurement, onboarding, reporting — modeled as agents.', metric: '6 FTEs of throughput' },
    { tag: 'Data → Decisions', title: 'Intelligence on every metric.', body: 'Raw data in. Insights, anomalies, actions out. For operators.', metric: 'Real-time decisions', dark: true },
  ];
</script>

<section class="cases" id="cases">
  <div class="inner">
    <div class="head">
      <span class="label">// USE CASES</span>
      <h2>What it <em>replaces</em>.</h2>
      <p class="lead">
        Four categories. Same architecture. Each one would normally require a
        team of operators — Simic runs them as a single autonomous system.
      </p>
    </div>

    <div class="grid">
      {#each cases as c}
        <article class="card" class:dark={c.dark}>
          <div class="card-top">
            <span class="tag">{c.tag}</span>
            <span class="arrow">↗</span>
          </div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          <div class="metric">
            <span class="metric-label">// IMPACT</span>
            <span class="metric-value">{c.metric}</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .cases { padding: 0 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .head { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 56px; align-items: end; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; grid-column: 1 / -1; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95; letter-spacing: -2.5px; color: var(--ink); }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .lead { font-size: 16px; color: var(--muted); line-height: 1.65; padding-bottom: 12px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 32px;
    display: flex; flex-direction: column; gap: 16px; min-height: 280px;
    transition: border-color 0.2s, transform 0.2s;
  }
  .card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
  .dark { background: var(--ink); color: #fff; border-color: var(--ink); }
  .card-top { display: flex; align-items: center; justify-content: space-between; }
  .tag { font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px; color: var(--muted); padding: 5px 12px; border: 1px solid var(--border); border-radius: 999px; text-transform: uppercase; }
  .dark .tag { color: rgba(255,255,255,0.65); border-color: rgba(255,255,255,0.18); }
  .arrow { width: 36px; height: 36px; border-radius: 50%; background: var(--surface-2); display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--ink); }
  .dark .arrow { background: #fff; color: var(--ink); }
  h3 { font-size: 28px; font-weight: 500; letter-spacing: -1px; line-height: 1.1; margin-top: 12px; font-family: var(--font-mono); }
  .card p { font-size: 14.5px; color: var(--muted); line-height: 1.6; }
  .dark p { color: rgba(255,255,255,0.7); }
  .metric { display: flex; flex-direction: column; gap: 4px; padding-top: 16px; margin-top: auto; border-top: 1px solid var(--border); }
  .dark .metric { border-color: rgba(255,255,255,0.12); }
  .metric-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px; color: var(--muted-2); }
  .dark .metric-label { color: rgba(255,255,255,0.45); }
  .metric-value { font-size: 16px; font-weight: 500; }
  @media (max-width: 800px) { .head { grid-template-columns: 1fr; gap: 32px; } .grid { grid-template-columns: 1fr; } .cases { padding: 0 20px 80px; } }
</style>
