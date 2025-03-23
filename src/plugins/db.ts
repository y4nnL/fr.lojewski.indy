import fp from 'fastify-plugin'
import mongoose from 'mongoose'
import { PLUGIN_ENV_NAME } from '@/constants'
import '@/types'

export default fp(
  async (fastify) => {
    await mongoose.connect(fastify.config.DATABASE_URL)
    fastify
      .decorate('db', mongoose.connection)
      .addHook('onClose', (fastifyInstance, done) => {
        fastifyInstance.db.close().then(() => done())
      })
  },
  { dependencies: [PLUGIN_ENV_NAME] }
)
