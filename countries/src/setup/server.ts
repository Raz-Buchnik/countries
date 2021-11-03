import { Application } from 'express'
import { Server } from 'http'
import { logger } from './index'

// init http server using express app
export const initServer = (app: Application): Promise<Server> => {
  return new Promise(resolve => {
    const server = app.listen(process.env.PORT, () => {
      logger.info(`Connected and listen on: ${process.env.PORT}`)
      resolve(server)
    })
  })
}

// stop receiving new incoming requests
export const closeServer = (server: Server): Promise<void> => {
  return new Promise(resolve => {
    server.close(() => {
      logger.info('Express server has been closed')
      resolve()
    })
  })
}
