import * as React from 'react'
import renderer from 'react-test-renderer'

import { View } from '..'
import { useTweets } from '../../hooks'

import { S3_TWEETS } from '../../../helpers/sample-tweets'

jest.mock('../../hooks/use-tweets.ts')

describe('View', () => {
  it('renders correctly when tweets have been fetched', () => {
    ;(useTweets as jest.Mock).mockImplementationOnce(() => S3_TWEETS)

    const component = renderer.create(<View allTweets={false} lines={['S3']} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders correctly when tweets have not been fetched yet', () => {
    ;(useTweets as jest.Mock).mockImplementationOnce(() => [])

    const component = renderer.create(<View allTweets={false} lines={['S3']} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
