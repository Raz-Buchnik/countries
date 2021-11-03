import { MongoClient, Db, Collection } from 'mongodb'
import { logger } from '../index'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Collections } from 'razaviv-countries-common'

let db: Db
let client: MongoClient

export const connectDb = async (): Promise<void> => {

  if (db || client) return
  logger.info('Connecting to mongo...')
  const mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  client = await MongoClient.connect(uri)
  db = client.db()
  logger.info('Connected to mongo! ON TEST ENV!!!')

}

export const getDb = (): Db => db

export const getCollection = <CollectionType>(collectionName: Collections): Collection<CollectionType> => getDb().collection(collectionName)

export const closeDb = async (): Promise<void> => {
  await client.close()
  logger.info(`Mongo disconnected`)
}