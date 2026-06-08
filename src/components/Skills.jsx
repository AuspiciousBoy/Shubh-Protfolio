import { useScrollReveal } from '../hooks/useScrollReveal'

const groupIcons = {
  'FRONT-END': '</>',
  'BACK-END': '{ }',
  'LANGUAGES': 'λ',
  'TOOLS': '⚡',
}

function Skills() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  const skillGroups = [
    {
      label: 'FRONT-END',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      label: 'BACK-END',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'Flask'],
      wide: true,
    },
    {
      label: 'LANGUAGES',
      skills: ['Python', 'C', 'C++'],
    },
    {
      label: 'TOOLS',
      skills: ['Git', 'GitHub', 'AI Tools'],
    },
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills__glow" aria-hidden="true" />

      <div className={`skills__inner ${isVisible ? 'reveal' : ''}`}>
        <div className="skills__header">
          <span className="section-number">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills__orbit-label">
          <span className="skills__orbit-ring" aria-hidden="true" />
          What I Work With
        </div>

        <div className="skills__bento">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className={`skills__group skills__group--${gi}${group.wide ? ' skills__group--wide' : ''}`}
            >
              <div className="skills__group-top">
                <span className="skills__group-icon">{groupIcons[group.label]}</span>
                <span className="skills__group-label">{group.label}</span>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill, si) => (
                  <div
                    key={skill}
                    className="skills__tag hoverable"
                    style={{ animationDelay: `${gi * 0.15 + si * 0.08}s` }}
                  >
                    <span className="skills__tag-dot"></span>
                    <span className="skills__tag-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__floating" aria-hidden="true">
          <span className="skills__float-item" style={{ top: '10%', left: '5%' }}>{'<>'}</span>
          <span className="skills__float-item" style={{ top: '70%', right: '8%' }}>{'{ }'}</span>
          <span className="skills__float-item" style={{ top: '30%', right: '3%' }}>{'()'}</span>
          <span className="skills__float-item" style={{ bottom: '15%', left: '10%' }}>{'#'}</span>
        </div>
      </div>
    </section>
  )
}
export default Skills
