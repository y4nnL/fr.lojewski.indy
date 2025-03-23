import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import Fastify from 'fastify'
import envPlugin from './env'

describe('plugins/env', () => {
  it('should decorate with a Env instance', async () => {
    const fastify = Fastify()
    await fastify.register(envPlugin).ready()
    assert.strictEqual(typeof fastify.config.DATABASE_URL, 'string')
    assert.notEqual(typeof fastify.config.DATABASE_URL, '')
  })
})
