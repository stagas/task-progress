
/**
 * Test.
 */

var assert = require('assert')
var progress = require('../')

process.title = 'My app'
assert.equal('My app', process.title, 'should have title')

progress(10)
assert.equal('{10%} My app', process.title, 'should set progress')

wait(1)

progress(0)
assert.equal('My app', process.title, 'should not show on 0% set progress')

wait(1)

progress(20.6474)
assert.equal('{20%} My app', process.title, 'should accept floats')

wait(1)

progress(100)
assert.equal('My app', process.title, 'should end on 100%')

wait(1)

for (var i = 0; i <= 100; i+=Math.random()*3) {
  progress(i)
  wait(0.05)
}

function wait (s) {
  var then = Date.now()
  s *= 1000
  while (Date.now() - then < s) {}
}
