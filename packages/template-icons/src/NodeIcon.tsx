import React from "react";

export const NodeIcon = ({
  width = 32,
  height = 32,
  className
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M16.7587 0.20289C16.2903 -0.0676604 15.7127 -0.0676604 15.2443 0.20289L2.70125 7.44109C2.2322 7.71164 1.94345 8.21154 1.94345 8.75319V23.2408C1.94345 23.7819 2.2322 24.2819 2.70075 24.5529L15.2437 31.7969C15.7127 32.0676 16.2902 32.0676 16.7592 31.7969L29.2993 24.5529C29.7677 24.2818 30.0565 23.7819 30.0565 23.2408V8.75274C30.0565 8.21159 29.7677 7.71164 29.2988 7.44114L16.7587 0.20289Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M29.3237 7.4411L16.7456 0.202904C16.6215 0.131254 16.4886 0.0799036 16.3519 0.0462036L2.22934 24.2049C2.35104 24.3417 2.49359 24.4613 2.65214 24.553L15.2516 31.797C15.6085 32.003 16.0326 32.0512 16.4218 31.9436L29.6611 7.7006C29.5605 7.60075 29.4475 7.5125 29.3237 7.4411Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M29.3308 24.5529C29.6963 24.3414 29.9691 23.99 30.0724 23.5889L16.2839 0.0329378C15.9239 -0.0387622 15.542 0.0157878 15.218 0.202888L2.72439 7.39754L16.221 31.9852C16.4137 31.959 16.6022 31.8966 16.7749 31.797L29.3308 24.5529Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M30.5002 24.32L30.4171 24.1779V24.3681L30.5002 24.32Z"
        fill="url(#paint3_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="21.0998"
        y1="5.59334"
        x2="9.76805"
        y2="28.71"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#41873F" />
        <stop offset="0.3288" stop-color="#418B3D" />
        <stop offset="0.6352" stop-color="#419637" />
        <stop offset="0.9319" stop-color="#3FA92D" />
        <stop offset="1" stop-color="#3FAE2A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="14.0908"
        y1="17.6914"
        x2="45.8868"
        y2="-5.80125"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1376" stop-color="#41873F" />
        <stop offset="0.4032" stop-color="#54A044" />
        <stop offset="0.7136" stop-color="#66B848" />
        <stop offset="0.9081" stop-color="#6CC04A" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="1.49974"
        y1="15.9939"
        x2="30.5002"
        y2="15.9939"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0919" stop-color="#6CC04A" />
        <stop offset="0.2864" stop-color="#66B848" />
        <stop offset="0.5968" stop-color="#54A044" />
        <stop offset="0.8624" stop-color="#41873F" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="1.49997"
        y1="24.273"
        x2="30.5002"
        y2="24.273"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0919" stop-color="#6CC04A" />
        <stop offset="0.2864" stop-color="#66B848" />
        <stop offset="0.5968" stop-color="#54A044" />
        <stop offset="0.8624" stop-color="#41873F" />
      </linearGradient>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
