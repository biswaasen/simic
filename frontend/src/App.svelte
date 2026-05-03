<script>
  import { path } from './lib/router.js';
  import Navbar from './lib/components/navbar.svelte';
  import Hero from './lib/components/hero.svelte';
  import Ticker from './lib/components/ticker.svelte';
  import Problem from './lib/components/problem.svelte';
  import Solution from './lib/components/solution.svelte';
  import HowItWorks from './lib/components/how-it-works.svelte';
  import UseCases from './lib/components/use-cases.svelte';
  import Proof from './lib/components/proof.svelte';
  import Differentiation from './lib/components/differentiation.svelte';
  import CtaSection from './lib/components/cta-section.svelte';
  import Footer from './lib/components/footer.svelte';
  import Auth from './lib/components/auth.svelte';

  $: isAuth = $path === '/login' || $path === '/signup';
</script>

{#if isAuth}
  <Auth />
{:else}
  <Navbar />
  <main>
    <Hero />
    <Ticker />
    <Problem />
    <Solution />
    <HowItWorks />
    <UseCases />
    <Proof />
    <Differentiation />
    <CtaSection />
  </main>
  <Footer />
{/if}
