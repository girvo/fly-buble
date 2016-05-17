var test = require('tape').test
var buble = require('../')

test('fly-buble', function (t) {
    buble.call({
        filter: function (name, transform) {
            const content = 'let a = 0'
            const result = transform(content, {})

            t.equal(name, 'buble',
                'add buble filter')
            t.ok(/var a/.test(result.code), "buble transform")
            t.end()
        }
    })
})
