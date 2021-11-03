import { Country } from 'razaviv-countries-common'
import request from 'supertest'
import { app } from '../../../setup'

it('should create a country', async () => {

  // build country
  const country: Country = {
    name: 'Israel',
    code: 'il',
    flag: 'flag',
    coord: {
      lat: 1,
      lng: 1
    }
  }

  // request
  await request(app)
  .post(`/v1`)
  .set('accept-language', 'en-US')
  .send(country)
  .expect(200)

})