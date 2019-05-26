import { processDate } from '../process-date'

describe('processDate', () => {
  it('parses hour and minute and surrounds it with square brackets', () => {
    expect(processDate('Thu May 23 2019 20:20:00 GMT+0200')).toBe('[20:20]')
  })

  it('pads hour and minute as appropriate', () => {
    expect(processDate('Thu May 23 2019 07:07:00 GMT+0200')).toBe('[07:07]')
  })
})
