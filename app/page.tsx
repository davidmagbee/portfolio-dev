import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Code2,
  FileText,
  GitBranch,
  Layers3,
  Network,
  Mail,
  Terminal,
  Workflow,
} from 'lucide-react';
import { ThemeToggle, PortfolioGuide } from '../components/Controls';
import { ProjectGallery } from '../components/ProjectGallery';
import { experience, profile, skillGroups } from '../data/profile';

/** All biographical content is reviewed in data/profile.ts; future interests are stated separately. */
export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="wordmark" aria-label="David Magbee, home">
            DM<span>_</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">
              Work<span>01</span>
            </a>
            <a href="#experience">
              Experience<span>02</span>
            </a>
            <a href="#toolkit">
              Toolkit<span>03</span>
            </a>
          </nav>
          <div className="header-actions">
            <a className="header-contact" href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
            <span className="header-divider" />
            <ThemeToggle />
            <a
              className="icon-button"
              href="/David-Magbee-Resume.pdf"
              download
              aria-label="Download David Magbee’s résumé PDF"
              title="Download résumé"
            >
              <ArrowDownToLine size={17} />
            </a>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" id="top" aria-labelledby="hero-title">
          {/* Preserve the current portfolio's shared fragment URLs during the replacement. */}
          <div className="hero-copy" id="hero">
            <div className="availability mono">
              <span className="status-dot" />
              Open to remote senior engineering roles
            </div>
            <h1 id="hero-title">
              David
              <br />
              <span>Magbee</span>
            </h1>
            <p className="hero-role">
              Software engineer.
              <br />
              <span>Product builder. Systems thinker.</span>
            </p>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="button button-secondary"
                href={profile.scheduler}
                target="_blank"
                rel="noreferrer"
              >
                Book a conversation <ArrowUpRight size={17} />
                <span className="sr-only"> (new tab)</span>
              </a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitBranch size={16} />
                GitHub<span className="sr-only"> (new tab)</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Network size={16} />
                LinkedIn<span className="sr-only"> (new tab)</span>
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} />
                Email
              </a>
              <a href="/David-Magbee-Resume.pdf" target="_blank" rel="noreferrer">
                <FileText size={16} />
                Résumé<span className="sr-only"> (PDF, new tab)</span>
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="portrait-coordinate mono">HUMAN / ENGINEER</div>
            <div className="portrait-frame">
              <div className="portrait-image">
                {/* CSS frames a square head-and-shoulders crop; the original photo stays intact. */}
                <img
                  src="/david-portrait.jpg"
                  alt="David Magbee"
                  width={1200}
                  height={900}
                  fetchPriority="high"
                />
                <div className="portrait-scan" />
              </div>
              <span className="crosshair crosshair-tl" />
              <span className="crosshair crosshair-br" />
            </div>
            <div className="floating-note">
              <Code2 size={18} aria-hidden="true" />
              <span>
                From interface
                <br />
                <strong>to workflow.</strong>
              </span>
            </div>
          </div>
        </section>
        <div className="wrap hero-bottom">
          <div className="hero-technologies mono">
            <span>REACT</span>
            <span>TYPESCRIPT</span>
            <span>NODE.JS</span>
            <span>POSTGRESQL</span>
          </div>
          <a href="#work" className="scroll-cue mono">
            KEEP EXPLORING <ArrowDown size={14} />
          </a>
        </div>
        <section className="intro wrap" id="about" aria-labelledby="about-title">
          <div className="section-label mono">
            <span>THE APPROACH</span>
            <span>→</span>
          </div>
          <div className="intro-content">
            <h2 id="about-title">
              The interface matters.
              <br />
              <span>So does everything behind it.</span>
            </h2>
            <div className="intro-columns">
              <p>
                I work across the stack: the screens people use, the APIs they depend on, and the
                workflows that connect them. My work spans financial products, client applications,
                and teaching software engineering.
              </p>
              <p>
                At Cookie Finance, that meant dependency-driven onboarding, financial integrations,
                and a tax recommendation backend. Outside client work, I’m building tools for repair
                projects, daily tasks, and a local community.
              </p>
            </div>
            <PortfolioGuide />
          </div>
        </section>
        <section className="work-section wrap section" id="work" aria-labelledby="work-title">
          <div className="section-top" id="projects">
            <div>
              <p className="section-label mono">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Built with purpose<span className="accent">.</span>
              </h2>
            </div>
            <p className="section-description">
              Personal projects, practical problems.
              <br />A look at what I’m building.
            </p>
          </div>
          <ProjectGallery />
        </section>
        <section
          className="experience-section section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="wrap">
            <div className="section-top">
              <div>
                <p className="section-label mono">02 / EXPERIENCE</p>
                <h2 id="experience-title">
                  The work behind the work<span className="accent">.</span>
                </h2>
              </div>
              <a className="text-link" href="/David-Magbee-Resume.pdf" download>
                Download résumé <ArrowDownToLine size={16} />
              </a>
            </div>
            <div className="experience-list">
              {experience.map((job, index) => (
                <details key={job.id} className="experience-item" open={index === 0}>
                  <summary>
                    <span className="experience-dates mono">{job.dates}</span>
                    <span className="experience-heading">
                      <strong>{job.company}</strong>
                      <span>{job.role}</span>
                    </span>
                    <ChevronDown className="experience-chevron" size={20} />
                  </summary>
                  <div className="experience-body">
                    <div className="experience-summary">
                      <p>{job.summary}</p>
                      <div className="tags">
                        {job.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="toolkit-section section wrap"
          id="toolkit"
          aria-labelledby="toolkit-title"
        >
          <div className="section-top" id="skills">
            <div>
              <p className="section-label mono">03 / TOOLKIT</p>
              <h2 id="toolkit-title">
                Tools follow the problem<span className="accent">.</span>
              </h2>
            </div>
            <p className="section-description">
              A full-stack foundation.
              <br />
              Room to keep learning.
            </p>
          </div>
          <div className="toolkit-grid">
            {skillGroups.map((group, index) => {
              const Icon = [Code2, Layers3, Workflow, Terminal][index % 4];
              return (
                <article className="toolkit-card" key={group.title}>
                  <div className="toolkit-icon">
                    <Icon size={21} />
                    <span className="mono">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="toolkit-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p>{group.note}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section
          className="direction-section wrap"
          id="direction"
          aria-labelledby="direction-title"
        >
          <div className="direction-heading">
            <p className="section-label mono">
              <span className="status-dot" />
              THE NEXT CHAPTER
            </p>
            <h2 id="direction-title">
              Deeper systems.
              <br />
              More intelligent products.
            </h2>
          </div>
          <div className="direction-copy">
            <p>
              I’m looking for senior full-stack and product engineering work, with room to go deeper
              in system architecture and AI engineering.
            </p>
            <p>
              My starting point is hands-on product work, experience integrating a data team’s model
              into a recommendation engine, and using Codex and engineering harnesses in my
              development workflow.
            </p>
            <a className="text-link" href={profile.scheduler} target="_blank" rel="noreferrer">
              Have something in mind? Let’s talk <ArrowUpRight size={17} />
              <span className="sr-only"> (new tab)</span>
            </a>
          </div>
        </section>
        <section
          className="contact-section section wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="section-label mono">04 / GET IN TOUCH</p>
          <div className="contact-content">
            <div>
              <h2 id="contact-title">
                Something worth
                <br />
                building<span className="accent">?</span>
              </h2>
              <p>
                Let’s talk about the product, the team,
                <br />
                and the problems you’re working on.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={profile.scheduler}
                target="_blank"
                rel="noreferrer"
              >
                <CalendarDays size={18} />
                Schedule a conversation <ArrowUpRight size={17} />
                <span className="sr-only"> (new tab)</span>
              </a>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={17} />
              </a>
              <div className="resume-links">
                <a href="/David-Magbee-Resume.pdf" target="_blank" rel="noreferrer">
                  View résumé <ArrowUpRight size={14} />
                  <span className="sr-only"> (PDF, new tab)</span>
                </a>
                <a href="/David-Magbee-Resume.pdf" download>
                  Download PDF <ArrowDownToLine size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a href="#top" className="wordmark" aria-label="Back to top">
          DM<span>_</span>
        </a>
        <p className="mono">© {new Date().getFullYear()} DAVID MAGBEE</p>
        <a
          href="https://github.com/davidmagbee/portfolio-dev"
          target="_blank"
          rel="noreferrer"
          className="mono"
        >
          BUILT WITH INTENT <ArrowUpRight size={14} />
          <span className="sr-only"> (source, new tab)</span>
        </a>
      </footer>
    </>
  );
}
