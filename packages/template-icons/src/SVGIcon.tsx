import React, { FunctionComponent, HTMLAttributes } from "react";

export interface Props
  extends Omit<HTMLAttributes<SVGElement>, "fill" | "viewBox" | "xmlns"> {
  height?: number;
  scale?: number;
  width?: number;
}

export const SVGIcon: FunctionComponent<Props> = ({
  children,
  height = 32,
  width = 32,
  scale = 1,
  ...props
}) => (
  <svg
    {...props}
    fill="none"
    width={scale * width}
    height={scale * height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);
