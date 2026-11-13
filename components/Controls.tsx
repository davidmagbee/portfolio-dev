'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, MessagesSquare, Moon, Sun, X } from 'lucide-react';
import { guideEntries } from '../data/profile';

/** Reflect the theme already selected by the layout's pre-hydration script. */
export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.dataset.theme === 'light');
  }, []);

  function toggleTheme() {
    const nextIsLight = document.documentElement.dataset.theme !== 'light';
    const theme = nextIsLight ? 'light' : 'dark';

    document.documentElement.dataset.theme = theme;
    setIsLight(nextIsLight);

    // A blocked storage API must not prevent the current page from changing theme.
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The selected theme remains usable for this page without persistence.
    }
  }

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      onClick={toggleTheme}
    >
      {isLight ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
    </button>
  );
}

/** Answer common recruiter questions with reviewed portfolio content, not a model. */
export function PortfolioGuide() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headingId = useId();
  const descriptionId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(guideEntries[0]?.id);
  const activeEntry = guideEntries.find((entry) => entry.id === activeId) ?? guideEntries[0];

  useEffect(() => {
    if (!isOpen) return;

    // Native dialog supplies inertness and focus handling; lock page scrolling separately.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function openGuide() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    // showModal gives Escape dismissal, focus containment, and return to the trigger.
    dialog.showModal();
    setIsOpen(true);
  }

  function closeGuide() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        className="guide-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        onClick={openGuide}
      >
        <MessagesSquare size={18} aria-hidden="true" />
        <span>Ask about my work</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className="guide-dialog"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          // Only clicks outside the content panel dismiss; descendants keep their actions.
          if (event.target === event.currentTarget) closeGuide();
        }}
      >
        <div className="guide-panel">
          <div className="guide-header">
            <div>
              <h2 id={headingId}>Ask about my work</h2>
              <p id={descriptionId}>Curated answers · no AI-generated claims</p>
            </div>
            <button
              className="icon-button"
              type="button"
              aria-label="Close guide"
              onClick={closeGuide}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="guide-questions" aria-label="Choose a question">
            {guideEntries.map((entry) => (
              <button
                key={entry.id}
                className="guide-question"
                type="button"
                aria-pressed={entry.id === activeEntry?.id}
                onClick={() => setActiveId(entry.id)}
              >
                {entry.question}
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="guide-answer" aria-live="polite" aria-atomic="true">
            {activeEntry && (
              <>
                <h3>{activeEntry.question}</h3>
                <p>{activeEntry.answer}</p>
                <a href={activeEntry.href} onClick={closeGuide}>
                  {activeEntry.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
