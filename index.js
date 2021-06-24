const { platform } = require('os')

// let's cache the pattern
const pattern = /\/+/g
const isWindows = platform() === 'win32'
const slash = isWindows ? '\\' : '/'

/**
 * Returns a proper file path for both UNIX-like
 * and Windows operating systems.
 *
 * Does not resolve paths and UNC paths
 * are not supported for now!
 *
 * **Note**: _u()_ is an alias of _upath()_.
 * @param {string} fsPath
 * @param {boolean} [addTrailingSlash=false]
 * @returns {string}
 */
function upath(fsPath, addTrailingSlash = false) {
  if (!fsPath) {
    return ''
  }

  if (addTrailingSlash) {
    fsPath += '/'
  }

  return fsPath.replace(pattern, slash)
}

module.exports = {
  upath,
  u: upath,
  slash,
}
