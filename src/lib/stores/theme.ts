import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

function createTheme() {
  const stored = typeof localStorage !== 'undefined'
    ? (localStorage.getItem('theme') as Theme | null)
    : null;

  const { subscribe, update } = writable<Theme>(stored ?? 'dark');

  return {
    subscribe,
    toggle() {
      update(current => {
        const next: Theme = current === 'dark' ? 'light' : 'dark';
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', next);
        }
        return next;
      });
    }
  };
}

export const theme = createTheme();
