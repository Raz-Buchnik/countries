import { HttpMethods } from "../../ts/enums";

export interface RequestParams {
  method: HttpMethods,
  url: string,
  params?: any, // aka query string
  data?: any,
  headers?: any
}