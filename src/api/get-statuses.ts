import Twit from 'twit'

import { T } from './twit-instance'

import { Lines, Status } from '../types'

const DEFAULT_COUNT = 20
/* eslint-disable @typescript-eslint/camelcase */
const GET_STATUSES_CONFIG: Twit.Params = {
  count: DEFAULT_COUNT,
  screen_name: 'sbahnhamburg',
  trim_user: true,
}
/* eslint-enable @typescript-eslint/camelcase */
const GET_STATUSES_ENDPOINT = 'statuses/user_timeline'

export const fetchStatuses = (count = DEFAULT_COUNT): Promise<readonly Status[]> =>
  T.get(GET_STATUSES_ENDPOINT, { ...GET_STATUSES_CONFIG, count }).then(
    (response: Twit.PromiseResponse) => response.data as readonly Status[],
  )

export const filterStatusesByOptions = (allStatuses: boolean, lines: Lines) => (
  statuses: readonly Status[],
): readonly Status[] =>
  allStatuses
    ? statuses
    : statuses.filter(
        (status: Status): boolean => {
          const hashtagTexts: readonly string[] = status.entities.hashtags.map(({ text }) => text.toLowerCase())
          const lineStrings = lines.map(line => `s${line}`)
          return hashtagTexts.filter((hashtagText: string) => lineStrings.includes(hashtagText)).length > 0
        },
      )

export const getStatuses = (allStatuses: boolean, lines: Lines): Promise<readonly Status[]> =>
  fetchStatuses().then(filterStatusesByOptions(allStatuses, lines))
