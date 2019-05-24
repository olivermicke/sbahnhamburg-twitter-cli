const prependSpace = (str: string) => ` ${str}`

const stringifyEntities = (str: string) => str.replace(/&lt;/g, '<').replace(/&gt;/g, '>')

export const processText = (text: string) => prependSpace(stringifyEntities(text))
