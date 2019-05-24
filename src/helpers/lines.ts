import { Line, Lines } from '../types'

export const ALL_LINES: Lines = ['S1', 'S11', 'S2', 'S21', 'S3', 'S31']

export const stringToLine = (str: string): Line => `S${str}` as Line
