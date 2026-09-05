import test from 'node:test'
import assert from 'node:assert/strict'
import { getFullName, getShortName, getSalutation, getNameTemplateVars, resolveContentTemplates } from './doctorName'
import { getAllDoctorContent, getDoctorIdentity } from './doctorContent'

const bangla = { salutation: 'ডা.', firstName: 'ঐশর্য্য', middleName: 'লক্ষ্মী', lastName: 'পোদ্দার' }

test('formats full, short, and untitled names without duplicate salutations', () => {
  assert.equal(getFullName(bangla), 'ডা. ঐশর্য্য লক্ষ্মী পোদ্দার')
  assert.equal(getFullName(bangla, false), 'ঐশর্য্য লক্ষ্মী পোদ্দার')
  assert.equal(getShortName(bangla), 'ডা. ঐশর্য্য')
  assert.equal(getSalutation(bangla), 'ডা.')
  const partial = { salutation: ' Dr. ', firstName: ' Jane ', middleName: '', lastName: '' }
  assert.equal(getFullName(partial), 'Dr. Jane')
  assert.equal(getShortName({ ...partial, firstName: '', lastName: ' Doe ' }), 'Dr. Doe')
})

test('resolves nested content, preserves nonstrings and literal replacement characters', () => {
  const vars = { ...getNameTemplateVars(bangla), literal: '$&' }
  const original = { bio: '{{ doctorName }}', reviews: [{ text: '{{doctorShortName}} / {{literal}}', rating: 5 }], visible: true, empty: null }
  assert.deepEqual(resolveContentTemplates(original, vars), {
    bio: 'ডা. ঐশর্য্য লক্ষ্মী পোদ্দার', reviews: [{ text: 'ডা. ঐশর্য্য / $&', rating: 5 }], visible: true, empty: null,
  })
  assert.equal(original.bio, '{{ doctorName }}')
})

test('all loaded content resolves name templates, including profile biographies and homepage links', () => {
  for (const lang of ['en', 'bn'] as const) {
    const data = getAllDoctorContent(lang)
    const name = getDoctorIdentity(lang)
    assert.doesNotMatch(JSON.stringify(data), /{{\s*(?:doctor\w*|salutation|firstName|middleName|lastName)\s*}}/)
    assert.ok(JSON.stringify(data.profile).includes(getFullName(name)))
    assert.ok(JSON.stringify(data.home).includes(getShortName(name)))
  }
})
