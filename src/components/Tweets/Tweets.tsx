import * as React from 'react'
import { Text } from 'ink'
// @ts-ignore
import Divider from 'ink-divider'

import { Tweet } from '../Tweet'

import { isToday } from '../../helpers'

import { Tweet as TweetType } from '../../types'

interface Props {
  children: readonly TweetType[]
}

interface TweetsGroupedByDay {
  today: readonly TweetType[]
  yesterday: readonly TweetType[]
}

export const groupByDay = (tweets: readonly TweetType[]): TweetsGroupedByDay =>
  tweets.reduce(
    (groupedTweets: TweetsGroupedByDay, tweet: TweetType) =>
      isToday(new Date(tweet.created_at))
        ? { ...groupedTweets, today: groupedTweets.today.concat(tweet) }
        : { ...groupedTweets, yesterday: groupedTweets.yesterday.concat(tweet) },
    { today: [], yesterday: [] },
  )

const renderTweet = (tweet: TweetType) => <Tweet key={tweet.id} {...tweet} />

export const Tweets = ({ children: tweets }: Props) => {
  const groupedTweets = groupByDay(tweets)

  return (
    <>
      {groupedTweets.today.length > 0 ? (
        <>
          <Divider title='Today' titleColor='grey' />
          {groupedTweets.today.map(renderTweet)}
        </>
      ) : (
        <Text>No tweets found today.</Text>
      )}
      {groupedTweets.yesterday.length > 0 ? (
        <>
          <Divider title='Yesterday' titleColor='grey' />
          {groupedTweets.yesterday.map(renderTweet)}
        </>
      ) : (
        <></>
      )}
    </>
  )
}
