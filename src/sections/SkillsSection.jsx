import { useInViewToggle } from '../hooks/useInViewToggle';
import { TiltCard } from '../components/TiltCard';

const skillCards = [
  {
    title: 'Realtime Runtime',
    body: 'Tight service layers for latency-sensitive AI orchestration, evaluation routing, and production resilience.',
    meta: 'Systems',
  },
  {
    title: 'Agent Workflows',
    body: 'Operational loops that connect retrieval, tooling, monitoring, and human review into one product rhythm.',
    meta: 'Automation',
  },
  {
    title: 'Interface Motion',
    body: 'Hardware-friendly motion systems with deliberate pacing, spatial hierarchy, and stronger tactile response.',
    meta: 'Frontend',
  },
  {
    title: 'Launch Discipline',
    body: 'From concept framing to delivery, keeping observability, maintainability, and iteration speed in view.',
    meta: 'Delivery',
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useInViewToggle({ threshold: 0.24 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`panel skills-panel section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-copy">
        <p className="eyebrow">Core Skills & AI Projects</p>
        <h2 className={`section-title motion-title ${isVisible ? 'is-active' : ''}`}>
          The second screen shifts into an engineered gallery.
        </h2>
        <p className={`section-description motion-copy ${isVisible ? 'is-active' : ''}`}>
          Less startup filler, more operational detail. Each card acts like a product tile with
          live surfaces, glass edges, and pointer-aware depth.
        </p>
      </div>

      <div className="skills-grid">
        {skillCards.map((card, index) => (
          <TiltCard
            key={card.title}
            className={`skill-card glow-loop ${isVisible ? 'is-visible' : ''}`}
            style={{ '--card-delay': `${index * 0.14}s` }}
          >
            <div className="skill-card-head">
              <span className="skill-dot" aria-hidden="true" />
              <span className="skill-meta">{card.meta}</span>
            </div>
            <div className="skill-card-copy">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
            <div className="skill-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
