import { mount } from 'svelte'
import Lenis from 'lenis'
import './app.css'
import App from './App.svelte'

const target = document.getElementById('app')
if (!(target instanceof HTMLElement)) {
  throw new Error('Missing #app root element')
}

const app = mount(App, { target })

const lenis = new Lenis({
  duration: 1.1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

/** @param {number} time */
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

function observeReveals() {
  document
    .querySelectorAll('[data-reveal]:not(.in-view), [data-reveal-stagger]:not(.in-view)')
    .forEach((el) => revealObserver.observe(el))
}

queueMicrotask(observeReveals)
const mutationObserver = new MutationObserver(observeReveals)
mutationObserver.observe(target, { childList: true, subtree: true })

lenis.on('scroll', ({ scroll }) => {
  const heroBg = document.querySelector('.hero img.bg')
  if (heroBg instanceof HTMLElement) {
    const offset = Math.min(scroll * 0.28, 240)
    heroBg.style.transform = `translateY(${offset}px) scale(1.04)`
  }
})

export default app
