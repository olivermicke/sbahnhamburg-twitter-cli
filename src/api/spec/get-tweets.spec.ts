import { fetchTweets, filterTweetsByOptions, includesLinesFromCLI } from '../get-tweets'

import { T } from '../twit-instance'

import { ALL_TWEETS, S1_AND_S3_TWEETS, S3_TWEET, S3_TWEETS } from '../../helpers/sample-tweets'

jest.mock('../twit-instance')
;(T.get as jest.Mock).mockImplementation(() => new Promise(resolve => resolve({ data: ALL_TWEETS })))

describe('fetchTweets', () => {
  it('extracts "data" field', () => {
    fetchTweets().then(tweets => {
      expect(tweets).toEqual(ALL_TWEETS)
    })
  })
})

describe('filterTweetsByOptions', () => {
  it('can return all tweets', () => {
    expect(filterTweetsByOptions({ allTweets: true, lines: ['S3'] })(ALL_TWEETS)).toEqual(ALL_TWEETS)
  })

  it('can return only the tweets including a specified line', () => {
    expect(filterTweetsByOptions({ allTweets: false, lines: ['S3'] })(ALL_TWEETS)).toEqual(S3_TWEETS)
  })

  it('can return only the tweets including all specified lines', () => {
    expect(filterTweetsByOptions({ allTweets: false, lines: ['S1', 'S3'] })(ALL_TWEETS)).toEqual(S1_AND_S3_TWEETS)
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
