import joi from 'joi'

const name = joi.string()
  .min(3)
  .max(15)

const code = joi.string()
  .valid('il', 'us')

const coord = joi.object({
  lat: joi.number()
    .required(),
  lng: joi.number()
    .required()
})

const flag = joi.string()
  .min(3)
  .max(200)

export const updateSchema = joi.object({
  name,
  code,
  coord,
  flag
})