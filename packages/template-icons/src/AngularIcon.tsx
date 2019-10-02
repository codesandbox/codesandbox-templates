import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";

export const AngularIcon: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      d="M16 3.84003L4.08321 8.08963L5.90081 23.8464L16 29.44L26.0992 23.8464L27.9168 8.08963L16 3.84003Z"
      fill="#DD0031"
    />
    <path
      d="M16 3.84003V6.68163V6.66883V19.6352V29.44L26.0992 23.8464L27.9168 8.08963L16 3.84003Z"
      fill="#C3002F"
    />
    <path
      d="M16 6.66882L8.5504 23.3728H11.328L12.8256 19.6352H19.1488L20.6464 23.3728H23.424L16 6.66882ZM18.176 17.3312H13.824L16 12.096L18.176 17.3312Z"
      fill="white"
    />
  </Shell>
);

export const AngularIconDark: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9168 2.8288V0L23.8336 4.2496L22.016 20.0064L11.9168 25.6V15.7952H15.0656L16.5632 19.5328H19.3408L11.9168 2.8288ZM11.9168 13.4912V8.256L14.0928 13.4912H11.9168Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9168 2.8288V0L0 4.2496L1.8176 20.0064L11.9168 25.6V15.7952H8.74239L7.24479 19.5328H4.46719L11.9168 2.8288ZM11.9168 8.25601V8.256L9.74079 13.4912H11.9168V8.25601Z"
      fill="black"
      fillOpacity="0.6"
    />
  </Shell>
);

export const AngularIconLight: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9168 2.8288V0L23.8336 4.2496L22.016 20.0064L11.9168 25.6V15.7952H15.0656L16.5632 19.5328H19.3408L11.9168 2.8288ZM11.9168 13.4912V8.256L14.0928 13.4912H11.9168Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9168 2.8288V0L0 4.2496L1.8176 20.0064L11.9168 25.6V15.7952H8.74239L7.24479 19.5328H4.46719L11.9168 2.8288ZM11.9168 8.25601V8.256L9.74079 13.4912H11.9168V8.25601Z"
      fill="white"
      fillOpacity="0.6"
    />
  </Shell>
);
