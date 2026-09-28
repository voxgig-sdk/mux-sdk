
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MuxSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MuxSDK.test()
    equal(testsdk instanceof MuxSDK, true,
      'MuxSDK.test() must return a client synchronously')
  })

})
