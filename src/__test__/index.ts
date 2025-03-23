import helper from 'fastify-cli/helper.js'
import * as path from 'node:path'
import * as test from 'node:test'

export async function build(t: test.TestContext) {
  const appPath = path.join(__dirname, '..', 'app.ts')
  const app = await helper.build([appPath], {
    skipOverride: true,
  })
  t.after(() => app.close())
  return app
}
