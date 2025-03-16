import { FastifyServerOptions } from 'fastify'
import { AutoloadPluginOptions } from '@fastify/autoload'

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}

export type Env = {
  DATABASE_URL: string
}
