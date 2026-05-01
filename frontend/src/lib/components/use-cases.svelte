<script>
  const cases = [
    {
      tag: 'Lead Generation',
      title: 'Acquire without a sales team.',
      body: 'Agents identify prospects, enrich profiles, trigger outreach, and qualify leads — on a continuous loop.',
      metric: '3x pipeline velocity',
    },
    {
      tag: 'Sales Automation',
      title: 'Close more. Manually do less.',
      body: 'CRM updates, follow-up sequencing, proposal generation. Your revenue motion, automated end to end.',
      metric: '80% less rep overhead',
    },
    {
      tag: 'Ops Workflows',
      title: 'Replace your operations stack.',
      body: 'Procurement, onboarding, reporting, escalation routing — modeled as agent workflows that run without you.',
      metric: '6 FTEs of throughput',
    },
    {
      tag: 'Data → Decisions',
      title: 'Intelligence on every metric.',
      body: 'Raw data in. Insights, anomaly detection, and recommended actions out. Built for operators, not analysts.',
      metric: 'Real-time decision loop',
    },
  ];
</script>

<section class="cases" id="works">
  <div class="inner">
    <span class="label">// USE CASES</span>
    <h2>What it replaces.</h2>
    <div class="grid">
      {#each cases as c}
        <div class="card">
          <span class="tag">{c.tag}</span>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          <span class="metric">{c.metric}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .cases {
    background: var(--surface);
    padding: 120px 48px;
    border-top: 1px solid var(--border);
  }
  .inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .label {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--muted);
    display: block;
    margin-bottom: 24px;
  }
  h2 {
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 800;
    letter-spacing: -2px;
    color: var(--text);
    margin: 0 0 72px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--border);
  }
  .card {
    background: var(--surface);
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: background 0.2s;
  }
  .card:hover {
    background: #111111;
  }
  .tag {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--muted);
    text-transform: uppercase;
  }
  h3 {
    font-size: 22px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.5px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.75;
    margin: 0;
    flex: 1;
  }
  .metric {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
    letter-spacing: 1px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }
  @media (max-width: 768px) {
    .cases {
      padding: 80px 24px;
    }
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
