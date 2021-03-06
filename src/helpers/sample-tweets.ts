import { Tweet } from '../types'

/* eslint-disable @typescript-eslint/camelcase */
export const ALL_TWEETS: readonly Tweet[] = [
  {
    created_at: 'Thu May 23 05:35:50 +0000 2019',
    id: 1131433536546906100,
    id_str: '1131433536546906112',
    text: 'Die Bahnübergangsstörung ist behoben. Der Regelbetrieb wird wieder aufgenommen. #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S3', indices: [80, 83] },
        { text: 'hvv', indices: [84, 88] },
        { text: 'sbahnhh', indices: [89, 97] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 1,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Wed May 22 17:09:41 +0000 2019',
    id: 1131245759003844600,
    id_str: '1131245759003844609',
    text: '#S1, #S3 wieder durch den Citytunnel. Polizeieinsatz beendet. #S1 #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S1', indices: [0, 3] },
        { text: 'S3', indices: [5, 8] },
        { text: 'S1', indices: [62, 65] },
        { text: 'S3', indices: [66, 69] },
        { text: 'hvv', indices: [70, 74] },
        { text: 'sbahnhh', indices: [75, 83] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 3,
    favorite_count: 5,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Sat May 18 22:03:04 +0000 2019',
    id: 1129870042068336600,
    id_str: '1129870042068336640',
    text: 'Polizeieinsatz am Airport beendet. Der Regelbetrieb wird wieder aufgenommen. #S1 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S1', indices: [77, 80] },
        { text: 'hvv', indices: [81, 85] },
        { text: 'sbahnhh', indices: [86, 94] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 4,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Fri May 17 15:27:02 +0000 2019',
    id: 1129407987095920600,
    id_str: '1129407987095920642',
    text:
      'Update 3: Weiterhin Weichenstörung in Ohlsdorf. Aktuell wieder Zugverkehr zwischen Ohlsdorf und Poppenbüttel, weite… https://t.co/k5XdnXCiXO',
    truncated: true,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: 'https://t.co/k5XdnXCiXO',
          expanded_url: 'https://twitter.com/i/web/status/1129407987095920642',
          display_url: 'twitter.com/i/web/status/1…',
          indices: [117, 140],
        },
      ],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 6,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
]

export const S1_AND_S3_TWEETS: readonly Tweet[] = [
  {
    created_at: 'Thu May 23 05:35:50 +0000 2019',
    id: 1131433536546906100,
    id_str: '1131433536546906112',
    text: 'Die Bahnübergangsstörung ist behoben. Der Regelbetrieb wird wieder aufgenommen. #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S3', indices: [80, 83] },
        { text: 'hvv', indices: [84, 88] },
        { text: 'sbahnhh', indices: [89, 97] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 1,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Wed May 22 17:09:41 +0000 2019',
    id: 1131245759003844600,
    id_str: '1131245759003844609',
    text: '#S1, #S3 wieder durch den Citytunnel. Polizeieinsatz beendet. #S1 #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S1', indices: [0, 3] },
        { text: 'S3', indices: [5, 8] },
        { text: 'S1', indices: [62, 65] },
        { text: 'S3', indices: [66, 69] },
        { text: 'hvv', indices: [70, 74] },
        { text: 'sbahnhh', indices: [75, 83] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 3,
    favorite_count: 5,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Sat May 18 22:03:04 +0000 2019',
    id: 1129870042068336600,
    id_str: '1129870042068336640',
    text: 'Polizeieinsatz am Airport beendet. Der Regelbetrieb wird wieder aufgenommen. #S1 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S1', indices: [77, 80] },
        { text: 'hvv', indices: [81, 85] },
        { text: 'sbahnhh', indices: [86, 94] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 4,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
]

export const S3_TWEET: Tweet = {
  created_at: 'Thu May 23 05:35:50 +0000 2019',
  id: 1131433536546906100,
  id_str: '1131433536546906112',
  text: 'Die Bahnübergangsstörung ist behoben. Der Regelbetrieb wird wieder aufgenommen. #S3 #hvv #sbahnhh',
  truncated: false,
  entities: {
    hashtags: [
      { text: 'S3', indices: [80, 83] },
      { text: 'hvv', indices: [84, 88] },
      { text: 'sbahnhh', indices: [89, 97] },
    ],
    symbols: [],
    user_mentions: [],
    urls: [],
  },
  source: '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: { id: 95618880, id_str: '95618880' },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 1,
  favorite_count: 4,
  favorited: false,
  retweeted: false,
  lang: 'de',
}

export const S3_TWEETS: readonly Tweet[] = [
  {
    created_at: 'Thu May 23 05:35:50 +0000 2019',
    id: 1131433536546906100,
    id_str: '1131433536546906112',
    text: 'Die Bahnübergangsstörung ist behoben. Der Regelbetrieb wird wieder aufgenommen. #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S3', indices: [80, 83] },
        { text: 'hvv', indices: [84, 88] },
        { text: 'sbahnhh', indices: [89, 97] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 1,
    favorite_count: 4,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
  {
    created_at: 'Wed May 22 17:09:41 +0000 2019',
    id: 1131245759003844600,
    id_str: '1131245759003844609',
    text: '#S1, #S3 wieder durch den Citytunnel. Polizeieinsatz beendet. #S1 #S3 #hvv #sbahnhh',
    truncated: false,
    entities: {
      hashtags: [
        { text: 'S1', indices: [0, 3] },
        { text: 'S3', indices: [5, 8] },
        { text: 'S1', indices: [62, 65] },
        { text: 'S3', indices: [66, 69] },
        { text: 'hvv', indices: [70, 74] },
        { text: 'sbahnhh', indices: [75, 83] },
      ],
      symbols: [],
      user_mentions: [],
      urls: [],
    },
    source:
      '<a href="http://www.hacon.de/hafas/internet/fahrplan-cms-him" rel="nofollow">HAFAS Information Manager</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: { id: 95618880, id_str: '95618880' },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 3,
    favorite_count: 5,
    favorited: false,
    retweeted: false,
    lang: 'de',
  },
]
/* eslint-enable @typescript-eslint/camelcase */
