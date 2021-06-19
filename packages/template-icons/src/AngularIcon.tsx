import React, { ComponentProps, FunctionComponent } from "react";

import { SVGIcon } from "./SVGIcon";

export const AngularIcon: FunctionComponent<ComponentProps<typeof SVGIcon>> = ({
  ...props
}) => (
  <SVGIcon {...props}>
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
  </SVGIcon>
);

export const AngularIconDark: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9168 6.8288V4L27.8336 8.2496L26.016 24.0064L15.9168 29.6V19.7952H19.0656L20.5632 23.5328H23.3408L15.9168 6.8288ZM15.9168 17.4912V12.256L18.0928 17.4912H15.9168Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9168 6.8288V4L4 8.2496L5.8176 24.0064L15.9168 29.6V19.7952H12.7424L11.2448 23.5328H8.46719L15.9168 6.8288ZM15.9168 12.256V12.256L13.7408 17.4912H15.9168V12.256Z"
      fill="black"
      fill-opacity="0.6"
    />
  </SVGIcon>
);

export const AngularIconLight: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9168 6.8288V4L27.8336 8.2496L26.016 24.0064L15.9168 29.6V19.7952H19.0656L20.5632 23.5328H23.3408L15.9168 6.8288ZM15.9168 17.4912V12.256L18.0928 17.4912H15.9168Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9168 6.8288V4L4 8.2496L5.8176 24.0064L15.9168 29.6V19.7952H12.7424L11.2448 23.5328H8.46719L15.9168 6.8288ZM15.9168 12.256V12.256L13.7408 17.4912H15.9168V12.256Z"
      fill="white"
      fill-opacity="0.6"
    />
  </SVGIcon>
);
