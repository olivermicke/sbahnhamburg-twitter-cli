import * as React from 'react'
import renderer from 'react-test-renderer'

import { Tweet } from '..'

import { S3_TWEET } from '../../../helpers/sample-tweets'

describe('Tweet', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Tweet {...S3_TWEET} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
