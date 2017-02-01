<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Bublé](https://buble.surge.sh/guide/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
Please see the example below. Keep in mind this is very new, and I haven't integrated source filenames into the source-mapping yet, but everything else should work.

All options map directly to what's [available in the Javascript api](https://buble.surge.sh/guide/#using-the-javascript-api), and are passed directly through to Bublé unmodified (for now).

Bublé is a very fast ES2015 compiler/transpiler, that aims for a subset of ES2015 that can be easily and quickly compiled to readable ES5, without munging your code or introducing unexpected performance decreases. It does not include a module system nor any ES5 shims, so you're going to want to provide those yourself if required (I recommend Rollup for the module handling, and `es5-shim` is always a good choice). Check out [Bublé's documentation](https://buble.surge.sh/guide/) for more
information.

## Install

```a
npm install --save-dev fly-buble
```

## Usage

```js
export default function * (fly) {
  yield fly
    .source('src/**/*.js')
    .buble({
      inline: true,
      transforms: {
        arrow: true,
        modules: false,
        dangerousForOf: true
      }
    })
    .target('dist/')
}
```

## API

### .buble(options)

To view all Bublé options, visit its [documentation](https://buble.surge.sh/guide/#using-the-javascript-api).

This plugin includes two additional options:

#### options.sourceMap
Type: `Boolean`<br>
Default: `true`<br>
Creates an external sourcemap by default. Disable _all_ mapping behavior by setting this to `false`.

#### options.inline
Type: `Boolean`<br>
Default: `false`<br>
If `true`, will append an internal sourcemap (data URI) to the file's contents **instead of** an external link (default). Also will not create a new `*.js.map` file. Requires that `options.sourceMap` be `true`.

## License

[MIT][mit] © [Josh Girvin][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/girvo
[contributors]: https://github.com/girvo/fly-buble/graphs/contributors
[releases]:     https://github.com/girvo/fly-buble/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-buble
[npm-ver-link]: https://img.shields.io/npm/v/fly-buble.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-buble.svg?style=flat-square
[travis-link]:  https://travis-ci.org/girvo/fly-buble
[travis-badge]: http://img.shields.io/travis/girvo/fly-buble.svg?style=flat-square
