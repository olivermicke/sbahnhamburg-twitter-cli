import { T } from '../twit-instance'

import config from '../../../config.json'

describe('Twit instance', () => {
  it('is properly instantiated with user config', () => {
    // @ts-ignore
    expect(T.config).toEqual(config.twit)
  })
})
