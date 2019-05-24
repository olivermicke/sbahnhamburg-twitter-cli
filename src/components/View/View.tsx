import React from 'react'
import { Text, Box } from 'ink'

import { Tweet } from '../Tweet'

import { useTweets } from '../hooks'

import { OptionsFromCLI, Tweet as TweetType } from '../../types'

export const View = (optionsFromCLI: OptionsFromCLI) => {
  const tweets = useTweets(optionsFromCLI)

  const hasTweets = tweets && tweets.length > 0

  return (
    <Box flexDirection='column'>
      {hasTweets ? tweets.map((tweet: TweetType) => <Tweet key={tweet.id} {...tweet} />) : <Text>Loading...</Text>}
    </Box>
  )
}
