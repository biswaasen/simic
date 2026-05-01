<section class="hero">
  <img class="bg" src="/hero_background.avif" alt="" />
  <div class="shade"></div>

  <div class="inner">
    <span class="pill">
      <span class="live"></span>
      v4.0 // Autonomous Intelligence Platform
    </span>

    <h1>
      <span class="line">Build the</span>
      <span class="line"><em>system</em>.</span>
    </h1>

    <p class="sub">
      Simic is an autonomous AI platform that turns business goals into
      working systems — planning, building, integrating, and executing.
    </p>

    <div class="actions">
      <a href="#demo" class="btn-primary">
        <span class="dot"></span>
        Book Demo
      </a>
      <a href="#how" class="btn-ghost">See architecture →</a>
    </div>
  </div>

  <div class="footer">
    <div class="footer-inner">
      <div class="trust">
        <span class="trust-num">2,400+</span>
        <span class="trust-label">active deployments running on Simic infrastructure today.</span>
      </div>
      <div class="badge">
        <span class="badge-title">Simic Engine</span>
        <span class="badge-sub">// Model v4.0</span>
        <span class="badge-arrow">→</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero { position: relative; min-height: 100vh; overflow: hidden; padding: 140px 24px 0; display: flex; flex-direction: column; }
  .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
  .shade {
    position: absolute; inset: 0; z-index: 1;
    background:
      linear-gradient(to right, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
  .inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; flex: 1; display: flex; flex-direction: column; justify-content: center; padding-bottom: 60px; }
  .pill {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 7px 14px 7px 12px; background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border); border-radius: 999px;
    font-family: var(--font-mono); font-size: 11px;
    color: var(--muted); letter-spacing: 0.5px; margin-bottom: 32px; align-self: flex-start;
  }
  .live { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 4px rgba(34,197,94,.18); }
  h1 {
    font-family: var(--font-mono); font-weight: 500;
    font-size: clamp(64px, 11vw, 168px); line-height: 0.92;
    letter-spacing: -4px; color: var(--ink); margin-bottom: 32px;
  }
  h1 .line { display: block; }
  h1 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; letter-spacing: -2px; color: var(--ink); }
  .sub { font-size: 18px; line-height: 1.55; color: var(--ink-2); max-width: 540px; margin-bottom: 40px; font-weight: 400; }
  .actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 22px 14px 16px; background: var(--ink); color: #fff;
    border-radius: 999px; font-size: 14px; font-weight: 500;
    transition: transform 0.2s; box-shadow: 0 8px 24px -8px rgba(0,0,0,0.3);
  }
  .btn-primary:hover { transform: translateY(-1px); }
  .btn-primary .dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; }
  .btn-ghost {
    padding: 14px 22px; color: var(--ink); font-size: 14px; font-weight: 500;
    background: rgba(255,255,255,0.7); border: 1px solid var(--border);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border-radius: 999px; transition: background 0.2s;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.9); }
  .footer { position: relative; z-index: 2; padding: 0 0 28px; }
  .footer-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .trust { display: flex; flex-direction: column; gap: 4px; max-width: 360px; color: #fff; }
  .trust-num { font-family: var(--font-mono); font-size: 13px; font-weight: 500; letter-spacing: 0.5px; }
  .trust-label { font-size: 13px; line-height: 1.5; opacity: 0.8; }
  .badge {
    display: inline-flex; align-items: center; gap: 14px;
    padding: 14px 14px 14px 18px; background: rgba(255,255,255,0.1);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.2); border-radius: var(--radius-sm); color: #fff;
  }
  .badge-title { font-size: 14px; font-weight: 500; }
  .badge-sub { font-family: var(--font-mono); font-size: 11px; opacity: 0.7; }
  .badge-arrow { width: 32px; height: 32px; border-radius: 50%; background: #fff; color: var(--ink); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; }
  @media (max-width: 768px) {
    .hero { padding: 120px 20px 0; }
    .footer-inner { flex-direction: column; align-items: start; }
  }
</style>
