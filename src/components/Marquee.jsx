function Marquee() {
  const items = ['INNOVATOR', 'DEVELOPER', 'STUDENT', 'CREATOR', 'THINKER', 'BUILDER']

  return (
    <div className="marquee">
      <div className="marquee__glow" aria-hidden="true" />
      <div className="marquee__track">
        {[...Array(3)].map((_, setIdx) => (
          <div key={setIdx} className="marquee__content" aria-hidden={setIdx > 0}>
            {items.map((item, i) => (
              <span
                key={`${setIdx}-${i}`}
                className={`marquee__item${i % 2 === 0 ? ' marquee__item--accent' : ''}`}
              >
                {item}
                <span className="marquee__separator">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Marquee
