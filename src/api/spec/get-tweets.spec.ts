import { fetchTweets, filterByOptions, includesLinesFromCLI, isRecent } from '../get-tweets'

import { T } from '../twit-instance'

import { ALL_TWEETS, S1_AND_S3_TWEETS, S3_TWEET, S3_TWEETS } from '../../helpers/sample-tweets'

import { RecursivePartial, Tweet } from '../../types'

jest.mock('../twit-instance')
;(T.get as jest.Mock).mockImplementation(() => new Promise(resolve => resolve({ data: ALL_TWEETS })))

describe('fetchTweets', () => {
  it('extracts "data" field', () => {
    fetchTweets().then(tweets => {
      expect(tweets).toEqual(ALL_TWEETS)
    })
  })
})

describe('isRecent', () => {
  it('returns false when the tweet is at least 48 hours old', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => new Date('Fri May 24 2019 07:07:00 GMT+0200').getTime())

    /* eslint-disable @typescript-eslint/camelcase */
    const oldTweet: RecursivePartial<Tweet> = { created_at: 'Wed May 22 2019 07:07:00 GMT+0200' }
    /* eslint-enable @typescript-eslint/camelcase */

    expect(isRecent(oldTweet as Tweet)).toBe(false)
  })

  it('returns true when the tweet is less than 48 hours old', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => new Date('Fri May 24 2019 07:07:00 GMT+0200').getTime())

    /* eslint-disable @typescript-eslint/camelcase */
    const recentTweet: RecursivePartial<Tweet> = { created_at: 'Wed May 22 2019 07:07:01 GMT+0200' }
    /* eslint-enable @typescript-eslint/camelcase */

    expect(isRecent(recentTweet as Tweet)).toBe(true)
  })
})

describe('filterByOptions', () => {
  it('can return all tweets', () => {
    expect(filterByOptions({ allTweets: true, lines: ['S3'] })(ALL_TWEETS)).toEqual(ALL_TWEETS)
  })

  it('can return only the tweets including a specified line', () => {
    expect(filterByOptions({ allTweets: false, lines: ['S3'] })(ALL_TWEETS)).toEqual(S3_TWEETS)
  })

  it('can return only the tweets including all specified lines', () => {
    expect(filterByOptions({ allTweets: false, lines: ['S1', 'S3'] })(ALL_TWEETS)).toEqual(S1_AND_S3_TWEETS)
  })
})

describe('hasMatchingLinesWithOptionsFromCLI', () => {
  it('returns false when there is no match', () => {
    expect(includesLinesFromCLI(['S1', 'S11'])(S3_TWEET)).toEqual(false)
  })

  it('returns true when there is a match', () => {
    expect(includesLinesFromCLI(['S3'])(S3_TWEET)).toEqual(true)
  })
})
