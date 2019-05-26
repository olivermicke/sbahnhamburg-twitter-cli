import * as React from 'react'
import { render } from 'ink-testing-library'

import { groupByDay, Tweets } from '../Tweets'

import { isToday } from '../../../helpers/date'
import { ALL_TWEETS } from '../../../helpers/sample-tweets'

jest.mock('../../../helpers/date.ts')

const mockedComparison = (comparisonDate: Date) =>
  comparisonDate.toDateString() === new Date('Thu May 23 2019 19:00:00 GMT+0200').toDateString()

describe('Tweets', () => {
  it('render correctly grouped by date', () => {
    ;(isToday as jest.Mock).mockImplementation(mockedComparison)

    const lastFrame = render(<Tweets>{ALL_TWEETS}</Tweets>).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders no "Today" divider and displays message when there are no tweets today', () => {
    ;(isToday as jest.Mock).mockReturnValue(false)

    const lastFrame = render(<Tweets>{ALL_TWEETS}</Tweets>).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })

  it('renders no "Yesterday" divider and does not display a message when there are no tweets yesterday', () => {
    ;(isToday as jest.Mock).mockReturnValue(true)

    const lastFrame = render(<Tweets>{ALL_TWEETS}</Tweets>).lastFrame()

    expect(lastFrame).toMatchSnapshot()
  })
})

describe('groupByDay', () => {
  it('separates tweets from a day and the day before', () => {
    ;(isToday as jest.Mock).mockImplementation(mockedComparison)

    const groupedTweets = groupByDay(ALL_TWEETS)
    expect(groupedTweets.today.length).toEqual(1)
    expect(groupedTweets.yesterday.length).toEqual(3)
  })
})
