export type Line = 'S1' | 'S11' | 'S2' | 'S21' | 'S3' | 'S31'
export type Lines = readonly Line[]

export interface OptionsFromCLI {
  allTweets: boolean
  lines: Lines
}

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }

// Full example response can be found here:
// https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html
/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-explicit-any */
export interface Tweet {
  created_at: string
  id: number
  id_str: string
  text: string
  displayTextRange?: readonly string[]
  truncated: boolean
  source: string
  in_reply_to_status_id: number | null
  in_reply_to_status_id_str: string | null
  in_reply_to_user_id: number | null
  in_reply_to_user_id_str: string | null
  in_reply_to_screen_name: string | null
  user: Record<string, any>
  geo: any
  coordinates: any
  place: any
  contributors: any
  quoted_status_id?: number
  quoted_status_id_str?: string
  quoted_status?: Record<string, any>
  quoted_status_permalink?: Record<string, any>
  is_quote_status: boolean
  extended_tweet?: Record<string, any>
  quote_count?: number
  reply_count?: number
  retweet_count?: number
  favorite_count?: number
  entities: {
    hashtags: readonly { text: string; indices: readonly number[] }[]
    urls: Record<string, any>
    user_mentions: readonly any[]
    symbols: readonly any[]
  }
  favorited: boolean
  retweeted: boolean
  possibly_sensitive?: boolean
  filter_level?: boolean
  lang: string
}
/* eslint-enable @typescript-eslint/camelcase, @typescript-eslint/no-explicit-any */
