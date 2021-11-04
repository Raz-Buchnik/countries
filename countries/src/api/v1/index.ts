import express from 'express'
import { getController } from './get'
import { createController } from './create'
import { updateController } from './update'

const v1Router = express.Router()

v1Router.use('/v1', [
  getController,
  createController,
  updateController
])

export { v1Router }
