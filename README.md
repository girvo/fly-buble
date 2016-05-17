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
See the example below. Keep in mind this is very new, and I haven't integrated source filenames into the source-mapping yet!

All options map directly to what's [available in the Javascript api](https://buble.surge.sh/guide/#using-the-javascript-api), and are passed directly through to Bublé unmodified (for now).

### Install

```a
npm install -D fly-buble
```

### Example

```js
export default function* () {
  yield this
    .source('src/**/*.js')
    .buble({
      transforms: {
        arrow: true,
        modules: false,
        dangerousForOf: true
      }
    })
    .target('dist/')
}
```

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
