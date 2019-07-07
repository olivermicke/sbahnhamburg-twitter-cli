import * as React from 'react'
import { render } from 'ink-testing-library'

import { App } from '..'
import { useTweets } from '../../../hooks'

import { Lines } from '../../../types'

const SAMPLE_OPTIONS = { allTweets: false, lines: ['S3'] as Lines }

jest.mock('../../../hooks/use-tweets.ts')

describe('App', () => {
  it('calls useTweets with given options', () => {
    ;(useTweets as jest.Mock).mockImplementation(() => {})

    render(<App {...SAMPLE_OPTIONS} />)

    expect(useTweets).toHaveBeenCalledWith(SAMPLE_OPTIONS)
  })
})
