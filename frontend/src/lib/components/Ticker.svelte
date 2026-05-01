<script>
  const items = [
    'ENTERPRISE INFRASTRUCTURE',
    '10K+ WORKFLOWS EXECUTED',
    'SOC2 READY',
    'SUB-100MS INFERENCE',
    'ZERO HANDOFFS',
    'AUTONOMOUS PIPELINES',
    'GOAL-DRIVEN AGENTS',
    'CONTINUOUS OPERATION',
  ];
</script>

<div class="ticker-wrap">
  <div class="track">
    {#each [...items, ...items] as item, i (`${item}-${i}`)}
      <span class="item">
        <span class="bullet">◆</span>
        {item}
      </span>
    {/each}
  </div>
</div>

<style>
  .ticker-wrap {
    position: relative;
    overflow: hidden;
    background: var(--bg);
    padding: 22px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .track {
    display: flex;
    width: max-content;
    animation: scroll 40s linear infinite;
    gap: 40px;
  }
  .item {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--ink);
    white-space: nowrap;
  }
  .bullet { color: var(--muted-2); font-size: 8px; }
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>
