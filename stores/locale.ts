import { negotiateLanguages } from '@fluent/langneg';
import { usePreferredLanguages } from '@vueuse/core';
import { defineStore } from 'pinia';

export const SupportedLocale = {
    DE: 'de',
    EN: 'en',
} as const;

export type SupportedLocale = typeof SupportedLocale[keyof typeof SupportedLocale];

export const useLocaleStore = defineStore('Locale', () => {
  const languages = usePreferredLanguages();
  const FALLBACK_LOCALE = SupportedLocale.DE;
  const route = useRoute();

  const localePrefix = computed(() => route.path.split('/')[1]);

  const requestedLanguages = computed(() => {
    const langs = [...languages.value];

    if (localePrefix.value) {
      langs.unshift(localePrefix.value);
    }

    return langs;
  });

  const negotiatedLanguage = computed<SupportedLocale>(() => negotiateLanguages(
    requestedLanguages.value,
    Object.values(SupportedLocale),
    { defaultLocale: FALLBACK_LOCALE },
  )[0] as SupportedLocale);

  const locale = ref<Readonly<SupportedLocale>>(negotiatedLanguage.value);

  watch(() => route.path, () => {
    if (localePrefix.value !== locale.value) {
      locale.value = localePrefix.value as SupportedLocale;
    }
  });

  const setLocale = (newLocale: SupportedLocale) => {
    locale.value = newLocale;
  };

  return {
    locale,
    setLocale,
    FALLBACK_LOCALE,
  };
});
