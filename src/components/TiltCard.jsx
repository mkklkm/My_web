import { useRef } from 'react';

export function TiltCard({ as: Component = 'article', className = '', children, style, ...props }) {
  const frameRef = useRef(null);
  const nodeRef = useRef(null);

  const updateTilt = (clientX, clientY) => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    const clampedX = Math.min(Math.max(x, 0), 1);
    const clampedY = Math.min(Math.max(y, 0), 1);
    const rotateY = (clampedX - 0.5) * 14;
    const rotateX = (0.5 - clampedY) * 14;

    node.style.setProperty('--tilt-rotate-x', `${rotateX}deg`);
    node.style.setProperty('--tilt-rotate-y', `${rotateY}deg`);
    node.style.setProperty('--tilt-glow-x', `${clampedX * 100}%`);
    node.style.setProperty('--tilt-glow-y', `${clampedY * 100}%`);
  };

  const handlePointerMove = (event) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    const { clientX, clientY } = event;
    frameRef.current = requestAnimationFrame(() => {
      updateTilt(clientX, clientY);
      frameRef.current = null;
    });
  };

  const resetTilt = () => {
    const node = nodeRef.current;
    if (!node) {
      return;
    }

    node.style.setProperty('--tilt-rotate-x', '0deg');
    node.style.setProperty('--tilt-rotate-y', '0deg');
    node.style.setProperty('--tilt-glow-x', '50%');
    node.style.setProperty('--tilt-glow-y', '50%');
  };

  return (
    <Component
      ref={nodeRef}
      className={`tilt-card ${className}`.trim()}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      {...props}
    >
      {children}
    </Component>
  );
}
