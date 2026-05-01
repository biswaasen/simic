<script>
  const steps = [
    { num: '01', tag: 'INPUT',   title: 'Define a goal.',          body: 'State a business outcome in plain language. No flowcharts. One input.' },
    { num: '02', tag: 'PLAN',    title: 'System self-architects.', body: 'The agent decomposes intent into an executable strategy automatically.' },
    { num: '03', tag: 'EXECUTE', title: 'Pipelines run live.',     body: 'Integrations connect, data flows, actions execute. No human in the loop.' },
    { num: '04', tag: 'IMPROVE', title: 'Architecture adapts.',    body: 'Outcomes are measured, failures diagnosed, the system learns continuously.' },
  ];
</script>

<section class="how" id="how">
  <div class="inner">
    <div class="head">
      <span class="label">// HOW IT WORKS</span>
      <h2><em>Autonomous</em> by design.</h2>
    </div>

    <div class="track">
      {#each steps as s, i}
        <article class="step">
          <div class="top">
            <span class="num">{s.num}</span>
            <span class="tag">{s.tag}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          {#if i < steps.length - 1}<span class="arrow">→</span>{/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .how { padding: 0 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .head { margin-bottom: 56px; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95; letter-spacing: -2.5px; color: var(--ink); }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .track {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  }
  .step {
    position: relative;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 28px;
    display: flex; flex-direction: column; gap: 14px; min-height: 220px;
    transition: border-color 0.2s, transform 0.2s;
  }
  .step:hover { border-color: var(--border-strong); transform: translateY(-2px); }
  .top { display: flex; justify-content: space-between; align-items: center; }
  .num { font-family: var(--font-mono); font-size: 13px; color: var(--ink); letter-spacing: 1px; }
  .tag {
    font-family: var(--font-mono); font-size: 10px; color: var(--muted);
    letter-spacing: 1.5px; padding: 4px 10px; border: 1px solid var(--border);
    border-radius: 999px;
  }
  h3 { font-size: 22px; font-weight: 500; color: var(--ink); letter-spacing: -0.5px; line-height: 1.2; margin-top: 12px; }
  p { font-size: 13.5px; color: var(--muted); line-height: 1.65; }
  .arrow {
    position: absolute; top: 28px; right: -16px;
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--bg); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: var(--muted); font-size: 12px; z-index: 1;
  }
  @media (max-width: 1000px) { .track { grid-template-columns: 1fr 1fr; } .arrow { display: none; } }
  @media (max-width: 600px) { .track { grid-template-columns: 1fr; } .how { padding: 0 20px 80px; } }
</style>
