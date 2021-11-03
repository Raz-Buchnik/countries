import {
  app,
  registerProcessEvents,
  httpLogger,
  localeMiddleware,
  localeHandler,
  initServer,
  connectDb,
  prepareModels
} from './index'
import helmet from 'helmet'
import cors from 'cors'
import { Server } from 'http'
import { errorMiddleware } from './errors'
import { notFoundRouter } from 'razaviv-common'
import { apiRouter } from '../api'
import { json, urlencoded } from 'express'

export const worker = async (): Promise<Server> => {

  // mongo
  await connectDb()

  // prepare models
  prepareModels()

  // serialize readable response
  app.set('json spaces', 4)

  // body parser (from express 4.x, since body parser was deprecated)
  app.use(json())
  app.use(urlencoded( { extended: true }))

  // helmet
  app.use(helmet())

  // cors
  app.use(cors())

  // locale middleware
  app.use(localeMiddleware(localeHandler))

  // http loger
  app.use(httpLogger)

  // router
  app.use(apiRouter)

  // errors middleware
  app.use(errorMiddleware)

  // not found router
  app.use(notFoundRouter)

  // server
  const server = await initServer(app)

  // register process events, like SIGNINT SIGKILL, uncaughtRejections, etc...
  registerProcessEvents({ server })

  return server

}
