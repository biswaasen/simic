import { writable } from 'svelte/store';

const initial = typeof window !== 'undefined' ? window.location.pathname : '/';

export const path = writable(initial);

/** @param {string} href */
export function goto(href) {
  if (typeof window === 'undefined') return;
  if (window.location.pathname === href) return;
  window.history.pushState({}, '', href);
  path.set(href);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    path.set(window.location.pathname);
  });
}
