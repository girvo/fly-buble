/*eslint-env node, es6 */
var test = require('tape').test
var buble = require('../')

test('fly-buble', function (t) {
  t.plan(4)

  buble.call({
    filter: function (name, transform) {
      const content = 'let a = 0'
      const result = transform(content, {})

      t.equal(name, 'buble',
        'add buble filter')
      t.ok(/var a/.test(result.code),
        'buble transform')
      t.equal(result.ext, '.js',
        'has the right extension')
      t.equal(result.map.sourcesContent[0], content,
        'source maps work')
      t.end()
    }
  })
})
