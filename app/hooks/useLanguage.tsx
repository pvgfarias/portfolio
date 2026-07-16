'use client';

import { useSyncExternalStore } from 'react';

type Language = 'en' | 'pt';

const LANGUAGE_EVENT = 'language-change';

function getServerSnapshot() {
  return 'en' as Language;
}

function getSnapshot() {
  if (typeof window === 'undefined') {
    return 'en' as Language;
  }

  const saved = window.localStorage.getItem('lang');
  if (saved === 'en' || saved === 'pt') {
    return saved;
  }

  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('pt') ? 'pt' : 'en';
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }
  window.addEventListener(LANGUAGE_EVENT, callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (next: Language) => {
    if (typeof window === 'undefined') return;

    window.localStorage.setItem('lang', next);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  };

  return { language, setLanguage };
}
