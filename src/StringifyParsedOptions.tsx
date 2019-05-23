import * as React from 'react'
import { Text } from 'ink'

import { ParsedOptions } from './types'

interface Props extends ParsedOptions {}

export const StringifyParsedOptions = (props: Props) => (
  <Text>{JSON.stringify(props)}</Text>
)
