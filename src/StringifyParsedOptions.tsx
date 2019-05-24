import * as React from 'react'
import { Text } from 'ink'

import { ParsedOptions } from './types'

export const StringifyParsedOptions = (props: ParsedOptions): JSX.Element => <Text>{JSON.stringify(props)}</Text>
