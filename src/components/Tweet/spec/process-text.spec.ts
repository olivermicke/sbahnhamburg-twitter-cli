import { processText } from '../process-text'

describe('processText', () => {
  it('adds leading space to text', () => {
    expect(processText('Die Bahnübergangsstörung ist behoben.')).toBe(' Die Bahnübergangsstörung ist behoben.')
  })

  it('stringifies entities', () => {
    expect(processText('Keine S-Bahnen zw. Ohlsdorf &lt;&gt; Airport.')).toBe(
      ' Keine S-Bahnen zw. Ohlsdorf <> Airport.',
    )
  })
})
