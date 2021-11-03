import joi from 'joi'

const name = joi.string()
  .min(3)
  .max(15)
  .required()

const code = joi.string()
  .valid('il', 'us')
  .required()

const coord = joi.object({
  lat: joi.number()
    .required(),
  lng: joi.number()
    .required()
})

const flag = joi.string()
  .min(3)
  .max(200)
  .required()

export const createSchema = joi.object({
  name,
  code,
  coord,
  flag
})