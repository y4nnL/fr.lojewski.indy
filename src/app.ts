import { join } from 'node:path'
import { FastifyPluginAsync } from 'fastify'
import AutoLoad from '@fastify/autoload'
import { AppOptions } from '@/types'

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  options
): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    ignorePattern: /test/,
    options,
  })
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    ignorePattern: /test/,
    options,
  })
}

export default app
export { app }
