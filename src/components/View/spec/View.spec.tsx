import * as React from 'react'
import { render } from 'ink-testing-library'

import { View } from '..'

import { S3_TWEETS } from '../../../helpers/sample-tweets'

describe('View', () => {
  it('renders correctly when tweets are being fetched', () => {
    const lastFrame = render(<View tweets={null} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders correctly when tweets have been fetched', () => {
    const lastFrame = render(<View tweets={S3_TWEETS} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders correctly when tweets have not been fetched yet', () => {
    const lastFrame = render(<View tweets={[]} />).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })
})
