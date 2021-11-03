import { CountryEntity } from 'razaviv-countries-common'
import { countries } from '../models'


export const get = async (): Promise<{country_entities: CountryEntity[]}> => {

  // find
  const country_entities = await findCountries()

  return { country_entities }

}

const findCountries = async (): Promise<CountryEntity[]> => countries.find({}).toArray()