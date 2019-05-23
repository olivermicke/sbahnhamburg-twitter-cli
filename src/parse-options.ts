import * as commander from 'commander'

import { Line, Lines, ParsedOptions } from './types'

const DEFAULT_LINE: Line = 3
const VALID_LINES: Lines = [1, 11, 2, 21, 3, 31]

const isValidLine = (line: Line): Boolean => VALID_LINES.includes(line)
const linesAreValid = (lines: Lines): Boolean => lines.every(isValidLine)
const strToLine = (line: String): Line => Number(line) as Line

export const parseOptions = (): ParsedOptions => {
  let lines: Lines = [DEFAULT_LINE]

  commander
    .option('-a, --all', 'all S-Bahn lines')
    .command('s <number> [otherLines...]')
    .action((lineString: String, otherLines: readonly String[]) => {
      lines = otherLines.map(strToLine).concat(strToLine(lineString))
    })

  commander.parse(process.argv)

  if (!linesAreValid(lines)) throw 'Invalid S-Bahn line(s).'

  return { allLines: commander.all || false, lines }
}
