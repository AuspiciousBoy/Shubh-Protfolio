import { useScrollReveal } from '../hooks/useScrollReveal'

function Skills() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  const skillGroups = [
    {
      label: 'FRONT-END',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      label: 'BACK-END',
      skills: ['Python', 'Flask'],
    },
    {
      label: 'LANGUAGES',
      skills: ['C', 'C++'],
    },
    {
      label: 'TOOLS',
      skills: ['Git', 'GitHub', 'AI Tools'],
    },
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills__inner ${isVisible ? 'reveal' : ''}`}>
        <div className="skills__header">
          <span className="section-number">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills__orbit-label">What I Work With</div>

        <div className="skills__bento">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className={`skills__group skills__group--${gi}`}>
              <span className="skills__group-label">{group.label}</span>
              <div className="skills__tags">
                {group.skills.map((skill, si) => (
                  <div
                    key={skill}
                    className="skills__tag hoverable"
                    style={{ animationDelay: `${gi * 0.15 + si * 0.1}s` }}
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
