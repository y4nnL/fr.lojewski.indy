import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import Fastify from 'fastify'
import { Env } from '@/types'
import envPlugin from './env'

const env: Env = {
  DATABASE_URL: 'mongodb://localhost:27017/lojewski',
}

describe('plugins/env', () => {
  it('should decorate with a Env instance', async () => {
    const fastify = Fastify()
    await fastify.register(envPlugin).ready()
    assert.deepStrictEqual(fastify.config, env)
  })
})
