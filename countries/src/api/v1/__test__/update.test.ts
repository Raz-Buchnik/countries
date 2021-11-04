import { Country } from 'razaviv-countries-common'
import request from 'supertest'
import { app } from '../../../setup'

it('should update a country flag', async () => {

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
  const insert = await request(app)
  .post(`/v1`)
  .set('accept-language', 'en-US')
  .send(country)
  .expect(200)

  const { countryEntity } = insert.body.data
  const _country = countryEntity._id

  // update request
  country.flag = 'some flag'

  const update = await request(app)
  .patch(`/v1/${_country}`)
  .set('accept-language', 'en-US')
  .send(country)
  .expect(200)

  expect(update.body.data.country_entity.flag).toBe('some flag')

})