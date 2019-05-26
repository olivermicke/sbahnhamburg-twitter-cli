import Twit from 'twit'

import { T } from './twit-instance'

import { hoursBetween, includedIn, linesInTweet } from '../helpers'

import { Lines, OptionsFromCLI, Tweet } from '../types'

const DEFAULT_COUNT = 20
/* eslint-disable @typescript-eslint/camelcase */
const GET_TWEETS_CONFIG: Twit.Params = {
  count: DEFAULT_COUNT,
  screen_name: 'sbahnhamburg',
  trim_user: true,
}
/* eslint-enable @typescript-eslint/camelcase */
// Documentation: https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
const GET_TWEETS_ENDPOINT = 'statuses/user_timeline'

export const includesLinesFromCLI = (linesFromCLI: Lines) => (tweet: Tweet) =>
  linesInTweet(tweet).some(includedIn(linesFromCLI))

export const fetchTweets = (count = DEFAULT_COUNT): Promise<readonly Tweet[]> =>
  T.get(GET_TWEETS_ENDPOINT, { ...GET_TWEETS_CONFIG, count }).then(
    (response: Twit.PromiseResponse) => response.data as readonly Tweet[],
  )

/* eslint-disable @typescript-eslint/camelcase */
export const isRecent = ({ created_at }: Tweet) => hoursBetween(Date.now(), new Date(created_at).getTime()) < 48
/* eslint-enable @typescript-eslint/camelcase */
const filterRecent = (tweets: readonly Tweet[]) => tweets.filter(isRecent)

export const filterByOptions = ({ allTweets, lines }: OptionsFromCLI) => (tweets: readonly Tweet[]): readonly Tweet[] =>
  allTweets ? tweets : tweets.filter(includesLinesFromCLI(lines))

export const getTweets = (optionsFromCLI: OptionsFromCLI): Promise<readonly Tweet[]> =>
  fetchTweets()
    .then(filterRecent)
    .then(filterByOptions(optionsFromCLI))
