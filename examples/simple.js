
/**
 * Example.
 */

var progress = require('../')

process.title = 'My app'

for (var i = 0; i <= 100; i+=1) {
  progress(i)
  wait(0.2)
}

function wait (s) {
  var then = Date.now()
  s *= 1000
  while (Date.now() - then < s) {}
}
