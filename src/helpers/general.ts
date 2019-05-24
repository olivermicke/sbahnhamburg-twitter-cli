/* eslint-disable @typescript-eslint/no-explicit-any */

export const includedIn = (arr: readonly any[]) => (item: any): boolean => arr.includes(item)

export const pluck = (key: string) => (record: Record<string, any>): any => record[key]

export const toUpperCase = (str: string) => str.toUpperCase()

export const unique = (arr: readonly any[]) => Array.from(new Set(arr)) as readonly any[]

/* eslint-enable @typescript-eslint/no-explicit-any */
