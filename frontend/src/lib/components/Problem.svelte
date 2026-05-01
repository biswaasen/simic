<script>
  const problems = [
    { num: '01', title: 'Fragmented tooling.', body: 'The average $10M company runs 14 disconnected SaaS tools. Nothing talks to anything.' },
    { num: '02', title: 'Manual everything.', body: 'Operators spend 60% of their time managing process. A structural tax on growth.' },
    { num: '03', title: 'No system. Just chaos.', body: 'Spreadsheets, Slack threads, tribal knowledge. One key departure degrades everything.' },
  ];
</script>

<section class="problem" id="problem">
  <div class="inner">
    <div class="head">
      <span class="label">// THE PROBLEM</span>
      <h2>
        Operations are<br /><em>structurally</em> broken.
      </h2>
      <p class="lead">
        Most companies scaling from $1M to $50M share the same infrastructure —
        disconnected tools, manual handoffs, and teams managing process instead
        of executing.
      </p>
    </div>
    <div class="grid">
      {#each problems as p (p.num)}
        <article class="card">
          <span class="num">{p.num}</span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .problem { padding: 120px 24px; background: var(--bg); }
  .inner { max-width: 1180px; margin: 0 auto; }
  .head { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 80px; align-items: end; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; grid-column: 1 / -1; }
  h2 {
    font-family: var(--font-mono); font-weight: 500;
    font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95;
    letter-spacing: -2.5px; color: var(--ink);
  }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .lead { font-size: 17px; color: var(--muted); line-height: 1.6; padding-bottom: 12px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 32px;
    display: flex; flex-direction: column; gap: 14px;
    transition: border-color 0.2s, transform 0.2s;
  }
  .card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
  .num { font-family: var(--font-mono); font-size: 11px; color: var(--muted-2); letter-spacing: 1.5px; }
  h3 { font-size: 22px; font-weight: 500; color: var(--ink); letter-spacing: -0.5px; line-height: 1.2; }
  .card p { font-size: 14px; color: var(--muted); line-height: 1.65; }
  @media (max-width: 900px) {
    .head { grid-template-columns: 1fr; gap: 32px; }
    .grid { grid-template-columns: 1fr; }
    .problem { padding: 80px 20px; }
  }
</style>
