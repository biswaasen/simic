<script>
  const links = [
    { label: 'Platform', href: '#solution' },
    { label: 'Workflows', href: '#cases' },
    { label: 'Proof', href: '#proof' },
    { label: 'Pricing', href: '#pricing' },
  ];
</script>

<header>
  <nav>
    <a href="/" class="logo">
      <span class="dot"></span>
      <span>SIMIC</span>
    </a>
    <ul>
      {#each links as l (l.href)}
        <li><a href={l.href}>{l.label}</a></li>
      {/each}
    </ul>
    <a href="#demo" class="cta">
      <span class="cta-icon">→</span>
      <span>Book Demo</span>
    </a>
  </nav>
</header>

<style>
  header {
    position: fixed;
    inset: 16px 16px auto 16px;
    z-index: 100;
  }
  nav {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 8px 20px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border: 1px solid var(--border);
    border-radius: 999px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.04);
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--ink);
  }
  .dot {
    width: 22px;
    height: 12px;
    border-radius: 999px;
    background: var(--ink);
  }
  ul {
    display: flex;
    gap: 28px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul a {
    color: var(--muted);
    font-size: 14px;
    transition: color 0.2s;
  }
  ul a:hover {
    color: var(--ink);
  }
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px 10px 10px;
    background: var(--ink);
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    border-radius: 999px;
    transition: transform 0.2s;
  }
  .cta-icon {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: var(--ink);
    border-radius: 999px;
    font-size: 12px;
  }
  .cta:hover { transform: translateY(-1px); }
  @media (max-width: 768px) { ul { display: none; } }
</style>
