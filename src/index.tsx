import * as React from 'react'
import { render } from 'ink'

import { StringifyParsedOptions } from './StringifyParsedOptions'

import { parseOptions } from './parse-options'

render(<StringifyParsedOptions {...parseOptions()} />)
