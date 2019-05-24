import * as commander from 'commander'

import { ERROR_MESSAGES } from './constants'
import { ALL_LINES, stringToLine } from './helpers'
import { defaultLines } from '../config.json'

import { Line, Lines, OptionsFromCLI } from './types'

const isValidLine = (line: Line): boolean => ALL_LINES.includes(line)

const linesAreValid = (lines: Lines): boolean => lines.every(isValidLine)

const defaultLinesIfValid = (): Lines => {
  if (linesAreValid(defaultLines as Lines)) return defaultLines as Lines
  else throw ERROR_MESSAGES.INVALID_DEFAULT_LINES
}

export const parseOptionsFromCLI = (): OptionsFromCLI => {
  let lines: Lines = defaultLinesIfValid()

  commander
    .option('-a, --all', 'all S-Bahn lines')
    .command('s <string> [otherLines...]')
    .action(
      (str: string, otherLines: string[]): void => {
        lines = otherLines.concat(str).map(stringToLine)
      },
    )

  commander.parse(process.argv)

  if (!linesAreValid(lines)) throw ERROR_MESSAGES.INVALID_LINE_ARGUMENTS

  return { allTweets: commander.all || false, lines }
}
