react-global
============

A simple React component for exposing global properties on your page. This library is particularly useful for isomorphic apps, where a set of values must be shared between the server and client (e.g. passing initialization variables to third-party libraries).

## Installation
```sh
npm install react-global
```

## Code Examples

### Setting Global Values

```js
var Global = require('react-global');

<Global values={{
  FOO: this.props.foo,
  BAR: this.props.bar
}} />

```

### Getting Global Values
```js
Global.get('FOO')
```

Note: every Global variable that you declare will actually be available on the window object as a true browser global.
```js
  Global.get('FOO') === window.FOO === window['FOO'] === FOO
    
```

## Contributors

Implementation by Captivation Software (@teamcaptivation), overall design by Adam Nalisnick (@theadam4257)

By all means, if you see room for improvement, let us know!

## License

MIT License

