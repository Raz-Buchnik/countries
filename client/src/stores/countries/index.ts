import { store } from '@risingstack/react-easy-state'
import { fetch } from './fetch'
import { openAddSheet } from './open-add-sheet'
import { closeAddSheet } from './close-add-sheet'
import { forms } from './forms'
import { create } from './create'

export const countries = store({
  loading: false,
  add_sheet_opened: false,
  data: [],
  forms,
  fetch,
  openAddSheet,
  closeAddSheet,
  create
})