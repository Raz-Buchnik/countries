import { countries } from './index'
import { http } from '../../common'
import { HttpMethods } from '../../ts/enums'

export const fetch = async (): Promise<void> => {
  countries.loading = true
  const res = await http.request({
    method: HttpMethods.get,
    url: 'https://razaviv-countries.dev/countries/v1'
  })
  countries.data = res.country_entities
  countries.loading = false
} 