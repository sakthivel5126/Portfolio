import { useRef, useState } from 'react';

export function useMagnetButton(strength = 10) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');

  const onMouseMove = (event) => {
    const el = ref.current;
    if (!el || event.currentTarget.disabled) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    setTransform(`translate(${x / strength}px, ${y / strength}px)`);
  };

  const onMouseLeave = () => {
    setTransform('');
  };

  return {
    ref,
    magnetStyle: transform ? { transform } : undefined,
    magnetHandlers: { onMouseMove, onMouseLeave },
  };
}
