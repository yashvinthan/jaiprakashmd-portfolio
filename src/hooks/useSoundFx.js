import { useCallback, useRef } from 'react'

export default function useSoundFx() {
  const ctxRef = useRef(null)

  const ensureContext = useCallback(() => {
    if (typeof window === 'undefined') return null
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      ctxRef.current = new AudioCtx()
    }
    return ctxRef.current
  }, [])

  const playTone = useCallback(
    (frequency = 520, duration = 0.12, gainValue = 0.12) => {
      const ctx = ensureContext()
      if (!ctx) return
      const now = ctx.currentTime
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()

      oscillator.type = 'sine'
      oscillator.frequency.value = frequency

      gain.gain.value = gainValue
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

      oscillator.connect(gain)
      gain.connect(ctx.destination)
      oscillator.start(now)
      oscillator.stop(now + duration)
    },
    [ensureContext]
  )

  const playHover = useCallback(() => playTone(640, 0.15, 0.08), [playTone])
  const playClick = useCallback(() => playTone(420, 0.18, 0.14), [playTone])

  return { playHover, playClick }
}
