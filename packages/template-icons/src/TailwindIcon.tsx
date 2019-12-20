import React from "react";
import { SVGIcon, ISVGIconProps } from "./SVGIcon";
export const TailwindIcon: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      d="M5.99913 10.0007C6.80017 6.66739 8.79965 5 12.0003 5C16.8003 5 17.4003 8.74945 19.7999 9.37509C21.3992 9.79121 22.7995 9.1663 24 7.49964C23.1997 10.833 21.1995 12.4996 18.0002 12.4996C13.2002 12.4996 12.6003 8.74945 10.2006 8.12455C8.60061 7.70842 7.20035 8.33333 6.00052 10L5.99913 10.0007ZM0 17.5004C0.799651 14.1663 2.80052 12.5004 5.99913 12.5004C10.7998 12.5004 11.3997 16.2505 13.8001 16.8755C15.3994 17.2916 16.799 16.6667 17.9995 15C17.1991 18.3333 15.199 20 11.9996 20C7.19965 20 6.59974 16.2505 4.20009 15.6249C2.60009 15.2088 1.19983 15.8337 0 17.5004H0Z"
      fill="url(#tailwind_gradient)"
    />
    <defs>
      <linearGradient
        id="tailwind_gradient"
        x1="9.24201e-08"
        y1="9.80067"
        x2="20.3557"
        y2="21.5254"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2383AE" />
        <stop offset="1" stop-color="#6DD7B9" />
      </linearGradient>
    </defs>
  </SVGIcon>
);
export const TailwindIconDark: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      d="M5.99913 10.0007C6.80017 6.66739 8.79965 5 12.0003 5C16.8003 5 17.4003 8.74945 19.7999 9.37509C21.3992 9.79121 22.7995 9.1663 24 7.49964C23.1997 10.833 21.1995 12.4996 18.0002 12.4996C13.2002 12.4996 12.6003 8.74945 10.2006 8.12455C8.60061 7.70842 7.20035 8.33333 6.00052 10L5.99913 10.0007ZM0 17.5004C0.799651 14.1663 2.80052 12.5004 5.99913 12.5004C10.7998 12.5004 11.3997 16.2505 13.8001 16.8755C15.3994 17.2916 16.799 16.6667 17.9995 15C17.1991 18.3333 15.199 20 11.9996 20C7.19965 20 6.59974 16.2505 4.20009 15.6249C2.60009 15.2088 1.19983 15.8337 0 17.5004H0Z"
      fill="url(#tailwind_dark_gradient)"
    />
    <defs>
      <linearGradient
        id="tailwind_dark_gradient"
        x1="9.24201e-08"
        y1="9.80067"
        x2="20.3557"
        y2="21.5254"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stop-color="#A2A2A2" />
      </linearGradient>
    </defs>
  </SVGIcon>
);
export const TailwindIconLight: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <rect width="24" height="24" fill="black" />
    <path
      d="M5.99913 10.0007C6.80017 6.66739 8.79965 5 12.0003 5C16.8003 5 17.4003 8.74945 19.7999 9.37509C21.3992 9.79121 22.7995 9.1663 24 7.49964C23.1997 10.833 21.1995 12.4996 18.0002 12.4996C13.2002 12.4996 12.6003 8.74945 10.2006 8.12455C8.60061 7.70842 7.20035 8.33333 6.00052 10L5.99913 10.0007ZM0 17.5004C0.799651 14.1663 2.80052 12.5004 5.99913 12.5004C10.7998 12.5004 11.3997 16.2505 13.8001 16.8755C15.3994 17.2916 16.799 16.6667 17.9995 15C17.1991 18.3333 15.199 20 11.9996 20C7.19965 20 6.59974 16.2505 4.20009 15.6249C2.60009 15.2088 1.19983 15.8337 0 17.5004H0Z"
      fill="url(#taildind_light_gradient)"
    />
    <defs>
      <linearGradient
        id="taildind_light_gradient"
        x1="9.24201e-08"
        y1="9.80067"
        x2="20.3557"
        y2="21.5254"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#A2A2A2" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </SVGIcon>
);
