import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async () => {
    return {
      root: true,
      db: fastify.db.readyState,
    }
  })
}

export default root
