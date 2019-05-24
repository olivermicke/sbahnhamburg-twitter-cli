import * as React from 'react'
import { render } from 'ink'

import { View } from './components/View'

import { parseOptionsFromCLI } from './parse-options'

render(<View {...parseOptionsFromCLI()} />)
