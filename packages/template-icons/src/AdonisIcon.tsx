import React from "react";

export const AdonisIcon = ({
	width = 32,
  height = 32,
  className
}: {
	width?: number;
	height?: number;
	className?: string;
}) => (
  <svg
		className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7778 3.76534L4.99377 29.3333H30.5618L17.7778 3.76534Z"
        stroke="white"
        stroke-width="1.77778"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6667 3.55556L21.3333 24.8889H0"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
