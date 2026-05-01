<script>
  const links = [
    { label: 'Works', href: '#works' },
    { label: 'Services', href: '#services' },
    { label: 'Insights', href: '#insights' },
    { label: 'Pricing', href: '#pricing' },
  ];
</script>

<nav>
  <a href="/" class="logo">SIMIC</a>
  <ul>
    {#each links as l}
      <li><a href={l.href}>{l.label}</a></li>
    {/each}
  </ul>
  <a href="#demo" class="cta">Book Demo</a>
</nav>

<style>
  nav {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
    background: rgba(8, 8, 8, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  .logo {
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 5px;
    color: var(--text);
    text-decoration: none;
    font-family: var(--mono);
  }
  ul {
    display: flex;
    gap: 36px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul a {
    color: var(--muted);
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  ul a:hover {
    color: var(--text);
  }
  .cta {
    padding: 9px 22px;
    background: var(--text);
    color: #080808;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity 0.2s;
  }
  .cta:hover {
    opacity: 0.85;
  }
  @media (max-width: 768px) {
    nav {
      padding: 16px 24px;
    }
    ul {
      display: none;
    }
  }
</style>
