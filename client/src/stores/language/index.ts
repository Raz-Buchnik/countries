import { store } from '@risingstack/react-easy-state'
import { setCurrent } from './set-current'
import { loadLanguage } from './load-language'

export const language = store({
  default: "he-IL",
  current: window.localStorage.getItem("language"),
  allowed_languages: [
    "he-IL",
    "en-US"
  ],
  t: {
    dir: 'rtl'
  },
  setCurrent,
  loadLanguage
})