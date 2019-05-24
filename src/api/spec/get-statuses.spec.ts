import { fetchStatuses, filterStatusesByOptions } from '../get-statuses'

import { T } from '../twit-instance'

import { ALL_STATUSES, S3_STATUSES, S1_AND_S3_STATUSES } from './sample-statuses'

jest.mock('../twit-instance')

// @ts-ignore
T.get.mockImplementation(() => new Promise(resolve => resolve({ data: ALL_STATUSES })))

describe('fetchStatuses', () => {
  it('extracts "data" field', () => {
    fetchStatuses().then(statuses => {
      expect(statuses).toEqual(ALL_STATUSES)
    })
  })
})

describe('filterStatusesByOptions', () => {
  it('can return all statuses', () => {
    expect(filterStatusesByOptions(true, [3])(ALL_STATUSES)).toEqual(ALL_STATUSES)
  })

  it('can return only the statuses including a specified line', () => {
    expect(filterStatusesByOptions(false, [3])(ALL_STATUSES)).toEqual(S3_STATUSES)
  })

  it('can return only the statuses including all specified lines', () => {
    expect(filterStatusesByOptions(false, [1, 3])(ALL_STATUSES)).toEqual(S1_AND_S3_STATUSES)
  })
})
