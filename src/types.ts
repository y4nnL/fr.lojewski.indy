import { FastifyServerOptions } from 'fastify'
import { AutoloadPluginOptions } from '@fastify/autoload'
import mongoose from 'mongoose'

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}

export type Env = {
  DATABASE_URL: string
}

declare module 'fastify' {
  interface FastifyInstance {
    config: Env
    db: typeof mongoose.connection
  }
}
