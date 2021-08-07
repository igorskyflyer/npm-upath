import { platform } from 'os'
import { isValid } from '@igor.dvlpr/unc-path'

// let's cache the pattern
const pattern = /[\/\\]+/g
const isWindows = platform() === 'win32'
const winSlash = '\\'
const unixSlash = '/'

export const slash = isWindows ? winSlash : unixSlash

/**
 * Transforms the given path.
 * @private
 * @param {string} pathSlash
 * @param {string} fsPath
 * @param {boolean} [addTrailingSlash=false]
 * @returns {string}
 */
function transform(pathSlash, fsPath, addTrailingSlash = false) {
  if (!fsPath) {
    return ''
  }

  const isUnc = isValid(fsPath)

  const components = fsPath.split(pattern)

  if (components.length < 1) {
    return ''
  }

  if (isUnc) {
    const uncPrefix = components[0]

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
 * @param {string} fsPath
 * @param {boolean} [addTrailingSlash=false]
 * @returns {string}
 */
export function upath(fsPath, addTrailingSlash = false) {
  return transform(slash, fsPath, addTrailingSlash)
}

export { upath as u }

/**
 * Returns a proper file path for Windows operating system
 * while ignoring the current host operating system.
 * @see upath
 * @param {string} fsPath
 * @param {boolean} [addTrailingSlash=false]
 * @returns {string}
 */
export function uw(fsPath, addTrailingSlash = false) {
  return transform(winSlash, fsPath, addTrailingSlash)
}

/**
 * Returns a proper file path for UNIX-like operating systems
 * while ignoring the current host operating system.
 * @see upath
 * @param {string} fsPath
 * @param {boolean} [addTrailingSlash=false]
 * @returns {string}
 */
export function ux(fsPath, addTrailingSlash = false) {
  return transform(unixSlash, fsPath, addTrailingSlash)
}
