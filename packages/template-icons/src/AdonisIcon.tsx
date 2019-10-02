import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";

export const AdonisIcon: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
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
  </Shell>
);

export const AdonisIconDark: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8734 7.06324L9.61961 0.555557L0 19.7948H6.50764L4.50359 23.8029H27.5618L16.0327 0.744736L12.8734 7.06324ZM7.50406 19.7948H19.2392L13.3717 8.05967L15.9015 3L25.8029 22.8029H6.00001L7.50406 19.7948Z"
      fill="black"
    />
  </Shell>
);

export const AdonisIconLight: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8734 7.06324L9.61961 0.555557L0 19.7948H6.50764L4.50359 23.8029H27.5618L16.0327 0.744736L12.8734 7.06324ZM7.50406 19.7948H19.2392L13.3717 8.05967L15.9015 3L25.8029 22.8029H6.00001L7.50406 19.7948Z"
      fill="white"
    />
  </Shell>
);
