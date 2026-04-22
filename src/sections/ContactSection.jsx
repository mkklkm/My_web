import { useInViewToggle } from '../hooks/useInViewToggle';

const contacts = [
  { label: 'QQ: Mkklkm', href: '#' },
  { label: 'WeChat: Mkklkm', href: '#' },
  { label: 'Gmail', href: 'mailto:MKKLKM.email@gmail.com' },
  { label: 'Douyin', href: 'https://v.douyin.com/bsSDP8sU9YE/' },
];

export function ContactSection() {
  const { ref, isVisible } = useInViewToggle({ threshold: 0.22 });

  return (
    <section
      id="contact"
      ref={ref}
      className={`panel section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-copy">
        <p className="eyebrow">Collaboration & Contact</p>
        <h2 className={`section-title motion-title ${isVisible ? 'is-active' : ''}`}>
          Let&apos;s build something useful.
        </h2>
        <p className={`section-description motion-copy ${isVisible ? 'is-active' : ''}`}>
          Pick your preferred channel. I will respond with project scope, timeline, and execution
          plan.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            className="contact-item drift-loop"
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
