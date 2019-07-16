import React from "react";
import { SVGIconProps } from "./types";

export const AdonisIcon: React.FC<SVGIconProps> = ({
  scale = 1,
  width = 32,
  height = 32,
  ...props
}) => (
  <svg
    width={scale * width}
    height={scale * height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 32H4C1.7909 32 0 30.2091 0 28V4C0 1.7909 1.7909 0 4 0H28C30.2091 0 32 1.7909 32 4V28C32 30.2091 30.2091 32 28 32Z"
      fill="#241651"
    />
    <path
      d="M28 26.6663H6.6664L17.333 5.33301L28 26.6663ZM8.8241 25.3333H25.8423L17.333 8.31471L8.8241 25.3333Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6.6667L20 22.6667H4"
      fill="white"
    />
  </svg>
);
