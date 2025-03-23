import fp from 'fastify-plugin'
import fastifyEnv, { FastifyEnvOptions } from '@fastify/env'
import { PLUGIN_ENV_NAME } from '@/constants'
import '@/types'

const schema: FastifyEnvOptions['schema'] = {
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
  { name: PLUGIN_ENV_NAME }
)
