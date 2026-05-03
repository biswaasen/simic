<script>
  import { path, goto } from '../router.js';

  let email = '';
  let password = '';
  let name = '';
  let loading = false;

  $: mode = $path === '/signup' ? 'signup' : 'login';

  function handleSubmit() {
    if (loading) return;
    loading = true;
    setTimeout(() => {
      loading = false;
      console.log('[dummy auth]', mode, { name, email });
    }, 700);
  }

  function handleGoogle() {
    console.log('[dummy auth] google sign-in');
  }

  function toggleMode() {
    goto(mode === 'login' ? '/signup' : '/login');
  }

  const googleIcon = `
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  `;
</script>

<main class="auth">
  <a href="/" class="brand" on:click|preventDefault={() => goto('/')}>SIMIC</a>

  <div class="card">
    <span class="kicker">// {mode === 'login' ? 'WELCOME BACK' : 'GET STARTED'}</span>
    <h1>{mode === 'login' ? 'Sign in.' : 'Create account.'}</h1>
    <p class="sub">
      {mode === 'login'
        ? 'Continue building autonomous systems.'
        : 'Start orchestrating workflows in minutes.'}
    </p>

    <button class="google" type="button" on:click={handleGoogle}>
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html googleIcon}
      Continue with Google
    </button>

    <div class="divider"><span>or</span></div>

    <form on:submit|preventDefault={handleSubmit}>
      {#if mode === 'signup'}
        <input class="field" type="text" bind:value={name} placeholder="Full name" required autocomplete="name" />
      {/if}
      <input class="field" type="email" bind:value={email} placeholder="you@company.com" required autocomplete="email" />
      <input class="field" type="password" bind:value={password} placeholder="Password" required minlength="6" autocomplete={mode === 'login' ? 'current-password' : 'new-password'} />
      <button class="submit" type="submit" disabled={loading}>
        <span>{loading ? 'Loading' : mode === 'login' ? 'Sign in' : 'Create account'}</span>
        <span class="arr">→</span>
      </button>
    </form>

    <p class="toggle">
      {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
      <a href={mode === 'login' ? '/signup' : '/login'} on:click|preventDefault={toggleMode}>
        {mode === 'login' ? 'Sign up' : 'Sign in'}
      </a>
    </p>
  </div>

  <p class="legal">
    By continuing, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
  </p>
</main>

<style>
  .auth {
    min-height: 100svh;
    background: var(--bg);
    display: flex; flex-direction: column; align-items: center;
    padding: 28px 20px 48px;
    position: relative;
  }
  .auth::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 20%, transparent 75%);
    opacity: 0.6;
  }
  .brand {
    font-family: var(--font-mono); font-size: 13px; font-weight: 600;
    letter-spacing: 3px; color: var(--ink);
    align-self: flex-start; padding: 4px 8px; z-index: 2;
  }
  .card {
    position: relative; z-index: 1;
    width: 100%; max-width: 440px; margin: auto;
    background: var(--ink); color: #fff;
    border-radius: var(--radius-lg);
    padding: 44px 38px 36px;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,0.25);
    isolation: isolate; overflow: hidden;
  }
  .card::before {
    content: ''; position: absolute; inset: 0; z-index: -1;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 100% 70% at 50% 0%, #000 30%, transparent 80%);
  }
  .kicker {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px;
    color: rgba(255,255,255,0.5); display: block; margin-bottom: 14px;
  }
  h1 {
    font-family: var(--font-mono); font-weight: 500;
    font-size: 32px; letter-spacing: -1px; margin-bottom: 10px;
  }
  .sub { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.55; margin-bottom: 28px; }

  .google {
    width: 100%; display: inline-flex; align-items: center; justify-content: center; gap: 12px;
    padding: 13px 20px; border: none; border-radius: 999px;
    background: #fff; color: var(--ink);
    font-family: var(--font-sans); font-size: 14px; font-weight: 500;
    cursor: pointer; transition: opacity 0.2s, transform 0.2s;
  }
  .google:hover { opacity: 0.92; transform: translateY(-1px); }

  .divider { display: flex; align-items: center; margin: 22px 0; color: rgba(255,255,255,0.4); font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px; }
  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.1); }
  .divider span { padding: 0 14px; }

  form { display: flex; flex-direction: column; gap: 10px; }
  .field {
    width: 100%; padding: 13px 18px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; color: #fff;
    font-family: var(--font-sans); font-size: 14px;
    transition: border-color 0.2s, background 0.2s;
  }
  .field:focus { outline: none; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); }
  .field::placeholder { color: rgba(255,255,255,0.35); }

  .submit {
    margin-top: 6px; padding: 6px 6px 6px 22px;
    display: inline-flex; align-items: center; justify-content: space-between; gap: 10px;
    background: #fff; color: var(--ink); border: none; border-radius: 999px;
    font-family: var(--font-sans); font-size: 14px; font-weight: 500;
    cursor: pointer; transition: opacity 0.2s, transform 0.2s;
  }
  .submit:disabled { opacity: 0.55; cursor: not-allowed; }
  .submit:not(:disabled):hover { transform: translateY(-1px); }
  .submit .arr {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--ink); color: #fff;
    display: grid; place-items: center; font-size: 13px;
  }

  .toggle { margin-top: 22px; font-size: 13px; color: rgba(255,255,255,0.5); text-align: center; }
  .toggle a { color: #fff; text-decoration: underline; text-underline-offset: 3px; margin-left: 4px; }

  .legal {
    position: relative; z-index: 1;
    margin-top: 24px; font-size: 12px; color: var(--muted);
    font-family: var(--font-mono); letter-spacing: 0.3px;
  }
  .legal a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }

  @media (max-width: 520px) {
    .card { padding: 36px 26px 28px; border-radius: 24px; }
    h1 { font-size: 28px; }
  }
</style>
