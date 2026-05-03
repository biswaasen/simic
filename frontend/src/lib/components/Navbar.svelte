<script>
  import { onMount } from 'svelte';
  import { goto } from '../router.js';

  const links = [
    { label: 'Platform', href: '#solution' },
    { label: 'Workflows', href: '#cases' },
    { label: 'Proof', href: '#proof' },
    { label: 'Pricing', href: '#pricing' },
  ];

  let scrolled = false;

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > window.innerHeight - 120;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header class="header" class:scrolled>
  <div class="left">
    <a href="/" class="brand" on:click|preventDefault={() => goto('/')}>SIMIC</a>
    <span class="div"></span>
    <nav>
      {#each links as l (l.href)}
        <a href={l.href}>{l.label}</a>
      {/each}
    </nav>
  </div>

  <div class="right">
    <a href="/login" class="signin" on:click|preventDefault={() => goto('/login')}>Sign in</a>
    <a href="#demo" class="cta">
      <span>Book Demo</span>
      <span class="arr">→</span>
    </a>
  </div>
</header>

<style>
  .header {
    position: fixed; top: 20px; left: 24px; right: 24px; z-index: 100;
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
  }
  .left, .cta {
    border-radius: 999px;
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    transition: background 0.3s, border-color 0.3s, color 0.3s;
  }
  .left {
    display: inline-flex; align-items: center; gap: 22px;
    padding: 9px 26px 9px 22px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
  .brand {
    font-family: var(--font-mono); font-size: 13px;
    font-weight: 600; letter-spacing: 3px; color: #fff;
    transition: color 0.3s;
  }
  .div { width: 1px; height: 16px; background: rgba(255, 255, 255, 0.2); transition: background 0.3s; }
  nav { display: flex; gap: 28px; }
  nav a {
    font-size: 13.5px; color: rgba(255, 255, 255, 0.7);
    transition: color 0.2s;
  }
  nav a:hover { color: #fff; }
  .cta {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 6px 6px 18px;
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--ink); font-size: 13px; font-weight: 500;
  }
  .cta:hover { transform: translateY(-1px); }
  .arr {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--ink); color: #fff;
    display: grid; place-items: center; font-size: 13px;
    transition: background 0.3s, color 0.3s;
  }

  .right { display: inline-flex; align-items: center; gap: 14px; }
  .signin {
    font-size: 13.5px; color: rgba(255, 255, 255, 0.85);
    padding: 8px 14px; transition: color 0.2s;
  }
  .signin:hover { color: #fff; }

  .scrolled .left { background: rgba(255, 255, 255, 0.7); border-color: rgba(0, 0, 0, 0.06); }
  .scrolled .brand { color: var(--ink); }
  .scrolled .div { background: rgba(0, 0, 0, 0.12); }
  .scrolled nav a { color: var(--muted-2); }
  .scrolled nav a:hover { color: var(--ink); }
  .scrolled .cta { background: var(--ink); color: #fff; border-color: var(--ink); }
  .scrolled .arr { background: #fff; color: var(--ink); }
  .scrolled .signin { color: var(--muted); }
  .scrolled .signin:hover { color: var(--ink); }

  @media (max-width: 800px) { nav, .div, .signin { display: none; } }
</style>
