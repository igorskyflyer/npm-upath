const chai = require('chai').assert
const { platform } = require('os')

const { u, uw, ux } = require('../index')

describe('uPath tests =>', () => {
  describe('any OS => ', () => {
    it('u() should return an empty string', () => {
      chai.equal(u(), '')
    })

    it('u("") should return an empty string', () => {
      chai.equal(u(''), '')
    })

    it('u(null) should return an empty string', () => {
      chai.equal(u(null), '')
    })

    it('uw("C:/WINDOWS/System32") should return "C:\\WINDOWS\\System32"', () => {
      chai.equal(uw('C:/WINDOWS/System32'), 'C:\\WINDOWS\\System32')
    })

    it('ux("/usr/local") should return "/usr/local"', () => {
      chai.equal(ux('/usr/local'), '/usr/local')
    })
  }) // all

  if (platform() === 'win32') {
    describe('Windows OS => ', () => {
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

      it('u("\\\\ComputerName\\SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
        chai.equal(
          u('\\\\ComputerName\\SharedFolder'),
          '\\\\ComputerName\\SharedFolder'
        )
      })

      it('ux("\\\\ComputerName\\SharedFolder") should return //ComputerName/SharedFolder', () => {
        chai.equal(
          ux('\\\\ComputerName\\SharedFolder'),
          '//ComputerName/SharedFolder'
        )
      })

      it('uw("//ComputerName/SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
        chai.equal(
          uw('//ComputerName/SharedFolder'),
          '\\\\ComputerName\\SharedFolder'
        )
      })
    }) // windows
  } else {
    describe('UNIX-like OS =>', () => {
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
      // to an already trailing slash 😵
      it('u("/usr/bin/", true) should return /usr/bin/', () => {
        chai.equal(u('/usr/bin/', true), '/usr/bin/')
      })

      it('u("//ComputerName/SharedFolder") should return //ComputerName/SharedFolder', () => {
        chai.equal(
          u('//ComputerName/SharedFolder'),
          '//ComputerName/SharedFolder'
        )
      })

      it('uw("//ComputerName/SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
        chai.equal(
          uw('//ComputerName/SharedFolder'),
          '\\\\ComputerName\\SharedFolder'
        )
      })

      it('ux("\\\\ComputerName\\SharedFolder") should return //ComputerName/SharedFolder', () => {
        chai.equal(
          ux('\\\\ComputerName\\SharedFolder'),
          '//ComputerName/SharedFolder'
        )
      })
    }) // unix-like
  }
}) // suite
