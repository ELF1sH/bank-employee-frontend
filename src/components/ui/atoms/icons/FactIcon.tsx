import React from 'react';

import { IconProps } from './interfaces/iconProps';

const FactIcon: React.FC<IconProps> = ({ size = 96, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size / 1.04} viewBox={`0 0 ${size} ${size / 1.04}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M44 0V12H52V0H44ZM16.8906 11.2344L11.2344 16.8906L19.7188 25.375L25.375 19.7188L16.8906 11.2344ZM79.1094 11.2344L70.625 19.7188L76.2812 25.375L84.7656 16.8906L79.1094 11.2344ZM48 20C32.5827 20 20 32.5827 20 48C20 59.0712 26.6245 68.409 36 72.9375V84C36 88.3723 39.6278 92 44 92H52C56.3723 92 60 88.3723 60 84V72.9375C69.3755 68.409 76 59.0712 76 48C76 32.5827 63.4173 20 48 20ZM48 28C59.0947 28 68 36.9053 68 48C68 56.7374 62.4213 64.0914 54.6641 66.8359L52 67.7734V84H44V67.7734L41.3359 66.8359C33.5787 64.0914 28 56.7374 28 48C28 36.9053 36.9053 28 48 28ZM0 44V52H12V44H0ZM84 44V52H96V44H84ZM19.7188 70.625L11.2344 79.1094L16.8906 84.7656L25.375 76.2812L19.7188 70.625ZM76.2812 70.625L70.625 76.2812L79.1094 84.7656L84.7656 79.1094L76.2812 70.625Z"
      fill={color}
    />
  </svg>
);

export default FactIcon;
