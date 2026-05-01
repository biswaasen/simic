<script>
  const nots = [
    {
      label: 'Not Zapier.',
      desc: "We don't wire triggers. We architect autonomous systems that operate without conditional logic trees or manual maintenance.",
    },
    {
      label: 'Not ChatGPT wrappers.',
      desc: "We don't wrap LLMs in a UI and call it a product. We build goal-driven execution engines with measurable business outcomes.",
    },
    {
      label: 'Not no-code tools.',
      desc: "We don't give you a canvas to drag and drop. We give you a system that builds itself from a single goal.",
    },
  ];
</script>

<section class="diff">
  <div class="inner">
    <span class="label">// WHAT WE ARE NOT</span>
    <h2>A new category.<br />Nothing before it compares.</h2>
    <div class="list">
      {#each nots as n}
        <div class="row">
          <span class="x">✕</span>
          <div class="row-content">
            <h3>{n.label}</h3>
            <p>{n.desc}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="we-are">
      <span class="we-label">// WHAT WE ARE</span>
      <p class="statement">
        An autonomous business operating layer. You define the outcome. We run
        the company.
      </p>
    </div>
  </div>
</section>

<style>
  .diff {
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
    margin-bottom: 24px;
  }
  h2 {
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 800;
    letter-spacing: -2px;
    color: var(--text);
    margin: 0 0 72px;
    line-height: 1.05;
  }
  .list {
    border-top: 1px solid var(--border);
  }
  .row {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    padding: 40px 0;
    border-bottom: 1px solid var(--border);
  }
  .x {
    font-size: 16px;
    color: var(--border-bright);
    min-width: 28px;
    margin-top: 3px;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 8px;
    letter-spacing: -0.5px;
  }
  p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.75;
    margin: 0;
  }
  .we-are {
    margin-top: 72px;
    padding: 48px 40px;
    border: 1px solid var(--border);
  }
  .we-label {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--muted);
    display: block;
    margin-bottom: 20px;
  }
  .statement {
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.5px;
    line-height: 1.3;
    margin: 0;
  }
  @media (max-width: 768px) {
    .diff {
      padding: 80px 24px;
    }
    .we-are {
      padding: 32px 24px;
    }
  }
</style>
