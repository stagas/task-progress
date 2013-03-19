
/*!
 *
 * task-progress
 *
 * MIT
 *
 */

/**
 * Set the progress indicator to `n` %.
 *
 * @param {Number} n
 * @api public
 */

module.exports = function (n) {
  var title = process.title
  if ('{' === title[0]) {
    title = title.split(' ').slice(1).join(' ')
  }
  if (n > 0 && n < 100) {
    process.title = '{'+Math.floor(n)+'%} '+title
  }
  else {
    process.title = title
  }
}
