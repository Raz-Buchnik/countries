import { logger, shutdown } from './index'
import { Server } from 'http'

export const registerProcessEvents = ({
  server
}: { server: Server }) => {
  // unhandled exception -> invoke a graceful shutdown
  process.on('uncaughtException', (err) => {
    logger.error('uncaughtException', err)
    process.emit('SIGTERM', 'SIGTERM')
  })

  // unhandledRejection -> invoke a graceful shutdown
  process.on('unhandledRejection', (err) => {
    logger.error('unhandledRejection', err)
    process.emit('SIGTERM', 'SIGTERM')
  })

  // sigterm -> invoke a graceful shutdown
  process.on('SIGTERM', async () => {
    logger.info(`[SIGTERM received, shutting down the server gracefully]`)
    try {
      await shutdown({ server })
      process.exit(0)
    } catch (err) {
      logger.error('SIGTERM could not shut down the server', err)
      process.emit('SIGINT', 'SIGINT')
    }
  })

  // sigint - kill
  process.on('SIGINT', () => {
    logger.info(`[SIGINT received, shutting the server down]`)
    process.exit(0)
  })

  // on exit
  process.on('exit', () => {
    logger.info(`[Node process was exited]`)
  })
}
