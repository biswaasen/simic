<script>
  const stats = [
    { value: '10K+',    label: 'Workflows Executed',  size: 'lg' },
    { value: '$2.4B',   label: 'Pipeline Influenced', size: 'sm', dark: true },
    { value: '99.97',   suffix: '%', label: 'Uptime SLA',       size: 'sm' },
    { value: '<100',    suffix: 'ms', label: 'Inference Latency', size: 'sm' },
    { value: '6x',      label: 'Avg Team Leverage',   size: 'sm', dark: true },
    { value: '40+',     label: 'Native Integrations', size: 'sm' },
  ];
</script>

<section class="proof" id="proof">
  <div class="inner">
    <div class="head">
      <span class="label">// PROOF</span>
      <h2>
        Enterprise infra.<br /><em>Startup</em> velocity.
      </h2>
    </div>

    <div class="bento">
      {#each stats as s (s.label)}
        <article class="cell" class:dark={s.dark} class:lg={s.size === 'lg'}>
          <span class="cell-label">// {s.label.toUpperCase()}</span>
          <div class="value">
            {s.value}{#if s.suffix}<span class="suffix">{s.suffix}</span>{/if}
          </div>
          <span class="cell-foot">{s.label}</span>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .proof { padding: 0 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .head { margin-bottom: 56px; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95; letter-spacing: -2.5px; color: var(--ink); }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .bento { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .cell {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 28px;
    display: flex; flex-direction: column; gap: 12px;
    min-height: 220px; transition: border-color 0.2s, transform 0.2s;
  }
  .cell:hover { border-color: var(--border-strong); transform: translateY(-2px); }
  .lg { grid-column: span 2; }
  .dark { background: var(--ink); color: #fff; border-color: var(--ink); }
  .cell-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px; color: var(--muted-2); text-transform: uppercase; }
  .dark .cell-label { color: rgba(255,255,255,0.5); }
  .value {
    font-family: var(--font-mono); font-weight: 500;
    font-size: clamp(48px, 6vw, 80px); letter-spacing: -3px;
    line-height: 1; margin-top: auto; color: var(--ink);
  }
  .dark .value { color: #fff; }
  .lg .value { font-size: clamp(72px, 9vw, 132px); }
  .suffix {
    font-family: var(--font-serif); font-style: italic; font-weight: 400;
    font-size: 0.55em; margin-left: 2px; letter-spacing: 0;
  }
  .cell-foot { font-size: 13px; color: var(--muted); }
  .dark .cell-foot { color: rgba(255,255,255,0.55); }
  @media (max-width: 900px) {
    .bento { grid-template-columns: 1fr 1fr; }
    .lg { grid-column: span 2; }
    .proof { padding: 0 20px 80px; }
  }
</style>
