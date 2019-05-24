export const processDate = (dateStr: string): string => {
  const [hours, minutes]: readonly string[] = new Date(dateStr)
    .toLocaleTimeString('de', { timeZone: 'Europe/Berlin', hour12: false })
    .split(':')

  return `[${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}]`
}
