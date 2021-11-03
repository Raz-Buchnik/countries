import { BadRequestError } from 'razaviv-common'
import { Country, CountryEntity, Meta } from 'razaviv-countries-common'
import { countries } from '../models'
import { createSchema } from '../schemas'

interface Attrs {
  country_data: Country;
  meta: Meta;
}

export const create = async (attrs: Attrs): Promise<{countryEntity: CountryEntity}> => {

  // user input validation
  await userInputValidation(attrs.country_data)

  // prepare to insert
  const countryEntity: CountryEntity = prepareCountryEntity(attrs)

  // save the country in DB
  await saveCountry(countryEntity)

  return { countryEntity }

}

const userInputValidation = async (country_data: Country): Promise<void> => {
  try {
    await createSchema.validateAsync(country_data, { abortEarly: false })
  } catch (err) {
    throw new BadRequestError(err)
  }
}

const prepareCountryEntity = (attrs: Attrs): CountryEntity => {
  const countryEntity: CountryEntity = {
    ...attrs.country_data,
    meta: attrs.meta
  }
  return countryEntity
}

const saveCountry = async (countryEntity: CountryEntity): Promise<void> => {
  await countries.insertOne(countryEntity)
}