import * as React from 'react'
import { render } from 'ink'

import { App } from './components/App'

import { parseOptionsFromCLI } from './parse-options'

render(<App {...parseOptionsFromCLI()} />)
