import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';

const navLinks = [
  { href: '#hero', label: 'Overview' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function App() {
  return (
    <>
      <div className="bg-orb" aria-hidden="true" />

      <header className="top-nav">
        <div className="top-nav-inner">
          <a className="brand" href="#hero">
            Mkklkm
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <HeroSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
