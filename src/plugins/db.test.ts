import { describe, it, TestContext } from 'node:test'
import assert from 'node:assert/strict'
import mongoose from 'mongoose'
import { build } from '@/__test__'

describe('plugins/db', () => {
  it('should decorate with a mongoose connection', async (t: TestContext) => {
    const app = await build(t)
    assert.strictEqual(app.db === mongoose.connection, true)
  })
})
