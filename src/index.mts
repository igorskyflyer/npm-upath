// Author: Igor Dimitrijević (@igorskyflyer)

import { isValid } from '@igor.dvlpr/unc-path'
import { platform } from 'node:os'

// let's cache the pattern
const pattern: RegExp = /[\/\\]+/g
const isWindows: boolean = platform() === 'win32'
const winSlash: string = '\\'
const unixSlash: string = '/'

export const slash: string = isWindows ? winSlash : unixSlash

function transform(
	pathSlash: string,
	fsPath: string,
	addTrailingSlash: boolean = false
): string {
	if (!fsPath) {
		return ''
	}

	const isUnc: boolean = isValid(fsPath)

	const components: string[] = fsPath.split(pattern)

	if (components.length < 1) {
		return ''
	}

	if (isUnc) {
		const uncPrefix: string = components[0]

		if (uncPrefix.charAt(0) !== pathSlash) {
			components[0] = pathSlash + uncPrefix
		}
	}

	fsPath = components.join(pathSlash)

	if (addTrailingSlash && fsPath.charAt(fsPath.length - 1) !== pathSlash) {
		fsPath += pathSlash
	}

	return fsPath
}

/**
 * Returns a proper file path for both UNIX-like
 * and Windows operating systems.
 *
 * Does not resolve paths!
 *
 * **Note**: _u()_ is an alias of _upath()_.
 */
export function upath(
	fsPath: string,
	addTrailingSlash: boolean = false
): string {
	return transform(slash, fsPath, addTrailingSlash)
}

/**
 * Alias of upath()
 * @see upath
 */
export { upath as u }

/**
 * Returns a proper file path for Windows operating system
 * while ignoring the current host operating system.
 * @see upath
 */
export function uw(fsPath: string, addTrailingSlash: boolean = false): string {
	return transform(winSlash, fsPath, addTrailingSlash)
}

/**
 * Returns a proper file path for UNIX-like operating systems
 * while ignoring the current host operating system.
 * @see upath
 */
export function ux(fsPath: string, addTrailingSlash: boolean = false): string {
	return transform(unixSlash, fsPath, addTrailingSlash)
}
