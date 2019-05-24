import { linesInTweet } from '../'

import { Tweet } from '../../types'

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }

const createSampleTweet = (hashtagTexts: readonly string[]): RecursivePartial<Tweet> => ({
  entities: {
    hashtags: hashtagTexts.map(text => ({ text })),
  },
})

describe('linesInTweets', () => {
  it('filters lines from tweet hashtags', () => {
    const sampleTweet = createSampleTweet(['Betriebsstörung', 'S3', 'S31'])
    expect(linesInTweet(sampleTweet as Tweet)).toEqual(['S3', 'S31'])
  })

  it('always returns uppercased lines', () => {
    const sampleTweet = createSampleTweet(['s3'])
    expect(linesInTweet(sampleTweet as Tweet)).toEqual(['S3'])
  })
})
