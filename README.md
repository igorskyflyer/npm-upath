## uPath

<br>

🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in `path.normalize()`. 🧬

<br>

> Why `uPath`? Simple. Working with file paths in **Windows** + **JavaScript** is a hassle. By calling `u()`, the file path you provided is converted to your OS-preferred file path format, i.e. you can get away with writing "`C:/Users/JohnDoe/`" without having to worry about those backslashes that **Windows** uses. On the other hand, **UNIX-like** slashes in file paths are left as-is. An extra feature that `uPath` provides is redundant trailing slash removal.

<br>

### Usage

<br>

Install it first by doing

```shell
npm i @igor.dvlpr/upath
```

and call `require` in your code, i.e.:

```js
const { u } = require('@igor.dvlpr/upath')

// do something cool with it
```

A single function is provided, called `upath()` with an alias `u()` for your convenience.

```js
upath(fsPath: string, addTrailingSlash: boolean = false): string

u(fsPath: string, addTrailingSlash: boolean = false): string
```

Parameters

```js
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Windows

```js
const { u } = require('@igor.dvlpr/upath)

console.log(u('C:/')) // returns "C:\\"
console.log(u('C:/WINDOWS//////')) // returns "C:\\WINDOWS\\"
console.log(u('C:/Users', true)) // returns "C:\\Users\\"
```

<br>

#### Example - UNIX-like

```js
const { u } = require('@igor.dvlpr/upath)

console.log(u('/mnt/')) // returns "/mnt/"
console.log(u('/usr/bin/////////')) // returns "/usr/bin/"
console.log(u('/usr/bin', true)) // returns "/usr/bin/"
```
