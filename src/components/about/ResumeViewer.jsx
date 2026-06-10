import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Eye, X } from 'lucide-react';
import Button from '../ui/Button';
import ResumePreview from './ResumePreview';
import styles from './ResumeViewer.module.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

async function loadPdfPages(resumePath) {
  const response = await fetch(resumePath);

  if (!response.ok) {
    throw new Error('Resume file not found.');
  }

  const buffer = await response.arrayBuffer();
  const header = new TextDecoder().decode(buffer.slice(0, 4));

  if (!header.startsWith('%PDF')) {
    throw new Error('Resume file is not a valid PDF.');
  }

  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const renderedPages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.45 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport, canvas }).promise;
    renderedPages.push(canvas.toDataURL('image/png'));
  }

  return renderedPages;
}

function ResumeViewer({ resumePath, label = 'View Resume' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState([]);
  const [useHtmlPreview, setUseHtmlPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = window.scrollY;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setPages([]);
      setUseHtmlPreview(false);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;

    async function loadResume() {
      setLoading(true);
      setPages([]);
      setUseHtmlPreview(false);

      try {
        const renderedPages = await loadPdfPages(resumePath);
        if (!cancelled) setPages(renderedPages);
      } catch {
        if (!cancelled) setUseHtmlPreview(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadResume();

    return () => {
      cancelled = true;
    };
  }, [isOpen, resumePath]);

  return (
    <>
      <Button type="button" size="lg" onClick={() => setIsOpen(true)}>
        <Eye size={18} /> {label}
      </Button>

      {isOpen && createPortal(
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close resume preview"
          >
            <X size={22} />
          </button>

          <div
            className={styles.viewerFrame}
            onClick={(event) => event.stopPropagation()}
          >
            {loading && <p className={styles.status}>Loading resume...</p>}
            {!loading && useHtmlPreview && <ResumePreview />}
            {!loading && !useHtmlPreview && pages.map((pageSrc, index) => (
              <img
                key={`resume-page-${index + 1}`}
                src={pageSrc}
                alt={`Resume page ${index + 1}`}
                className={styles.pageImage}
              />
            ))}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export default ResumeViewer;
