<section class="hero">
  <div class="card">
    <img class="bg" src="/hero_background.avif" alt="" />
    <div class="grade"></div>

    <div class="content enter">
      <h1>
        Build the <em>system</em><br />that runs your business.
      </h1>

      <div class="row">
        <p>
          Simic is an autonomous AI platform that turns business goals into
          working systems — planning workflows, building pipelines, and
          executing continuously.
        </p>
        <div class="actions">
          <a href="#demo" class="btn-primary">Book Demo</a>
          <a href="#how" class="btn-ghost">See architecture →</a>
        </div>
      </div>
    </div>

    <div class="floor">
      <div class="trust">
        <span class="trust-num">2,400+</span>
        <span class="trust-label">deployments running on Simic infrastructure</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero { padding: 10px 10px 10px; background: var(--bg); }
  .card {
    position: relative; isolation: isolate; overflow: hidden;
    background: #0a0a0a; color: #fff;
    border-radius: 28px;
    min-height: calc(100vh - 20px);
    padding: 160px 32px 48px;
    display: flex; flex-direction: column;
  }
  .bg {
    position: absolute; left: 0; right: 0; bottom: 0;
    width: 100%; height: 75%; object-fit: cover; object-position: center 35%;
    z-index: 0; opacity: 0.85;
    will-change: transform;
    -webkit-mask-image: linear-gradient(to top, #000 55%, transparent 100%);
    mask-image: linear-gradient(to top, #000 55%, transparent 100%);
  }
  .grade {
    position: absolute; inset: 0; z-index: 1; pointer-events: none;
    background: radial-gradient(ellipse 80% 50% at 50% 110%, rgba(255,200,140,0.18) 0%, transparent 60%);
  }
  .content { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; }
  .enter > * {
    animation: enterUp 1s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }
  .enter > *:nth-child(1) { animation-delay: 0.1s; }
  .enter > *:nth-child(2) { animation-delay: 0.25s; }
  @keyframes enterUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  h1 {
    font-family: var(--font-sans); font-weight: 500;
    font-size: clamp(48px, 7.5vw, 124px); line-height: 0.95;
    letter-spacing: -3px; color: #fff;
  }
  h1 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; letter-spacing: -2px; }
  .row { display: flex; flex-direction: column; gap: 28px; margin-top: 32px; align-items: flex-start; }
  .row p { font-size: 16px; line-height: 1.6; color: rgba(255,255,255,0.7); max-width: 540px; }
  .actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center;
    padding: 13px 22px; background: #fff; color: var(--ink);
    border-radius: 999px; font-size: 14px; font-weight: 500;
  }
  .btn-ghost {
    padding: 13px 22px; color: #fff; font-size: 14px; font-weight: 500;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(12px); border-radius: 999px;
  }
  .floor {
    position: relative; z-index: 2; max-width: 1280px; margin: auto auto 0;
    width: 100%; padding-top: 96px;
    display: flex; align-items: end; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  }
  .trust { display: flex; flex-direction: column; gap: 2px; max-width: 360px; }
  .trust-num { font-family: var(--font-mono); font-size: 13px; color: #fff; letter-spacing: 0.5px; }
  .trust-label { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.5; }
  @media (max-width: 800px) { .card { padding: 90px 20px 40px; border-radius: 24px; } .row { grid-template-columns: 1fr; gap: 28px; } .actions { justify-content: flex-start; } .floor { padding-top: 56px; } }
</style>
