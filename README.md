<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-upath/main/media/upath.png" alt="Icon of uPath" width="256" height="256">
  <h1>uPath</h1>
</div>

<br>

<h4 align="center">
  🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🖥️ Cross‑platform paths - Works seamlessly on Windows and UNIX‑like systems
- 🔄 Auto‑slash handling - Normalizes `/` and `\` based on OS or target platform
- 📂 UNC path support - Detects and correctly formats network paths
- ➕ Optional trailing slash - Add it only when you need it
- ⚡ Cached regex - Faster repeated path splitting
- 🪞 Aliases for brevity - `u()` for `upath()` convenience
- 🎯 Force‑platform modes - `uw()` for Windows, `ux()` for UNIX regardless of host
- 🧹 Empty‑safe - Returns an empty String for invalid or empty input
- 🛠️ Single transform core - All functions share one clean, reusable logic

<br>

> 💡 **TIP**
>
> *WHY `uPath`?
> Simple. Working with file paths inside `String`s in **Windows** + **JavaScript** is a hassle. By calling `u()`, the file path you provided is converted to your OS-preferred file path format, i.e. you can get away with writing "`C:/Users/JohnDoe/`" without having to worry about those backslashes that **Windows** uses. On the other hand, **UNIX-like** slashes in file paths are left as-is. An extra feature that `uPath` provides is redundant trailing slash removal.*
>
>

<br>

> ℹ️ **NOTE**
>
> ✨ Since version `1.2.0` support for UNC paths has been added, thanks to [unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path).
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/upath
```

```bash
yarn add @igorskyflyer/upath
```

```bash
npm i @igorskyflyer/upath
```

<br>
<br>

## 🤹🏼 API


`upath()` `=>` returns a proper file path depending on the host OS.

<br>

✨Note: `upath()` has an alias, named `u()` for your convenience.

<br>

Signature

```ts
upath(fsPath: string, addTrailingSlash: boolean = false): string
```

```ts
u(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```ts
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Windows OS

```ts
import { u } from '@igorskyflyer/upath'

console.log(u('C:/')) // returns 'C:\\'
console.log(u('C:/WINDOWS//////')) // returns 'C:\\WINDOWS\\'
console.log(u('C:/Users', true)) // returns 'C:\\Users\\'
console.log(u('\\\\ComputerName\\SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
console.log(u('//ComputerName/SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
```

<br>

#### Example - UNIX-like OS

```ts
import { u } from '@igorskyflyer/upath'

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

```ts
uw(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```ts
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Any OS

```ts
import { uw } from '@igorskyflyer/upath'

console.log(uw('C:/WINDOWS/System32')) // returns 'C:\\WINDOWS\\System32'
console.log(uw('//ComputerName/SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
```

<br>
<br>

`ux()` `=>` returns a proper file path for UNIX-like operating systems.

Signature

```ts
ux(fsPath: string, addTrailingSlash: boolean = false): string
```

<br>

Parameters

```ts
fsPath: string // a string that represents the path to process,

addTrailingSlash: boolean = false
// a boolean that represents whether a trailing slash should be added to the fsPath or not
```

<br>

#### Example - Any OS

```ts
import { ux } from '@igorskyflyer/upath'

console.log(ux('/usr/local')) // returns '/usr/local'
console.log(ux('\\\\ComputerName\\SharedFolder'))
// returns '//ComputerName/SharedFolder'
```

<br>
<br>

✨ Since `v.1.0.3` a string property named `slash` is exposed as well, provides an easy way to access file path OS-specific delimiter.

> On Windows `slash = '\\'`.

> On UNIX-like `slash = '/'`.

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-upath/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-upath/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/duoscribi](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

[@igorskyflyer/node-clone-js](https://www.npmjs.com/package/@igorskyflyer/node-clone-js)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

[@igorskyflyer/str-is-in](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

[@igorskyflyer/odin](https://www.npmjs.com/package/@igorskyflyer/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

[@igorskyflyer/mp3size](https://www.npmjs.com/package/@igorskyflyer/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
