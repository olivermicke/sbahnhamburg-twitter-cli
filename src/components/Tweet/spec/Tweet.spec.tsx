import * as React from 'react'
import { render } from 'ink-testing-library'

import { Tweet } from '..'

import { S3_TWEET } from '../../../helpers/sample-tweets'

describe('Tweet', () => {
  it('renders correctly', () => {
    const lastFrame = render(<Tweet {...S3_TWEET} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })
})
