import React from 'react'
import { Box, Color, Text } from 'ink'
// @ts-ignore
import Spinner from 'ink-spinner'

import { Tweets } from '../Tweets'

import { useTweets } from '../hooks'

import { OptionsFromCLI, Tweet } from '../../types'

export const View = (optionsFromCLI: OptionsFromCLI) => {
  const tweets = useTweets(optionsFromCLI)

  const hasTweets = tweets && tweets.length > 0
  const hasFetched = tweets !== null

  if (hasTweets) {
    return (
      <Box flexDirection='column'>
        <Tweets>{tweets as readonly Tweet[]}</Tweets>
      </Box>
    )
  } else if (hasFetched) {
    return <Text>No recent tweets found.</Text>
  } else {
    return (
      <Box flexDirection='row'>
        <Color green>
          <Spinner type='dots' />
        </Color>{' '}
        <Text>Loading</Text>
      </Box>
    )
  }
}
