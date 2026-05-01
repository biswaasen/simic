<script>
  const stats = [
    { value: '10,000+', label: 'Workflows Executed' },
    { value: '$2.4B', label: 'Pipeline Influenced' },
    { value: '99.97%', label: 'Uptime SLA' },
    { value: '<100ms', label: 'Inference Latency' },
    { value: '40+', label: 'Native Integrations' },
    { value: '6x', label: 'Avg Team Leverage' },
  ];
</script>

<section class="proof" id="insights">
  <div class="inner">
    <span class="label">// PROOF</span>
    <p class="headline">
      Enterprise-grade infrastructure.<br />Startup-grade velocity.
    </p>
    <div class="grid">
      {#each stats as s}
        <div class="stat">
          <span class="value">{s.value}</span>
          <span class="stat-label">{s.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .proof {
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
  .headline {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    letter-spacing: -1.5px;
    color: var(--text);
    line-height: 1.1;
    margin: 0 0 72px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1px;
    background: var(--border);
  }
  .stat {
    background: #080808;
    padding: 36px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .value {
    font-size: clamp(26px, 3vw, 38px);
    font-weight: 800;
    color: var(--text);
    letter-spacing: -1px;
    font-family: var(--mono);
    line-height: 1;
  }
  .stat-label {
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: var(--mono);
    line-height: 1.5;
  }
  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 600px) {
    .proof {
      padding: 80px 24px;
    }
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
