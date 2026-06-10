import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ScrollProgress.module.css';

function getMaxScroll() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

function getProgressFromScroll() {
  const maxScroll = getMaxScroll();
  return maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
}

function scrollToProgress(percent) {
  const maxScroll = getMaxScroll();
  window.scrollTo({ top: (percent / 100) * maxScroll, behavior: 'auto' });
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const skipTrackClick = useRef(false);

  const getProgressFromPointer = useCallback((clientY) => {
    const track = trackRef.current;
    if (!track) return 0;

    const rect = track.getBoundingClientRect();
    const ratio = (clientY - rect.top) / rect.height;
    return Math.min(100, Math.max(0, ratio * 100));
  }, []);

  const moveToPointer = useCallback((clientY) => {
    const nextProgress = getProgressFromPointer(clientY);
    setProgress(nextProgress);
    scrollToProgress(nextProgress);
  }, [getProgressFromPointer]);

  useEffect(() => {
    const update = () => {
      if (!isDragging) setProgress(getProgressFromScroll());
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!isDragging) return undefined;

    const handleMouseMove = (event) => moveToPointer(event.clientY);

    const handleTouchMove = (event) => {
      event.preventDefault();
      moveToPointer(event.touches[0].clientY);
    };

    const stopDragging = () => {
      skipTrackClick.current = true;
      setIsDragging(false);
      window.setTimeout(() => {
        skipTrackClick.current = false;
      }, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, moveToPointer]);

  const handleTrackClick = (event) => {
    if (skipTrackClick.current) return;
    moveToPointer(event.clientY);
  };

  const startDragging = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        ref={trackRef}
        className={styles.trackHitArea}
        onClick={handleTrackClick}
        aria-label="Scroll to position on page"
      >
        <span className={styles.track}>
          <span
            className={`${styles.fill} ${isDragging ? styles.noTransition : ''}`}
            style={{ height: `${progress}%` }}
          />
        </span>
      </button>

      <button
        type="button"
        className={`${styles.thumb} ${isDragging ? styles.thumbDragging : ''}`}
        style={{ top: `${progress}%` }}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
        aria-label="Drag to scroll page"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        role="slider"
      />
    </div>
  );
}

export default ScrollProgress;
