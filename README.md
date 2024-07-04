# uPath

<p align="center">
	<img src="https://github.com/igorskyflyer/npm-upath/raw/main/assets/uPath.png" alt="uPath logo" width="180" height="180">
</p>

🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

> Why `uPath`? Simple. Working with file paths inside `String`s in **Windows** + **JavaScript** is a hassle. By calling `u()`, the file path you provided is converted to your OS-preferred file path format, i.e. you can get away with writing "`C:/Users/JohnDoe/`" without having to worry about those backslashes that **Windows** uses. On the other hand, **UNIX-like** slashes in file paths are left as-is. An extra feature that `uPath` provides is redundant trailing slash removal.

<br>

✨Since version `1.2.0` support for UNC paths has been added, thanks to [unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path).

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/upath"
```

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
import { u } from '@igor.dvlpr/upath'

console.log(u('C:/')) // returns 'C:\\'
console.log(u('C:/WINDOWS//////')) // returns 'C:\\WINDOWS\\'
console.log(u('C:/Users', true)) // returns 'C:\\Users\\'
console.log(u('\\\\ComputerName\\SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
console.log(u('//ComputerName/SharedFolder')) // returns '\\\\ComputerName\\SharedFolder'
```

<br>

#### Example - UNIX-like OS

```ts
import { u } from '@igor.dvlpr/upath'

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
import { uw } from '@igor.dvlpr/upath'

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
import { ux } from '@igor.dvlpr/upath'

console.log(ux('/usr/local')) // returns '/usr/local'
console.log(ux('\\\\ComputerName\\SharedFolder'))
// returns '//ComputerName/SharedFolder'
```

<br>
<br>

✨ Since `v.1.0.3` a string property named `slash` is exposed as well, provides an easy way to access file path OS-specific delimiter.

> On Windows `slash = '\\'`.

> On UNIX-like `slash = '/'`.

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-upath/blob/main/LICENSE).

---

## 🧬 Related

[]()

> __

[]()

> __

[]()

> __

[]()

> __

[]()

> __

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
