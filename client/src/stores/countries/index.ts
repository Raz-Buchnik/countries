import { store } from '@risingstack/react-easy-state'
import { fetch } from './fetch'
import { openAddSheet } from './open-add-sheet'
import { closeAddSheet } from './close-add-sheet'

export const countries = store({
  loading: false,
  add_sheet_opened: false,
  data: [],
  fetch,
  openAddSheet,
  closeAddSheet
})