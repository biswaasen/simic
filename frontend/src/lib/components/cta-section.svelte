<section class="cta" id="demo">
  <div class="inner">
    <div class="card">
      <div class="grid-bg"></div>
      <div class="content">
        <span class="label">// DEPLOY NOW</span>
        <h2>
          Stop managing process.<br />
          Start shipping <em>outcomes</em>.
        </h2>
        <p>
          We don't sell free trials. We deploy production systems for operators
          who've stopped pretending tools are infrastructure.
        </p>
        <div class="actions">
          <a href="mailto:hello@simic.ai" class="btn-primary">Book a Demo</a>
          <a href="#how" class="btn-ghost">See architecture →</a>
        </div>
        <div class="urgency">
          <span class="urgency-text">3 enterprise slots remaining this quarter</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cta { padding: 0 24px 120px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .card {
    position: relative; overflow: hidden;
    background: var(--ink); color: #fff;
    border-radius: var(--radius-lg);
    padding: 96px 64px;
    box-shadow: 0 30px 80px -30px rgba(0,0,0,0.4);
  }
  .grid-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%);
  }
  .content { position: relative; max-width: 720px; }
  .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); display: block; margin-bottom: 28px; }
  h2 { font-family: var(--font-mono); font-weight: 500; font-size: clamp(40px, 6vw, 88px); line-height: 0.95; letter-spacing: -2.5px; color: #fff; margin-bottom: 28px; }
  h2 em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .content p { font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.6; max-width: 540px; margin-bottom: 40px; }
  .actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
  .btn-primary {
    display: inline-flex; align-items: center;
    padding: 14px 22px; background: #fff; color: var(--ink);
    border-radius: 999px; font-size: 14px; font-weight: 500;
    transition: transform 0.2s;
  }
  .btn-primary:hover { transform: translateY(-1px); }
  .btn-ghost { padding: 14px 22px; color: #fff; font-size: 14px; font-weight: 500; opacity: 0.7; }
  .btn-ghost:hover { opacity: 1; }
  .urgency { font-family: var(--font-mono); font-size: 12px; color: rgba(255,255,255,0.55); letter-spacing: 0.5px; }
  @media (max-width: 768px) { .card { padding: 60px 28px; } .cta { padding: 0 20px 80px; } }
</style>
