import React from 'react'
import { Box, Color, Text } from 'ink'

import { coloursForTweet } from './colours-for-tweet'
import { processDate } from './process-date'
import { processText } from './process-text'

import { Tweet as TweetType } from '../../types'

export const Tweet = (props: TweetType) => {
  const { created_at: createdAt, text } = props

  const [bgRgb, rgb] = coloursForTweet(props)

  return (
    <Box>
      <Color bgRgb={bgRgb} rgb={rgb}>
        {processDate(createdAt)}
      </Color>
      <Text>{processText(text)}</Text>
    </Box>
  )
}
