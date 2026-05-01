<script>
  const problems = [
    {
      num: '01',
      title: 'Fragmented tooling.',
      body: 'The average $10M company runs 14 disconnected SaaS tools. Nothing talks to each other. Data rots in silos.',
    },
    {
      num: '02',
      title: 'Manual everything.',
      body: 'Your best operators spend 60% of their time managing process, not executing. That is a structural tax on your growth.',
    },
    {
      num: '03',
      title: 'No system. Just chaos.',
      body: 'Spreadsheets, Slack threads, tribal knowledge. When a key person leaves, the whole operation degrades.',
    },
  ];
</script>

<section class="problem" id="problem">
  <div class="inner">
    <span class="label">// THE PROBLEM</span>
    <h2>Your operations are<br />structurally broken.</h2>
    <p class="lead">
      Most companies scaling from $1M to $50M share the same infrastructure:
      disconnected tools, manual handoffs, and teams that manage process instead
      of executing.
    </p>
    <div class="grid">
      {#each problems as p}
        <div class="card">
          <span class="num">{p.num}</span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .problem {
    background: #080808;
    padding: 120px 48px;
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
    margin: 0 0 24px;
    line-height: 1.05;
  }
  .lead {
    font-size: 16px;
    color: var(--muted);
    max-width: 600px;
    line-height: 1.75;
    margin: 0 0 72px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
  }
  .card {
    background: #080808;
    padding: 40px 36px;
  }
  .num {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--border-bright);
    display: block;
    margin-bottom: 24px;
  }
  h3 {
    font-size: 20px;
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
  @media (max-width: 900px) {
    .problem {
      padding: 80px 24px;
    }
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
