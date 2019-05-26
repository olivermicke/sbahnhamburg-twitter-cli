export const hoursBetween = (date1: number, date2: number): number => Math.abs(date1 - date2) / 36e5

export const isToday = (date: Date) => date.toDateString() === new Date().toDateString()
