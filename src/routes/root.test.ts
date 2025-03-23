import { describe, it, TestContext } from 'node:test'
import assert from 'node:assert/strict'
import { build } from '@/__test__'

describe('routes/root', () => {
  it('should respond', async (t: TestContext) => {
    const app = await build(t)
    const res = await app.inject({ url: '/' })
    assert.deepStrictEqual(JSON.parse(res.payload), { root: true, db: 1 })
  })
})
