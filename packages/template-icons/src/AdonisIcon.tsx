import React from "react";
import { SVGIconProps } from "./types";

export const AdonisIcon = ({
  width = 32,
  height = 32,
  className
}: SVGIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7778 3.76534L4.99377 29.3333H30.5618L17.7778 3.76534Z"
        stroke="white"
        strokeWidth="1.77778"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
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
