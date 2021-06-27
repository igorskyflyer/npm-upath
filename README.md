## uPath

<p align="center">
	<img src="https://github.com/igorskyflyer/npm-upath/raw/main/assets/uPath.png" alt="uPath logo" width="180" height="180">
</p>

🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in `path.normalize()`. 🧬

<br>

> Why `uPath`? Simple. Working with file paths inside `String`s in **Windows** + **JavaScript** is a hassle. By calling `u()`, the file path you provided is converted to your OS-preferred file path format, i.e. you can get away with writing "`C:/Users/JohnDoe/`" without having to worry about those backslashes that **Windows** uses. On the other hand, **UNIX-like** slashes in file paths are left as-is. An extra feature that `uPath` provides is redundant trailing slash removal.

✨Since version `1.2.0` support for UNC paths has been added, thanks to [unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path).

<br>

### Usage

<br>

Install it first by doing

```shell
npm i @igor.dvlpr/upath
```

and call `require` in your code, i.e.:

```js
const upath = require('@igor.dvlpr/upath')
// or destructure the object and import only needed function(s)
// e.g.
const { u } = require('@igor.dvlpr/upath')

// do something cool with it
```

<br>

#### API

<br>

`upath()` `=>` returns a proper file path depending on the host OS.

<br>

✨Note: `upath()` has an alias, named `u()` for your convenience.

<br>

Signature

```js
upath(fsPath: string, addTrailingSlash: boolean = false): string
```

```js
u(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```js
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Any OS

```js
const { u } = require('@igor.dvlpr/upath')

console.log(u()) // returns ''
console.log(u('')) // returns ''
console.log(u(null)) // returns ''
```

<br>

#### Example - Windows OS

```js
const { u } = require('@igor.dvlpr/upath')

console.log(u('C:/')) // returns 'C:\\'
console.log(u('C:/WINDOWS//////')) // returns 'C:\\WINDOWS\\'
console.log(u('C:/Users', true)) // returns 'C:\\Users\\'
console.log(u('\\\\ComputerName\\SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
console.log(u('//ComputerName/SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
```

<br>

#### Example - UNIX-like OS

```js
const { u } = require('@igor.dvlpr/upath')

console.log(u('/mnt/')) // returns '/mnt/'
console.log(u('/usr/bin/////////')) // returns '/usr/bin/'
console.log(u('/usr/bin', true)) // returns '/usr/bin/'
console.log(u('//ComputerName/SharedFolder')) // returns '//ComputerName/SharedFolder'
console.log(u('\\\\ComputerName\\SharedFolder')) // returns '//ComputerName/SharedFolder'
```

<br>
<br>

`uw()` `=>` returns a proper file path for Windows operating system.

Signature

```js
uw(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```js
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Any OS

```js
const { uw } = require('@igor.dvlpr/upath')

console.log(uw('C:/WINDOWS/System32')) // returns 'C:\\WINDOWS\\System32'
console.log(uw('//ComputerName/SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
```

<br>
<br>

`ux()` `=>` returns a proper file path for UNIX-like operating systems.

Signature

```js
ux(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```js
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Any OS

```js
const { ux } = require('@igor.dvlpr/upath')

console.log(ux('/usr/local')) // returns '/usr/local'
console.log(ux('\\\\ComputerName\\SharedFolder'))
// returns '//ComputerName/SharedFolder'
```

<br>
<br>

✨ Since `v.1.0.3` a string property named `slash` is exposed as well, provides an easy way to access file path OS-specific delimiter.

> On Windows `slash = '\\'`.

> On UNIX-like `slash = '/'`.
