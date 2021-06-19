import React, { ComponentProps, FunctionComponent } from "react";

import { SVGIcon } from "./SVGIcon";
import { useUniqueId } from "./useUniqueId";

export const PolymerIcon: FunctionComponent<ComponentProps<typeof SVGIcon>> = ({
  ...props
}) => {
  const id = useUniqueId();

  return (
    <SVGIcon {...props}>
      <g clipPath={`url(#Polymer_Clip0_${id})`}>
        <path
          d="M19.2017 27.1718L6.40086 4.99997H12.8017L25.6026 27.1718H19.2017Z"
          fill="#FF4081"
        />
        <path
          d="M19.2017 27.1718L22.4018 21.6289L25.6026 27.1718H19.2017Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M16.0017 21.6289L19.2017 27.1718L22.4018 21.6289H16.0018H16.0017Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M12.8016 16.0859L16.0017 21.6289L19.2017 16.0859H12.8017H12.8016Z"
          fill="black"
          fillOpacity="0.1"
        />
        <path
          d="M12.8016 16.0859L16.0017 10.5429L19.2017 16.0859H12.8017H12.8016Z"
          fill="black"
          fillOpacity="0.2"
        />
        <path
          d="M9.60167 10.5429L12.8017 16.0859L16.0018 10.5429H9.6018H9.60167Z"
          fill="black"
          fillOpacity="0.3"
        />
        <path
          d="M9.60167 10.5429L12.8017 4.99997L16.0018 10.5429H9.6018H9.60167Z"
          fill="black"
          fillOpacity="0.4"
        />
        <path
          d="M6.40086 4.99997L9.60168 10.5429L12.8017 4.99997H6.40086Z"
          fill="black"
          fillOpacity="0.5"
        />
        <path
          d="M6.40087 27.1718L0 16.0859L3.20081 10.5429L12.8016 27.1718H6.40074H6.40087Z"
          fill="#536DFE"
        />
        <path
          d="M6.40086 27.1718L9.60168 21.6289L12.8017 27.1718H6.40086Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M3.20081 21.6289L6.40086 27.1718L9.60168 21.6289H3.20081Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M0 16.0859L3.20081 21.6289L6.40087 16.0859H0Z"
          fill="black"
          fillOpacity="0.1"
        />
        <path
          d="M0 16.0859L3.20081 10.5429L6.40087 16.0859H0Z"
          fill="black"
          fillOpacity="0.2"
        />
        <path
          d="M6.40086 16.0859L3.20081 10.5429L6.40086 4.99997L9.60168 10.5429L6.40086 16.0859Z"
          fill="#303F9F"
        />
        <path
          d="M9.60168 10.5429L6.40086 4.99997L3.20081 10.5429H9.60168Z"
          fill="black"
          fillOpacity="0.2"
        />
        <path
          d="M25.6025 27.1718L22.4017 21.6289L25.6025 16.0859L28.8025 21.6289L25.6025 27.1718Z"
          fill="#3F51B5"
        />
        <path
          d="M28.8025 21.6289L25.6025 27.1719L22.4017 21.6289H28.8025Z"
          fill="black"
          fillOpacity="0.2"
        />
        <path
          d="M28.8025 21.6289L19.2017 4.99997H25.6026L32.0034 16.0859L28.8026 21.6289H28.8025Z"
          fill="#7986CB"
        />
        <path
          d="M25.6025 16.0859L28.8025 21.6289L32.0033 16.0859H25.6025Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M25.6025 16.0859L28.8025 10.5429L32.0033 16.0859H25.6025Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M22.4016 10.5429L25.6024 4.99997L28.8025 10.5429H22.4016Z"
          fill="black"
          fillOpacity="0.1"
        />
        <path
          d="M19.2017 4.99997L22.4018 10.5429L25.6026 4.99997H19.2017Z"
          fill="black"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <clipPath id={`Polymer_Clip0_${id}`}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </SVGIcon>
  );
};

export const PolymerIconDark: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => {
  const id = useUniqueId();

  return (
    <SVGIcon {...props}>
      <g clipPath={`url(#clip_${id})`}>
        <path
          d="M19.0009 27.1719L6.20001 5H12.6009L25.4017 27.1719H19.0009Z"
          fill="black"
          fillOpacity="0.4"
        />
        <path
          d="M6.40097 16.0857L9.60168 10.5429L6.40086 4.99997L0 16.0859L6.40087 27.1718H12.8016L6.40097 16.0857Z"
          fill="black"
        />
        <path
          d="M19 4.99997H25.4007L31.8017 16.0859L25.4008 27.1718L22.2 21.6289L25.4007 16.0861L19 4.99997Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id={`clip_${id}`}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </SVGIcon>
  );
};

export const PolymerIconLight: FunctionComponent<
  ComponentProps<typeof SVGIcon>
> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.60168 10.5429L6.40097 16.0857L12.8016 27.1718H6.40087L0 16.0859L6.40086 4.99997L9.60168 10.5429ZM25.4007 4.99997H19L25.4007 16.0861L22.2 21.6289L25.4008 27.1718L31.8017 16.0859L25.4007 4.99997Z"
      fill="white"
    />
    <path d="M12.5 5H6.5L19 27H25.5L12.5 5Z" fill="white" fillOpacity="0.4" />
  </SVGIcon>
);
