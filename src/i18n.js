import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const lan = localStorage.getItem("language") || "en";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: lan,
    detection: {
      order: ["localStorage", "navigator"],
    },

    // keySeparator: true, // we do not use keys in form messages.welcome
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;
