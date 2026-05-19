import { useEffect, useState, useRef } from 'react'

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const follower = useRef({ x: -100, y: -100 })
  const followerEl = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const isTouch = useRef(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      isTouch.current = true
      return
    }

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    let raf
    const animate = () => {
      follower.current.x += (pos.x - follower.current.x) * 0.09
      follower.current.y += (pos.y - follower.current.y) * 0.09
      if (followerEl.current) {
        followerEl.current.style.transform = `translate(${follower.current.x}px, ${follower.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const addHover = () => {
      document.querySelectorAll('a, button, input, textarea, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true))
        el.addEventListener('mouseleave', () => setHovering(false))
      })
    }
    const obs = new MutationObserver(addHover)
    obs.observe(document.body, { childList: true, subtree: true })
    addHover()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [pos.x, pos.y])

  if (isTouch.current) return null

  return (
    <>
      <div
        className={`cursor-dot ${hovering ? 'cursor-dot--hover' : ''}`}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={followerEl}
        className={`cursor-follower ${hovering ? 'cursor-follower--hover' : ''}`}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  )
}
export default Cursor
