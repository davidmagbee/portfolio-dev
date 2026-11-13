'use client';

import { useId, useState } from 'react';
import { ArrowUpRight, ArrowRight, GitBranch, LockKeyhole, Database, Wrench } from 'lucide-react';
import { projects } from '../data/profile';

/** Filters operate only on reviewed status labels; they never imply deployment from screenshots. */
export function ProjectGallery() {
  const [filter, setFilter] = useState('All work');
  const resultsId = useId();
  const shown = projects.filter((project) => filter === 'All work' || project.status === filter);

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {['All work', 'Live', 'In development'].map((label) => (
            <button
              type="button"
              key={label}
              aria-pressed={filter === label}
              aria-controls={resultsId}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="mono results-count" aria-live="polite">
          {shown.length.toString().padStart(2, '0')} PROJECTS
        </span>
      </div>
      <div className="project-grid" id={resultsId}>
        {shown.map((project, index) => (
          <article className={`project-card project-${project.id}`} key={project.id}>
            <div className="project-visual">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1360}
                  height={860}
                  loading="lazy"
                />
              ) : (
                <div
                  className="repair-schematic"
                  role="img"
                  aria-label="RepairVantage architecture illustration: project, access, and data modules"
                >
                  <span className="schematic-label mono">REPAIRVANTAGE / SYSTEM MAP</span>
                  <div className="schematic-root">
                    <Wrench size={26} />
                    <span>RepairVantage</span>
                    <span className="schematic-dot" />
                  </div>
                  <div className="schematic-lines" />
                  <div className="schematic-nodes">
                    <span>
                      <GitBranch size={20} />
                      Projects
                    </span>
                    <span>
                      <LockKeyhole size={20} />
                      Access
                    </span>
                    <span>
                      <Database size={20} />
                      Data
                    </span>
                  </div>
                  <span className="schematic-caption mono">
                    PRODUCT ARCHITECTURE · ILLUSTRATION
                  </span>
                </div>
              )}
              <span className={`status-tag ${project.status === 'Live' ? 'live' : ''}`}>
                <span />
                {project.status}
              </span>
            </div>
            <div className="project-copy">
              <div className="project-eyebrow mono">
                <span>{project.eyebrow}</span>
                <span>{(index + 1).toString().padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <details className="project-details">
                <summary>
                  Engineering notes <ArrowRight size={15} />
                </summary>
                <p>{project.detail}</p>
                <small>{project.caption}</small>
              </details>
              <div className="project-links">
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Visit project <ArrowUpRight size={16} />
                    <span className="sr-only">: {project.title} (new tab)</span>
                  </a>
                )}
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    Source <ArrowUpRight size={16} />
                    <span className="sr-only">: {project.title} (new tab)</span>
                  </a>
                )}
                {!project.href && !project.repository && (
                  <span className="private-project">
                    <LockKeyhole size={13} />
                    Private development preview
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
