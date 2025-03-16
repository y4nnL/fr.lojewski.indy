import helper from 'fastify-cli/helper.js'
import * as path from 'node:path'
import * as test from 'node:test'

export type TestContext = {
  after: typeof test.after
}

const AppPath = path.join(__dirname, '..', 'src', 'app.ts')

function config() {
  return {
    skipOverride: true,
  }
}

export async function build(t: TestContext) {
  const argv = [AppPath]
  const app = await helper.build(argv, config())

  t.after(() => app.close())

  return app
}
