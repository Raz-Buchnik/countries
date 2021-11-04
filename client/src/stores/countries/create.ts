import { countries } from ".";
import { http } from "../../common";
import { HttpMethods } from "../../ts/enums";

export const create = async (): Promise<void> => {

  const res = await http.request({
    method: HttpMethods.post,
    url: `https://razaviv-countries.dev/countries/v1`,
    data: countries.forms.create
  })

}