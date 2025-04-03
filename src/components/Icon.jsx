import React from 'react';

const Icon = ({ name, size = 24, color = '', strokeColor = '', className = '' }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={color}
      stroke={strokeColor}  // Add stroke color here
    >
      <use xlinkHref={`/React-Tailwind4.github.io/icon-sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;