import { linesInTweet } from '../../helpers'

import { Tweet } from '../../types'

type RGB = [number, number, number]

const GREY: RGB = [100, 100, 100]
const WHITE: RGB = [255, 255, 255]

const S1_GREEN: RGB = [36, 167, 59]
const S2_RED: RGB = [165, 19, 63]
const S3_PURPLE: RGB = [81, 26, 126]

interface TweetColour {
  bgRgb: RGB
  rgb: RGB
}

export const coloursForTweet = (tweet: Tweet): TweetColour => {
  switch (linesInTweet(tweet)[0]) {
    case 'S1':
    case 'S11':
      return { bgRgb: S1_GREEN, rgb: WHITE }
    case 'S2':
    case 'S21':
      return { bgRgb: S2_RED, rgb: WHITE }
    case 'S3':
    case 'S31':
      return { bgRgb: S3_PURPLE, rgb: WHITE }
    default:
      return { bgRgb: GREY, rgb: WHITE }
  }
}
