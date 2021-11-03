import { Server } from 'http'
import { closeServer, closeDb } from './index'

export const shutdown = async ({
  server
}: { server: Server }): Promise<void> => {

  // close mongo
  await closeDb()

  // close express server
  await closeServer(server)

}