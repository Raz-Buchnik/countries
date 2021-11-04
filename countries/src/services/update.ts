import { Country, CountryEntity } from "razaviv-countries-common";
import { ObjectId } from 'mongodb'
import { countries } from '../models'
import { updateSchema } from '../schemas'
import { BadRequestError } from "razaviv-common";

interface Attrs {
  country_data: Country;
  _country: ObjectId;
}

export const update = async (attrs: Attrs): Promise<{ country_entity: CountryEntity}> => {

  // user input validation
  await userInputValidation(attrs.country_data)

  // find and modify
  const country_entity = await findAndModify(attrs)

  return { country_entity }

}

const userInputValidation = async (country_data: Country): Promise<void> => {
  try {
    await updateSchema.validateAsync(country_data, { abortEarly: false })
  } catch (err) {
    throw new BadRequestError(err)
  }
}

const findAndModify = async (attrs: Attrs): Promise<CountryEntity> => {
  await countries.updateOne({ _id: new ObjectId(attrs._country) }, {
    $set: {
      ...attrs.country_data
    }
  })
  const country_entity = await countries.findOne({ _id: new ObjectId(attrs._country) })
  return country_entity
}