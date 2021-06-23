const { platform } = require('os')

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
function u(fsPath, addTrailingSlash = false) {
  if (!fsPath) {
    return ''
  }

  if (addTrailingSlash) {
    fsPath += '/'
  }

  if (platform() == 'win32') {
    fsPath = fsPath.replace(/\/+/g, '\\')
  } else {
    fsPath = fsPath.replace(/\/+/g, '/')
  }

  return fsPath
}

module.exports = {
  u,
  upath: u,
}
