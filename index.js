const {format, relative} = require('path')
const {transform} = require('buble')

const relPath = obj => relative(obj.dir, format(obj))

module.exports = function (fly) {
	fly.plugin('buble', {}, function * (file, options) {
		// doc: Default the incoming options object
		options = Object.assign({
			inline: false,
			sourceMap: true,
			file: file.base,
			source: relPath(file)
		}, options)

		// doc: Transform data
		let {code, map} = transform(file.data.toString(), options)

		// doc: Handle sourcemaps
		if (options.sourceMap) {
			if (options.inline) {
				// doc: Append inline sourcemap
				code += `\n//# sourceMappingURL=${map.toUrl()}`
			} else {
				code += `\n//# sourceMappingURL=${options.file}.map`
				// doc: Create new file
				this._.files.push({
					base: `${options.file}.map`,
					data: map.toString(),
					dir: file.dir
				})
			}
		}

		// doc: Return contents as Buffer!
		file.data = new Buffer(code)
	})
}
