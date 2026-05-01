<script>
  const nots = [
    { label: 'Not Zapier.', desc: "We don't wire triggers. We architect autonomous systems with no logic trees to maintain." },
    { label: 'Not ChatGPT wrappers.', desc: "We don't wrap an LLM in UI. We build goal-driven execution engines with measurable outcomes." },
    { label: 'Not no-code.', desc: "We don't give you a canvas to drag and drop. We deliver a system that builds itself." },
  ];
</script>

<section class="diff">
  <div class="inner">
    <div class="head">
      <span class="label">// CATEGORY</span>
      <h2>
        A new <em>category</em>.<br />Nothing before compares.
      </h2>
    </div>

    <div class="list">
      {#each nots as n (n.label)}
        <div class="row">
          <span class="x">✕</span>
          <div class="row-content">
            <h3>{n.label}</h3>
            <p>{n.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="we-are">
      <span class="we-label">// WHAT WE ARE</span>
      <p class="statement">
        An autonomous business operating <em>layer</em>. You define the
        outcome. Simic runs the company.
      </p>
    </div>
  </div>
</section>

<style>
  .diff { padding: 0 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .head { margin-bottom: 56px; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95; letter-spacing: -2.5px; color: var(--ink); }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .list {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); overflow: hidden;
  }
  .row {
    display: flex; gap: 28px; align-items: flex-start;
    padding: 36px 32px; border-bottom: 1px solid var(--border);
    transition: background 0.2s;
  }
  .row:last-child { border-bottom: none; }
  .row:hover { background: var(--surface-2); }
  .x { font-size: 18px; color: var(--muted-2); min-width: 24px; margin-top: 4px; }
  h3 { font-family: var(--font-mono); font-size: 24px; font-weight: 500; letter-spacing: -0.8px; color: var(--ink); margin-bottom: 6px; }
  .row p { font-size: 15px; color: var(--muted); line-height: 1.6; max-width: 640px; }
  .we-are { margin-top: 16px; padding: 48px 40px; background: var(--ink); color: #fff; border-radius: var(--radius); }
  .we-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); display: block; margin-bottom: 20px; }
  .statement { font-family: var(--font-mono); font-weight: 500; font-size: clamp(24px, 3vw, 40px); line-height: 1.2; letter-spacing: -1px; color: #fff; }
  .statement em { font-family: var(--font-serif); font-style: italic; font-weight: 400; color: #fff; }
  @media (max-width: 768px) {
    .diff { padding: 0 20px 80px; }
    .row { padding: 28px 20px; flex-direction: column; gap: 12px; }
    .we-are { padding: 32px 24px; }
  }
</style>
