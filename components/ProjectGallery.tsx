'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';
import { projects, type Project } from '../data/profile';

const filters = ['All work', 'Live', 'In development'] as const;
type ProjectFilter = (typeof filters)[number];

/** Only published destinations receive links; absent URLs never become placeholder actions. */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.href && (
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          Visit project <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">: {project.title} (new tab)</span>
        </a>
      )}
      {project.repository && (
        <a href={project.repository} target="_blank" rel="noopener noreferrer">
          Source <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">: {project.title} (new tab)</span>
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          View demo <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">: {project.title} (new tab)</span>
        </a>
      )}
    </div>
  );
}

/** Status membership can overlap: a live foundation may also have a release in development. */
export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectFilter>('All work');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const resultsId = useId();
  const dialogId = useId();
  const headingId = useId();
  const summaryId = useId();
  const shown = projects.filter(
    (project) => filter === 'All work' || project.statuses.includes(filter),
  );
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedProject || !dialog) return;

    // Render the selected content before opening so native focus handling sees the right controls.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();

    return () => {
      // Escape, close buttons and unmount share cleanup; never leave the page scroll-locked.
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    };
  }, [selectedProject]);

  function closeDetails() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((label) => (
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
        {shown.map((project) => (
          <article className={`project-card project-${project.id}`} key={project.id}>
            <div className="project-visual">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                />
              ) : (
                <div
                  className="project-image-placeholder"
                  role="img"
                  aria-label={`Preview image unavailable for ${project.title}`}
                >
                  Preview image unavailable
                </div>
              )}
              <div className="project-statuses">
                {project.statuses.map((status) => (
                  <span className={`status-tag ${status === 'Live' ? 'live' : ''}`} key={status}>
                    <span aria-hidden="true" />
                    {status}
                  </span>
                ))}
                {project.statuses.length === 0 && project.repository && (
                  <span className="status-tag">Source available</span>
                )}
              </div>
            </div>
            <p className="project-caption">{project.caption}</p>
            <div className="project-copy">
              <div className="project-eyebrow mono">
                <span>{project.eyebrow}</span>
                {/* Catalog ordinals stay stable when filtering changes the visible subset. */}
                <span>{(projects.indexOf(project) + 1).toString().padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-tags tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-footer">
                <button
                  className="project-notes-button"
                  type="button"
                  aria-label={`Engineering notes: ${project.title}`}
                  aria-haspopup="dialog"
                  aria-controls={dialogId}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedProjectId(project.id);
                  }}
                >
                  Engineering notes <ArrowRight size={15} aria-hidden="true" />
                </button>
                <ProjectLinks project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* One modal sits outside the grid: opening notes never expands a project card. */}
      <dialog
        ref={dialogRef}
        id={dialogId}
        className="project-dialog"
        aria-labelledby={headingId}
        aria-describedby={summaryId}
        onClose={() => setSelectedProjectId(null)}
        onClick={(event) => {
          // The dialog surface includes its backdrop; clicks inside the panel keep their actions.
          if (event.target === event.currentTarget) closeDetails();
        }}
      >
        {selectedProject && (
          <div className="project-dialog-panel">
            <div className="project-dialog-header">
              <div>
                <p className="mono">ENGINEERING NOTES</p>
                <h2 id={headingId}>{selectedProject.title}</h2>
              </div>
              <button
                className="icon-button"
                type="button"
                aria-label="Close project details"
                onClick={closeDetails}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="project-dialog-content">
              <p id={summaryId}>{selectedProject.summary}</p>
              <p>{selectedProject.detail}</p>
              <div className="tags" aria-label="Project technology stack">
                {selectedProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="project-caption">{selectedProject.caption}</p>
              <ProjectLinks project={selectedProject} />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
