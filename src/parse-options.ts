import * as commander from 'commander'

import { Line, Lines, ParsedOptions } from './types'

const DEFAULT_LINE: Line = 3
const VALID_LINES: Lines = [1, 11, 2, 21, 3, 31]

const isValidLine = (line: Line): boolean => VALID_LINES.includes(line)
const linesAreValid = (lines: Lines): boolean => lines.every(isValidLine)
const strToLine = (line: string): Line => Number(line) as Line

export const parseOptions = (): ParsedOptions => {
  let lines: Lines = [DEFAULT_LINE]

  commander
    .option('-a, --all', 'all S-Bahn lines')
    .command('s <number> [otherLines...]')
    .action(
      (lineString: string, otherLines: readonly string[]): void => {
        lines = otherLines.map(strToLine).concat(strToLine(lineString))
      },
    )

  commander.parse(process.argv)

  if (!linesAreValid(lines)) throw 'Invalid S-Bahn line(s).'

  return { allStatuses: commander.all || false, lines }
}
