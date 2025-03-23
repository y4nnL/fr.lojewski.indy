import * as path from 'node:path'
import * as test from 'node:test'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import helper from 'fastify-cli/helper.js'

const mongoMemoryServer = new MongoMemoryServer()

export const dbConnect = async () => {
  await mongoMemoryServer.start()
  const uri = mongoMemoryServer.getUri()
  process.env.DATABASE_URL = uri
  await mongoose.connect(uri)
}

export const dbDisconnect = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoMemoryServer.stop()
}

export async function build(t: test.TestContext) {
  await dbConnect()
  const appPath = path.join(__dirname, '..', 'app.ts')
  const app = await helper.build([appPath], {
    skipOverride: true,
  })
  t.after(async () => {
    await dbDisconnect()
    app.close()
  })
  return app
}
