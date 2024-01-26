import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const userLanguage = navigator.language.split('-')[0]

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: userLanguage,
    fallbackLng: 'es',
    supportedLngs: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18next
