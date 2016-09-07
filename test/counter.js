const test = require('tape')
const counter = require('../counter')

test('INCREMENT adds 1 to state', t => {
  const result = counter(0, {type: 'INCREMENT'})
  t.equal(result, 1)
  t.end()
})

test('DECREMENT removes 1 from state', t => {
  const result = counter(1, {type: 'DECREMENT'})
  t.equal(result, 0)
  t.end()
})

test('ANY OTHER ACTION returns current state', t => {
  const result = counter(100, {type: 'SOMETHING'})
  t.equal(result, 100)
  t.end()
})

test('Not initialising state should return default state (plus action)', t => {
  const result = counter(undefined, {type: 'INCREMENT'})
  t.equal(result, 1)
  t.end()
})
