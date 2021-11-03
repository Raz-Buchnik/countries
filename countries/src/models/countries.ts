import { Collection } from "mongodb";
import { Collections, CountryEntity } from "razaviv-countries-common";
import { getCollection } from "../setup/db";

let countries: Collection<CountryEntity>

export const prepareCountries = (): Collection<CountryEntity> => {
  if (countries) return
  countries = getCollection<CountryEntity>(Collections.countries)
}

export { countries }
