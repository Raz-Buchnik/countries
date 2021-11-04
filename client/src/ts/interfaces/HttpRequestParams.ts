import { HttpMethods } from '../enums'

export default interface HttpRequestParams {
  method: HttpMethods,
  url: string,
  params?: any,
  data?: any,
  headers?: any
}