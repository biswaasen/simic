<section class="solution" id="solution">
  <div class="inner">
    <div data-reveal>
      <span class="label">// THE SOLUTION</span>
      <h2>
        Not software. Not SaaS.<br />
        A <em>system</em>.
      </h2>
    </div>

    <div class="bento" data-reveal-stagger>
      <article class="cell big dark">
        <div class="cell-top">
          <span class="cell-label">// CATEGORY</span>
        </div>
        <h3>An autonomous operating layer.</h3>
        <p>You define the goal. Simic plans, builds, integrates, and runs.</p>
        <div class="render">
          <div class="render-dot"></div>
          <div class="render-line"></div>
          <div class="render-line short"></div>
          <div class="render-line"></div>
        </div>
      </article>

      <article class="cell">
        <span class="cell-label">// 01</span>
        <h4>Goal-driven</h4>
        <p>State an outcome. The system decomposes it into executable strategy.</p>
      </article>

      <article class="cell">
        <span class="cell-label">// 02</span>
        <h4>Self-building</h4>
        <p>Pipelines, integrations, and infra assemble automatically.</p>
      </article>

      <article class="cell wide">
        <span class="cell-label">// 03</span>
        <h4>Continuous execution</h4>
        <p>Agents run forever. Outcomes are measured and architecture adapts.</p>
        <div class="loop">
          <span>PLAN</span><span class="arr">→</span>
          <span>BUILD</span><span class="arr">→</span>
          <span>EXECUTE</span><span class="arr">→</span>
          <span>LEARN</span>
        </div>
      </article>
    </div>
  </div>
</section>

<style>
  .solution { padding: 40px 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted); display: block; margin-bottom: 24px; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 5.5vw, 84px); line-height: 0.95; letter-spacing: -2.5px; color: var(--ink); margin-bottom: 56px; }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(220px, auto); gap: 16px; }
  .cell { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, transform 0.2s; }
  .cell:hover { border-color: var(--border-strong); transform: translateY(-2px); }
  .big { grid-column: span 1; grid-row: span 2; }
  .wide { grid-column: span 2; }
  .dark { background: var(--ink); color: #fff; border-color: var(--ink); }
  .dark .cell-label { color: rgba(255,255,255,0.5); }
  .dark p { color: rgba(255,255,255,0.65); }
  .cell-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px; color: var(--muted-2); text-transform: uppercase; }
  .cell-top { display: flex; justify-content: space-between; align-items: center; }
  h3 { font-family: var(--font-mono); font-weight: 500; font-size: 32px; letter-spacing: -1px; line-height: 1.05; margin-top: auto; }
  h4 { font-size: 22px; font-weight: 500; letter-spacing: -0.5px; color: var(--ink); }
  .cell p { font-size: 14px; color: var(--muted); line-height: 1.6; }
  .render { margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-sm); display: flex; flex-direction: column; gap: 8px; }
  .render-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
  .render-line { height: 6px; background: rgba(255,255,255,0.12); border-radius: 999px; }
  .render-line.short { width: 60%; }
  .loop { margin-top: auto; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; font-family: var(--font-mono); font-size: 11px; color: var(--ink); letter-spacing: 1.5px; padding-top: 12px; }
  .loop .arr { color: var(--muted-2); }
  @media (max-width: 900px) { .bento { grid-template-columns: 1fr; } .big, .wide { grid-column: span 1; grid-row: auto; } .solution { padding: 20px 20px 80px; } }
</style>
