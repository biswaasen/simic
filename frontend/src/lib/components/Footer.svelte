<script>
  const links = [
    { label: 'Works', href: '#works' },
    { label: 'Services', href: '#services' },
    { label: 'Insights', href: '#insights' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: 'mailto:hello@simic.ai' },
  ];
</script>

<footer>
  <div class="inner">
    <div class="top">
      <div class="brand">
        <span class="logo">SIMIC</span>
        <span class="tagline">Autonomous Intelligence Infrastructure</span>
      </div>
      <nav>
        {#each links as l}
          <a href={l.href}>{l.label}</a>
        {/each}
      </nav>
    </div>
    <div class="bottom">
      <span class="copy">© 2025 SIMIC. All rights reserved.</span>
      <span class="mono">// BUILD SOMETHING THAT RUNS WITHOUT YOU</span>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #080808;
    border-top: 1px solid var(--border);
    padding: 52px 48px;
  }
  .inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border);
  }
  .brand {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .logo {
    font-family: var(--mono);
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 5px;
    color: var(--text);
  }
  .tagline {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 1.5px;
    color: var(--muted-dim);
    text-transform: uppercase;
  }
  nav {
    display: flex;
    gap: 32px;
    align-items: center;
  }
  nav a {
    font-size: 13px;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  nav a:hover {
    color: var(--text);
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .copy {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--border-bright);
    letter-spacing: 0.5px;
  }
  .mono {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--border-bright);
    letter-spacing: 1.5px;
  }
  @media (max-width: 768px) {
    footer {
      padding: 40px 24px;
    }
    .top {
      flex-direction: column;
      gap: 32px;
    }
    nav {
      flex-wrap: wrap;
      gap: 16px;
    }
    .bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
