import { FetchResult } from '../../stores/report/fetch'

export default interface Report {
  inited?: true,
  err?: Error,
  data?: any,
  fetch() : FetchResult
}