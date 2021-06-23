## uPath

<br>

🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬

<br>

### Usage

Provides a single function, called **upath()** with an alias **u()** for your convenience.

```js
upath(fsPath: string, addTrailingSlash: boolean = false): string

u(fsPath: string, addTrailingSlash: boolean = false): string
```

> Parameters

```js
fsPath: string // a string that represent the path to process,

addTrailingSlash = false // a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example

```js
const { u } = require('@igor.dvlpr/upath)

console.log(u('C:/')) // returns "C:\\"
console.log(u('C:/WINDOWS//////')) // returns "C:\\WINDOWS\\"
console.log(u('C:/Users', true)) // returns "C:\\Users\\"
```
