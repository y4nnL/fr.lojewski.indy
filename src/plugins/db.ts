import fp from 'fastify-plugin'
import mongoose from 'mongoose'

export default fp(
  async (fastify) => {
    await mongoose.connect(fastify.config.DATABASE_URL)
    fastify
      .decorate('db', mongoose.connection)
      .addHook('onClose', (fastifyInstance, done) => {
        fastifyInstance.db.close().then(() => done())
      })
  },
  {
    dependencies: ['plugins/env'],
  }
)

declare module 'fastify' {
  interface FastifyInstance {
    db: typeof mongoose.connection
  }
}
