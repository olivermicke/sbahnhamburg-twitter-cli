import { linesInTweet } from '../../helpers'

import { Tweet } from '../../types'

type RGB = [number, number, number]

const GREY: RGB = [100, 100, 100]
const WHITE: RGB = [255, 255, 255]

const S1_GREEN: RGB = [36, 167, 59]
const S2_RED: RGB = [165, 19, 63]
const S3_PURPLE: RGB = [81, 26, 126]

// returns [bgRgb, rgb]
export const coloursForTweet = (tweet: Tweet): [RGB, RGB] => {
  switch (linesInTweet(tweet)[0]) {
    case 'S1':
    case 'S11':
      return [S1_GREEN, WHITE]
    case 'S2':
    case 'S21':
      return [S2_RED, WHITE]
    case 'S3':
    case 'S31':
      return [S3_PURPLE, WHITE]
    default:
      return [GREY, WHITE]
  }
}
