import { language } from './'

export const loadLanguage = async (new_language, cb) => {
  if (new_language=="he-IL") {
    language.t = await import('../../app/locales/he-IL/translations.json')
    language.current = "he-IL"
  }
  if (new_language=="en-US") {
    language.t = await import('../../app/locales/en-US/translations.json')
    language.current = "en-US"
  }
  document.getElementsByTagName("html")[0].dir = language.t.dir
  return typeof cb !== "undefined" ? cb() : location.reload()
}