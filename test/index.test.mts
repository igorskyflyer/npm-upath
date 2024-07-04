// Author: Igor Dimitrijević (@igorskyflyer)

import { platform } from 'node:os'
import { assert, describe, suite, test } from 'vitest'
import { u, uw, ux } from '../src/index.mjs'

describe('🧪 uPath tests 🧪', () => {
	suite('any OS => ', () => {
		test('u() should return an empty string', () => {
			// @ts-ignore
			assert.equal(u(), '')
		})

		test('u("") should return an empty string', () => {
			assert.equal(u(''), '')
		})

		test('u(null) should return an empty string', () => {
			// @ts-ignore
			assert.equal(u(null), '')
		})

		test('uw("C:/WINDOWS/System32") should return "C:\\WINDOWS\\System32"', () => {
			assert.equal(uw('C:/WINDOWS/System32'), 'C:\\WINDOWS\\System32')
		})

		test('ux("/usr/local") should return "/usr/local"', () => {
			assert.equal(ux('/usr/local'), '/usr/local')
		})
	}) // all

	if (platform() === 'win32') {
		suite('Windows OS => ', () => {
			test('u("C:/") should return C:\\', () => {
				assert.equal(u('C:/'), 'C:\\')
			})

			// OH, NO! You fell asleep on your keyboard... again!
			// upath got you covered, mate!
			// it removes multiple trailing slashes for you! 😙
			test('u("C:/WINDOWS//////") should return C:\\WINDOWS\\', () => {
				assert.equal(u('C:/WINDOWS//////'), 'C:\\WINDOWS\\')
			})

			test('u("C:/Users", true) should return C:\\Users\\', () => {
				assert.equal(u('C:/Users', true), 'C:\\Users\\')
			})

			// attempt to add a trailing slash
			// to a already trailing slash 😵
			test('u("C:/Users/", true) should return C:\\Users\\', () => {
				assert.equal(u('C:/Users/', true), 'C:\\Users\\')
			})

			// just don't, okay? DON'T
			test('u("C:/WINDOWS\\Boot") should return C:\\WINDOWS\\Boot', () => {
				assert.equal(u('C:/WINDOWS\\Boot'), 'C:\\WINDOWS\\Boot')
			})

			test('u("\\\\ComputerName\\SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
				assert.equal(
					u('\\\\ComputerName\\SharedFolder'),
					'\\\\ComputerName\\SharedFolder'
				)
			})

			test('ux("\\\\ComputerName\\SharedFolder") should return //ComputerName/SharedFolder', () => {
				assert.equal(
					ux('\\\\ComputerName\\SharedFolder'),
					'//ComputerName/SharedFolder'
				)
			})

			test('uw("//ComputerName/SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
				assert.equal(
					uw('//ComputerName/SharedFolder'),
					'\\\\ComputerName\\SharedFolder'
				)
			})
		}) // windows
	} else {
		suite('UNIX-like OS =>', () => {
			test('u("/mnt/") should return /mnt/', () => {
				assert.equal(u('/mnt/'), '/mnt/')
			})

			test('u("/usr/bin/////////") should return /usr/bin/', () => {
				assert.equal(u('/usr/bin/////////'), '/usr/bin/')
			})

			test('u("/usr/bin", true) should return /usr/bin/', () => {
				assert.equal(u('/usr/bin', true), '/usr/bin/')
			})

			// attempt to add a trailing slash
			// to an already trailing slash 😵
			test('u("/usr/bin/", true) should return /usr/bin/', () => {
				assert.equal(u('/usr/bin/', true), '/usr/bin/')
			})

			test('u("//ComputerName/SharedFolder") should return //ComputerName/SharedFolder', () => {
				assert.equal(
					u('//ComputerName/SharedFolder'),
					'//ComputerName/SharedFolder'
				)
			})

			test('uw("//ComputerName/SharedFolder") should return \\\\ComputerName\\SharedFolder', () => {
				assert.equal(
					uw('//ComputerName/SharedFolder'),
					'\\\\ComputerName\\SharedFolder'
				)
			})

			test('ux("\\\\ComputerName\\SharedFolder") should return //ComputerName/SharedFolder', () => {
				assert.equal(
					ux('\\\\ComputerName\\SharedFolder'),
					'//ComputerName/SharedFolder'
				)
			})
		}) // unix-like
	}
}) // suite
