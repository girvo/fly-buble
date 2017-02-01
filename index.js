const {transform} = require('buble')

module.exports = function (fly) {
	fly.plugin('buble', {}, function (file, options) {
		// doc: Default the incoming options object
		options = options || {}
		// doc: Transform data
		const data = transform(file.data, options)
		// doc: Return as Buffer!
		file.data = new Buffer(data)
	})
}
