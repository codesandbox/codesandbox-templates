import React from "react";

export interface SVGIconProps
  extends React.Component<React.HTMLAttributes<SVGElement>> {
  width?: number;
  height?: number;
  className?: string;
}
