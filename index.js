const { platform } = require('os')

// let's cache the pattern
const pattern = /\/+/g

/**
 * Returns a proper file path for both UNIX-like
 * and Windows operating systems.
 *
 * Does not resolve paths and UNC paths
 * are not supported for now!
 *
 * **Note**: _upath()_ is an alias of _u()_.
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

  if (platform() === 'win32') {
    fsPath = fsPath.replace(pattern, '\\')
  } else {
    fsPath = fsPath.replace(pattern, '/')
  }

  return fsPath
}

module.exports = {
  upath,
  u: upath,
}
