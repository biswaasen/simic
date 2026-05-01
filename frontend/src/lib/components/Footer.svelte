<script>
  const cols = [
    { title: 'Platform',  links: ['Architecture', 'Workflows', 'Integrations', 'Security'] },
    { title: 'Company',   links: ['About', 'Engineering', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Docs', 'Changelog', 'Status', 'Blog'] },
  ];
</script>

<footer>
  <div class="inner">
    <div class="top">
      <div class="brand">
        <div class="logo-row">
          <span class="dot"></span>
          <span class="logo">SIMIC</span>
        </div>
        <p class="tagline">
          Build <em>something</em><br />that runs without you.
        </p>
      </div>
      {#each cols as col (col.title)}
        <div class="col">
          <h4>{col.title}</h4>
          <ul>
            {#each col.links as l (l)}
              <li><a href="/{l.toLowerCase()}">{l}</a></li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="bottom">
      <span class="copy">© 2026 Simic Labs Inc.</span>
      <span class="mono">v4.0 // AUTONOMOUS · GLOBAL · CONTINUOUS</span>
    </div>
  </div>
</footer>

<style>
  footer { background: var(--bg); border-top: 1px solid var(--border); padding: 80px 24px 32px; }
  .inner { max-width: 1180px; margin: 0 auto; }
  .top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 64px; border-bottom: 1px solid var(--border); }
  .brand { display: flex; flex-direction: column; gap: 24px; max-width: 360px; }
  .logo-row { display: flex; align-items: center; gap: 10px; }
  .dot { width: 22px; height: 12px; border-radius: 999px; background: var(--ink); }
  .logo { font-family: var(--font-mono); font-size: 14px; font-weight: 600; letter-spacing: 2px; color: var(--ink); }
  .tagline {
    font-family: var(--font-mono); font-weight: 500;
    font-size: 28px; line-height: 1.15; letter-spacing: -1px; color: var(--ink);
  }
  .tagline em { font-family: var(--font-serif); font-style: italic; font-weight: 400; }
  .col h4 { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--muted-2); margin-bottom: 20px; text-transform: uppercase; }
  .col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
  .col a { font-size: 14px; color: var(--ink); transition: opacity 0.2s; }
  .col a:hover { opacity: 0.6; }
  .bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding-top: 32px; }
  .copy, .mono { font-family: var(--font-mono); font-size: 11px; color: var(--muted-2); letter-spacing: 0.5px; }
  @media (max-width: 768px) {
    footer { padding: 60px 20px 24px; }
    .top { grid-template-columns: 1fr 1fr; gap: 40px; }
    .brand { grid-column: span 2; }
  }
</style>
