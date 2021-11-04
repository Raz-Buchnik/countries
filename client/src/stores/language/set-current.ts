import { language } from './'

export const setCurrent = (new_language, cb?: any) => {
  if (!new_language) {
    new_language = language.current || navigator.language
  }
  if (!language.allowed_languages.some(item => item == new_language)) {
    new_language = language.default
  }
  window.localStorage.setItem("language", new_language)
  return typeof cb !== "undefined" 
    ? language.loadLanguage(new_language, cb) 
    : location.reload()
}