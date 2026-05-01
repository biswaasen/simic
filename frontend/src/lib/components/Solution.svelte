<script>
  const tags = [
    'Goal-Driven Architecture',
    'Self-Building Pipelines',
    'Continuous Execution',
    'Native Integrations',
  ];
</script>

<section class="solution" id="services">
  <div class="inner">
    <span class="label">// THE SOLUTION</span>
    <div class="split">
      <div class="left">
        <h2>Not software.<br />Not SaaS.<br />A system.</h2>
      </div>
      <div class="right">
        <p class="big">
          SIMIC is a new category of infrastructure. An autonomous AI agent
          platform that takes your business problem and returns a working,
          operating system.
        </p>
        <p>
          You do not configure workflows manually. You do not prompt an LLM and
          hope. You define a goal — and the system plans, builds, integrates,
          and executes, continuously.
        </p>
        <div class="tags">
          {#each tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .solution {
    background: var(--surface);
    padding: 120px 48px;
    border-top: 1px solid var(--border);
  }
  .inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .label {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--muted);
    display: block;
    margin-bottom: 48px;
  }
  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  h2 {
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 800;
    letter-spacing: -2.5px;
    color: var(--text);
    margin: 0;
    line-height: 1;
  }
  .big {
    font-size: 18px;
    color: var(--text);
    line-height: 1.6;
    margin: 0 0 20px;
    font-weight: 500;
  }
  p {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.8;
    margin: 0 0 40px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .tag {
    padding: 6px 14px;
    border: 1px solid var(--border);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--muted);
    text-transform: uppercase;
  }
  @media (max-width: 900px) {
    .solution {
      padding: 80px 24px;
    }
    .split {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
</style>
