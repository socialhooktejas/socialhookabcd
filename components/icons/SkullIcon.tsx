import React from 'react';

interface SkullIconProps {
  className?: string;
}

// A new, high-quality SVG icon to be used as the logo.
const SkullIcon: React.FC<SkullIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 8A2.5 2.5 0 118.5 13a2.5 2.5 0 010-5zm7 0a2.5 2.5 0 110 5a2.5 2.5 0 010-5zm-3.5 7.5c-1.38 0-2.5 1.12-2.5 2.5h5c0-1.38-1.12-2.5-2.5-2.5z" />
  </svg>
);

export default SkullIcon;
