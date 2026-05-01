<script>
  const steps = [
    {
      num: '01',
      label: 'INPUT',
      title: 'Define your goal.',
      body: 'State a business objective in plain language. No config files. No flowcharts. One input.',
    },
    {
      num: '02',
      label: 'PLAN',
      title: 'System architects itself.',
      body: 'The agent decomposes your goal into an executable strategy. Workflows, dependencies, tools — mapped automatically.',
    },
    {
      num: '03',
      label: 'EXECUTE',
      title: 'Pipelines run end to end.',
      body: 'Agents build and trigger pipelines. Integrations connect. Data flows. Actions execute. No human in the loop.',
    },
    {
      num: '04',
      label: 'IMPROVE',
      title: 'The system learns.',
      body: 'Outcomes are measured. Failures are diagnosed. The architecture adapts. Every cycle outperforms the last.',
    },
  ];
</script>

<section class="how" id="how">
  <div class="inner">
    <span class="label">// HOW IT WORKS</span>
    <h2>Autonomous by design.</h2>
    <div class="steps">
      {#each steps as s, i}
        <div class="step">
          <div class="step-top">
            <span class="num">{s.num}</span>
            <span class="step-label">{s.label}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          {#if i < steps.length - 1}
            <span class="arrow">→</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .how {
    background: #080808;
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
  .steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
  }
  .step {
    background: #080808;
    padding: 36px 28px;
    position: relative;
  }
  .step-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
  .num {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--border-bright);
  }
  .step-label {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--muted);
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 12px;
    letter-spacing: -0.5px;
  }
  p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.75;
    margin: 0;
  }
  .arrow {
    position: absolute;
    top: 36px;
    right: -10px;
    color: var(--border-bright);
    font-size: 14px;
    z-index: 1;
  }
  @media (max-width: 900px) {
    .how {
      padding: 80px 24px;
    }
    .steps {
      grid-template-columns: 1fr 1fr;
    }
    .arrow {
      display: none;
    }
  }
  @media (max-width: 560px) {
    .steps {
      grid-template-columns: 1fr;
    }
  }
</style>
