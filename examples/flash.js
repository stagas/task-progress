var progress = require('../')

process.title = 'Flash'

var i = 0
setInterval(function () {
  i = 100-i
  progress(i-1)
}, 200)
