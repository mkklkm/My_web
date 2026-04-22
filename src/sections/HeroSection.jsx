import { useInViewToggle } from '../hooks/useInViewToggle';
import { TiltCard } from '../components/TiltCard';

const heroStats = [
  { label: 'Latency Budget', value: '128 ms', note: 'Live orchestration target' },
  { label: 'Pilot Release', value: '06 Weeks', note: 'Concept to launch path' },
  { label: 'Design System', value: 'Fluid', note: 'Desktop and mobile alignment' },
];

export function HeroSection() {
  const { ref, isVisible } = useInViewToggle({ threshold: 0.35 });

  return (
    <section
      id="hero"
      ref={ref}
      className={`panel hero-panel section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="hero-copy">
        <p className="eyebrow">Innovator & Developer</p>
        <h1 className={`motion-title ${isVisible ? 'is-active' : ''}`}>
          AI product surfaces with the calm precision of flagship hardware.
        </h1>
        <p className={`hero-sub motion-copy ${isVisible ? 'is-active' : ''}`}>
          Structured around launch clarity, tactile motion, and restrained materials. The first
          screen behaves like a keynote surface, while the second turns into a tighter systems
          gallery.
        </p>

        <div className="actions">
          <a href="#contact" className="btn primary pulse-loop">
            Start a Project
          </a>
          <a href="#skills" className="btn ghost drift-loop">
            View Skills
          </a>
        </div>
      </div>

      <div className="hero-card-wrap hero-stack">
        <TiltCard className="hero-card hero-card-primary float-loop">
          <span className="status-pill">AI Systems + Product Delivery</span>
          <h2 className={`motion-title ${isVisible ? 'is-active' : ''}`}>
            Mkklkm. Built like a product demo, not a template.
          </h2>
          <p className={`motion-copy ${isVisible ? 'is-active' : ''}`}>
            Split layout, soft chrome, and layered information density tuned to feel deliberate.
          </p>

          <div className="signal-grid" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </TiltCard>

        <div className="hero-mini-grid">
          {heroStats.map((item) => (
            <TiltCard key={item.label} className="hero-mini-card drift-loop">
              <p className="mini-label">{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.note}</span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
