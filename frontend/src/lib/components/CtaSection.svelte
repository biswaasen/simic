<section class="cta" id="demo">
  <div class="inner">
    <div class="marquee">DEPLOY NOW &nbsp;// DEPLOY NOW &nbsp;// DEPLOY NOW &nbsp;//</div>
    <h2>Stop managing process.<br />Start shipping outcomes.</h2>
    <p>
      Join the operators who've replaced entire workflow teams with a single
      deployment. We don't do free trials. We do production systems.
    </p>
    <div class="actions">
      <a href="mailto:hello@simic.ai" class="btn-primary">Book a Demo</a>
      <a href="#how" class="btn-ghost">See the Architecture</a>
    </div>
    <div class="urgency">
      <span class="dot-live"></span>
      <span>3 enterprise slots available this quarter</span>
    </div>
  </div>
</section>

<style>
  .cta {
    background: #080808;
    padding: 160px 48px;
    border-top: 1px solid var(--border);
    text-align: center;
  }
  .inner {
    max-width: 800px;
    margin: 0 auto;
  }
  .marquee {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 4px;
    color: var(--border);
    margin-bottom: 52px;
  }
  h2 {
    font-size: clamp(36px, 6vw, 72px);
    font-weight: 800;
    letter-spacing: -2.5px;
    color: var(--text);
    margin: 0 0 24px;
    line-height: 1;
  }
  p {
    font-size: 16px;
    color: var(--muted);
    line-height: 1.75;
    max-width: 520px;
    margin: 0 auto 52px;
  }
  .actions {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  .btn-primary {
    padding: 16px 40px;
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
    padding: 16px 40px;
    border: 1px solid var(--border-bright);
    color: var(--muted);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s;
  }
  .btn-ghost:hover {
    color: var(--text);
    border-color: #444;
  }
  .urgency {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.5px;
  }
  .dot-live {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    display: inline-block;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
  @media (max-width: 768px) {
    .cta {
      padding: 100px 24px;
    }
  }
</style>
