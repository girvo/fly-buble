module.exports = function () {
	return this.filter('buble', function (data, options) {
		// doc: Require Bublé for transforming ES2015 to ES5
		var buble = require('buble')

		// doc: assign for object assignment in Node v0.12
		var assign = require('object-assign')

		// doc: Default the incoming options object
		options = typeof options === 'undefined' ? {} : options

		// doc: Transform and return!
		return assign({ext: '.js'}, buble.transform(data, options))
	})
}
