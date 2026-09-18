import React from 'react';

export const CapCutLogo: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = 'w-6 h-6',
  size,
  color = 'currentColor'
}) => (
  <svg
    viewBox="0 0 25 24"
    fill={color}
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
    />
  </svg>
);

export const CanvaLogo: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = 'w-6 h-6',
  size
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="brand-canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="50%" stopColor="#7D2AE8" />
        <stop offset="100%" stopColor="#9C3AFF" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="11.5" fill="url(#brand-canva-grad)" />
    <path
      fill="#ffffff"
      d="M14.09 17.65c-2.02 0-3.54-1-4.22-1.92-.07-.09-.03-.22.06-.25.11-.03.23 0 .29.09.62 1 1.96 1.83 3.86 1.83 2.78 0 4.63-1.96 4.63-4.71 0-2.39-1.74-4.28-4.52-4.28-2.83 0-4.63 1.8-4.63 4.43 0 1.76.82 2.37 1.98 2.37 1.89 0 2.3-.78 2.41-1.43.09-.5.07-.89-.48-1.33-.06-.05-.03-.16.04-.2.09-.03.2 0 .25.07.56.75.76 1.22.65 1.96-.14.98-.82 1.17-1.2 1.22-.08.01-.2 0-.25-.08-.05-.08-.02-.19.06-.24 1.91-1.3 2.15-2.72 2.05-3.7-.18-1.89-1.85-2.3-2.78-2.3-1.96 0-3.48 1.41-3.48 3.54 0 2.76 1.89 4.48 4.41 4.48 2.52 0 4.28-1.76 4.28-4.28 0-3.09-2.28-4.97-5.06-4.97-3.07 0-5.07 2.04-5.07 5.25 0 3.18 1.96 5.21 4.8 5.21z"
    />
  </svg>
);

export const AlightMotionLogo: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = 'w-6 h-6',
  size
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="brand-am-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="50%" stopColor="#05FAA8" />
        <stop offset="100%" stopColor="#00C896" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="#0f172a" />
    <path
      d="M38 24C38 31.732 31.732 38 24 38C17.5 38 12.05 33.56 10.5 27.5"
      stroke="url(#brand-am-grad)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M14 20C15.2 15.35 19.2 12 24 12C29.5 12 34 16.5 34 22C34 26 31 29 27.5 29.5"
      stroke="url(#brand-am-grad)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="21" cy="22" r="3" fill="url(#brand-am-grad)" />
  </svg>
);

export const VSCodeLogo: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = 'w-6 h-6',
  size
}) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="brand-vsc-mask" width="128" height="128" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
      />
    </mask>
    <g mask="url(#brand-vsc-mask)">
      <path
        fill="#0065A9"
        d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
      />
      <path
        fill="#007ACC"
        d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
      />
      <path
        fill="#1F9CF0"
        d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
      />
    </g>
  </svg>
);
