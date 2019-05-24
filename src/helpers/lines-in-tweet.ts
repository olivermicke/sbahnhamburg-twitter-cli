import { ALL_LINES, pluck, toUpperCase, unique } from '.'

import { Line, Lines, Tweet } from '../types'

const pluckText = pluck('text')

const textIncludesLine = ({ text }: { text: string }) => ALL_LINES.includes(text.toUpperCase() as Line)

export const linesInTweet = ({ entities: { hashtags } }: Tweet): Lines =>
  unique(
    hashtags
      .filter(textIncludesLine)
      .map(pluckText)
      .map(toUpperCase),
  )
