# cache-result

> You cache the results you know when to flush'em

```bash
npm install cache-result
```

It deals with nested cache without taking size into consideration. Instead, you
decided what part of caching is not related anymore and what part should be
preserved.

## Usage

```js
const cache = require("cache-result");

const { set, get, clear } = cache();
```

Each function take object input:

- `branch: string` - To set working branch for cache
- `key: string` - key to value in cache

### `set({ branch, key }, result)`

### `get({ branch, key })`

### `clear({ branch, key })`

To delete the whole branch pass `clear({ branch })` without `key`

```js
const cache = require("../src");

const { set, get, clear } = cache();

set({ branch: "foo", key: "hello" }, "sunshine");
set({ branch: "bar", key: "by" }, "sunset");

get({ branch: "foo", key: "hello" }); // sunshine
get({ branch: "bar", key: "by" }); // sunset

clear({ branch, "foo" });
get({ branch: "foo", key: "hello" }); // null
get({ branch: "bar", key: "by" }); // sunset
```

## Test

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/cache-result/blob/master/LICENSE)

### Related projects

- [builderz](https://github.com/jalal246/builderz) - Zero Configuration JS bundler.

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [corename](https://github.com/jalal246/corename) - Extracts package name.

- [move-position](https://github.com/jalal246/move-position) - Moves element
  index in an array.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for projects production.

- [textics](https://github.com/jalal246/textics) &
  [textics-stream](https://github.com/jalal246/textics-stream) - Counts lines,
  words, chars and spaces for a given string.

- [folo](https://github.com/jalal246/folo) - Form & Layout Components Built with React.
