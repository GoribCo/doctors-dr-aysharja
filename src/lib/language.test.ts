import test from 'node:test'
import assert from 'node:assert/strict'

import { getAvailableContentLanguages } from './doctorContent'

test('doctor content reports the available Markdown languages in stable order', () => {
  assert.deepEqual(getAvailableContentLanguages(), ['bn', 'en'])
})
