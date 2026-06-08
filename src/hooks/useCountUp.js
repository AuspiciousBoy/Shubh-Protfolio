import { useEffect, useState } from 'react'

export function useCountUp(end, isActive, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let start = 0
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [end, isActive, duration])

  return value
}
