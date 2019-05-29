import React from "react";

export interface SVGIconProps
  extends React.FunctionComponent<React.HTMLAttributes<SVGElement>> {
  width?: number;
  height?: number;
  className?: string;
}
