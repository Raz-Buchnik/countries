import express from 'express'
import { getController } from './get'
import { createController } from './create'

const v1Router = express.Router()

v1Router.use('/v1', [
  getController,
  createController
])

export { v1Router }
