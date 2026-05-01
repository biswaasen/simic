<script>
  const items = [
    'ENTERPRISE-GRADE INFRASTRUCTURE',
    '10,000+ WORKFLOWS EXECUTED',
    'SOC2-READY ARCHITECTURE',
    'SUB-100MS INFERENCE',
    'ZERO MANUAL HANDOFFS',
    'AUTONOMOUS PIPELINE EXECUTION',
    'GOAL-DRIVEN INTELLIGENCE',
    'CONTINUOUS OPERATION',
  ];
</script>

<div class="ticker-wrap">
  <div class="track">
    {#each [...items, ...items] as item}
      <span class="item">{item}<span class="sep"> // </span></span>
    {/each}
  </div>
</div>

<style>
  .ticker-wrap {
    overflow: hidden;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: #080808;
    padding: 14px 0;
  }
  .track {
    display: flex;
    width: max-content;
    animation: scroll 32s linear infinite;
  }
  .item {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 2.5px;
    color: var(--muted);
    white-space: nowrap;
    padding: 0 4px;
  }
  .sep {
    color: var(--border-bright);
  }
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>
