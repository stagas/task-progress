
# task-progress

Shows native OS task progress for node apps (wherever supported).

Could be used for downloaders, load indicators or any kind of metrics.

<img src="http://i.imgur.com/4BpNBHb.png" border="0" />

## Installing

```sh
$ npm install task-progress
```

## Using

Just one function, `progress(n)` where `n` is a number in the range **0-100**.

It removes itself when passed anything outside that range.

```js
var progress = require('task-progress')

process.title = 'My app'

progress(15) // changes title to: `{15%} My app`

progress(100) // resets title back to: `My app`
```

## License

MIT
