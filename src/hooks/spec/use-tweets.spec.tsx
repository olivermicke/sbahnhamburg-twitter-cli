import { renderHook } from '@testing-library/react-hooks'

import { useTweets } from '../'
import { getTweets } from '../../api'

import { Lines } from '../../types'

import { S3_TWEETS } from '../../helpers/sample-tweets'

const SAMPLE_OPTIONS = { allTweets: false, lines: ['S3'] as Lines }

jest.mock('../../api')

describe('useTweets', () => {
  it('calls getTweets with given CLI options', () => {
    ;(getTweets as jest.Mock).mockReturnValue(new Promise(() => S3_TWEETS))

    renderHook(() => useTweets(SAMPLE_OPTIONS))

    expect(getTweets).toHaveBeenCalledWith(SAMPLE_OPTIONS)
  })

  it('has state of `null` by default', () => {
    ;(getTweets as jest.Mock).mockReturnValue(new Promise(() => S3_TWEETS))

    const { result } = renderHook(() => useTweets(SAMPLE_OPTIONS))

    expect(result.current).toBeNull()
  })
})
