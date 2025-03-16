import fp from 'fastify-plugin'
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env'
import { Env } from '@/types'

const schema = {
  type: 'object',
  required: ['DATABASE_URL'],
  properties: {
    DATABASE_URL: {
      type: 'string',
      default: 'mongodb://localhost:27017/lojewski',
    },
  },
}

export default fp<FastifyEnvOptions>(
  async (fastify) => fastify.register(fastifyEnv, { schema }),
  {
    name: 'plugins/env',
  }
)

declare module 'fastify' {
  interface FastifyInstance {
    config: Env
  }
}
