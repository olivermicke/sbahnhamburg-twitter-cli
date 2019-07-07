import * as React from 'react'

import { View } from '../View'

import { useTweets } from '../../hooks'

import { OptionsFromCLI } from '../../types'

export const App = (optionsFromCLI: OptionsFromCLI) => <View tweets={useTweets(optionsFromCLI)} />
