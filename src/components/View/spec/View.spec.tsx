import * as React from 'react'
import { render } from 'ink-testing-library'

import { View } from '..'
import { useTweets } from '../../hooks'

import { S3_TWEETS } from '../../../helpers/sample-tweets'

jest.mock('../../hooks/use-tweets.ts')

describe('View', () => {
  it('renders correctly when tweets are being fetched', () => {
    ;(useTweets as jest.Mock).mockReturnValue(null)

    const lastFrame = render(<View allTweets={false} lines={['S3']} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders correctly when tweets have been fetched', () => {
    ;(useTweets as jest.Mock).mockReturnValue(S3_TWEETS)

    const lastFrame = render(<View allTweets={false} lines={['S3']} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders correctly when tweets have not been fetched yet', () => {
    ;(useTweets as jest.Mock).mockReturnValue([])

    const lastFrame = render(<View allTweets={false} lines={['S3']} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })
})
