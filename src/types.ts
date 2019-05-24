export type Line = 1 | 11 | 2 | 21 | 3 | 31
export type Lines = readonly Line[]

export interface ParsedOptions {
  allLines: boolean
  lines: Lines
}
