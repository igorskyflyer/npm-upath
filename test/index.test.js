const chai = require('chai').assert
const { platform } = require('os')

const { u } = require('../index')

describe('upath tests =>', () => {
  describe('all => ', () => {
    it('u() should return an empty string', () => {
      chai.equal(u(), '')
    })
  }) // all

  if (platform() === 'win32') {
    describe('Windows => ', () => {
      it('u("C:/") should return C:\\', () => {
        chai.equal(u('C:/'), 'C:\\')
      })

      // OH, NO! You fell asleep on your keyboard... again!
      // upath got you covered, mate!
      // it removes multiple trailing slashes for you! 😙
      it('u("C:/WINDOWS//////") should return C:\\WINDOWS\\', () => {
        chai.equal(u('C:/WINDOWS//////'), 'C:\\WINDOWS\\')
      })

      it('u("C:/Users", true) should return C:\\Users\\', () => {
        chai.equal(u('C:/Users', true), 'C:\\Users\\')
      })

      // attempt to add a trailing slash
      // to a already trailing slash 😵
      it('u("C:/Users/", true) should return C:\\Users\\', () => {
        chai.equal(u('C:/Users/', true), 'C:\\Users\\')
      })

      // just don't, okay? DON'T
      it('u("C:/WINDOWS\\Boot") should return C:\\WINDOWS\\Boot', () => {
        chai.equal(u('C:/WINDOWS\\Boot'), 'C:\\WINDOWS\\Boot')
      })
    }) // windows
  } else {
    describe('UNIX-like =>', () => {
      it('u("/mnt/") should return /mnt/', () => {
        chai.equal(u('/mnt/'), '/mnt/')
      })

      it('u("/usr/bin/////////") should return /usr/bin/', () => {
        chai.equal(u('/usr/bin/////////'), '/usr/bin/')
      })

      it('u("/usr/bin", true) should return /usr/bin/', () => {
        chai.equal(u('/usr/bin', true), '/usr/bin/')
      })

      // attempt to add a trailing slash
      // to a already trailing slash 😵
      it('u("/usr/bin/", true) should return /usr/bin/', () => {
        chai.equal(u('/usr/bin/', true), '/usr/bin/')
      })
    }) // unix-like
  }
}) // suite
