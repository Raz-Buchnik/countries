import { Country } from 'razaviv-countries-common'
import request from 'supertest'
import { app } from '../../../setup'

it('should get list of countries', async () => {

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

  // request
  const res = await request(app)
  .get(`/v1`)
  .set('accept-language', 'en-US')
  .expect(200)

  expect(res.body.data.data.country_entities[0].name).toBe('Israel')

})