<section class="hero">
  <div class="overlay"></div>
  <div class="content">
    <span class="tag">// AUTONOMOUS INTELLIGENCE PLATFORM</span>
    <h1>Input a goal.<br />Get a working system.</h1>
    <p>
      AI agents that plan workflows, build pipelines, integrate tools, and
      execute continuously — without a team behind it.
    </p>
    <div class="actions">
      <a href="#demo" class="btn-primary">Book Demo</a>
      <a href="#how" class="btn-ghost">See How It Works</a>
    </div>
    <div class="stats">
      <span>10,000+ workflows executed</span>
      <span class="sep">·</span>
      <span>Enterprise-grade infrastructure</span>
      <span class="sep">·</span>
      <span>Sub-100ms response</span>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    background: url('/hero_background.avif') center / cover no-repeat;
    display: flex;
    align-items: flex-end;
    padding-bottom: 100px;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(8, 8, 8, 0.3) 0%,
      rgba(8, 8, 8, 0.78) 60%,
      #080808 100%
    );
  }
  .content {
    position: relative;
    z-index: 1;
    padding: 0 48px;
    max-width: 880px;
  }
  .tag {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--muted);
    display: block;
    margin-bottom: 28px;
  }
  h1 {
    font-size: clamp(52px, 8vw, 96px);
    font-weight: 800;
    letter-spacing: -3px;
    line-height: 1;
    color: var(--text);
    margin: 0 0 28px;
  }
  p {
    font-size: 18px;
    line-height: 1.65;
    color: var(--muted);
    max-width: 540px;
    margin: 0 0 44px;
  }
  .actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 64px;
  }
  .btn-primary {
    padding: 14px 34px;
    background: var(--text);
    color: #080808;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .btn-primary:hover {
    opacity: 0.85;
  }
  .btn-ghost {
    padding: 14px 34px;
    border: 1px solid var(--border-bright);
    color: var(--muted);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s;
  }
  .btn-ghost:hover {
    color: var(--text);
    border-color: #444;
  }
  .stats {
    display: flex;
    gap: 12px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted-dim);
    letter-spacing: 0.5px;
    flex-wrap: wrap;
  }
  .sep {
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    .content {
      padding: 0 24px;
    }
    .hero {
      padding-bottom: 64px;
    }
  }
</style>
