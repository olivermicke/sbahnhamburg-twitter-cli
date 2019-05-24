import { useEffect, useState } from 'react'

import { getTweets } from '../../api'

import { OptionsFromCLI, Tweet } from '../../types'

export const useTweets = (optionsFromCLI: OptionsFromCLI): readonly Tweet[] => {
  const [tweets, setTweets] = useState([] as readonly Tweet[])

  const fetchTweets = (optionsFromCLI: OptionsFromCLI): void => {
    getTweets(optionsFromCLI).then(setTweets)
  }

  useEffect((): void => {
    fetchTweets(optionsFromCLI)
  }, [])

  return tweets
}
