import axios from 'axios'
import { RequestParams } from './interfaces'

export const request = ({
  method,
  url,
  params = {},
  data = {},
  headers = {}
}: RequestParams) : Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {

      console.log(`[url]:`, url)
      
      const res = await axios.request({
        url,
        method,
        headers,
        params,
        data
      })

      return resolve(res.data.data)

    } catch(err) {
      return reject(err)
    }
  })
}