import { MongoClient, Db, Collection } from 'mongodb'
import { Collections } from 'razaviv-countries-common'
import { logger } from './index'

let db: Db
let client: MongoClient

// will be run once, on each worker init
export const connectDb = async (): Promise<void> => {

  if (db || client) return
  logger.info('Connecting to mongo...')
  client = await MongoClient.connect(process.env.MONGO_DB_URI)
  db = client.db()
  logger.info('Connected to mongo!')

}

// will be used only by getCollection method
export const getDb = (): Db => db

// will be used each time we want to manage a specific collection
export const getCollection = <CollectionType>(collectionName: Collections): Collection<CollectionType> => getDb().collection(collectionName)

// disconnect
export const closeDb = async (): Promise<void> => {
  await client.close()
  logger.info(`Mongo disconnected`)
}