import { PrintRouteParams, PrintRouteResult } from '../../stores/orders/print-route'

export default interface Orders {
  printRoute(params: PrintRouteParams) : PrintRouteResult
}