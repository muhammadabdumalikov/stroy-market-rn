import React from "react";
import { SvgXml } from "react-native-svg";

export default function BellSvg({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Bell = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_16_4653)">
<path d="M18.7961 11.3853L17.2127 5.68864C16.7486 4.01976 15.74 2.55388 14.3472 1.52404C12.9543 0.494189 11.2572 -0.040533 9.52562 0.00486712C7.79399 0.0502672 6.12724 0.673184 4.79028 1.7746C3.45333 2.87602 2.5229 4.39273 2.1469 6.08364L0.921062 11.5961C0.785659 12.2053 0.788789 12.837 0.930223 13.4447C1.07166 14.0525 1.34778 14.6207 1.73821 15.1074C2.12865 15.5942 2.62341 15.987 3.18599 16.2569C3.74856 16.5269 4.36458 16.667 4.98856 16.667H5.9169C6.10816 17.6089 6.61917 18.4557 7.36335 19.064C8.10752 19.6722 9.0391 20.0045 10.0002 20.0045C10.9614 20.0045 11.8929 19.6722 12.6371 19.064C13.3813 18.4557 13.8923 17.6089 14.0836 16.667H14.7819C15.4242 16.667 16.0579 16.5186 16.6334 16.2332C17.2088 15.9478 17.7105 15.5332 18.0992 15.0219C18.488 14.5105 18.7532 13.9162 18.8742 13.2853C18.9953 12.6545 18.9688 12.0042 18.7969 11.3853H18.7961ZM10.0002 18.3336C9.48501 18.3315 8.98304 18.1702 8.56298 17.8719C8.14292 17.5736 7.8253 17.1527 7.65356 16.667H12.3469C12.1752 17.1527 11.8575 17.5736 11.4375 17.8719C11.0174 18.1702 10.5154 18.3315 10.0002 18.3336ZM16.7719 14.0128C16.5397 14.3209 16.2388 14.5705 15.8932 14.7419C15.5476 14.9134 15.1668 15.0018 14.7811 15.0003H4.98856C4.61422 15.0002 4.24466 14.9161 3.90718 14.7541C3.5697 14.5921 3.2729 14.3564 3.0387 14.0644C2.80449 13.7724 2.63886 13.4315 2.55403 13.0668C2.4692 12.7022 2.46733 12.3232 2.54856 11.9578L3.77356 6.44448C4.06886 5.11632 4.79965 3.92498 5.84978 3.05985C6.8999 2.19472 8.20908 1.70545 9.56921 1.66982C10.9293 1.63419 12.2623 2.05424 13.3563 2.8632C14.4503 3.67216 15.2425 4.8236 15.6069 6.13448L17.1902 11.8311C17.2948 12.2023 17.3115 12.5927 17.2389 12.9714C17.1663 13.3501 17.0064 13.7067 16.7719 14.0128Z" fill="#0C1A30"/>
</g>
<defs>
<clipPath id="clip0_16_4653">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`
    ;

  const Svg = () => (
    <SvgXml xml={Bell} width={width} height={height} color={color} />
  );

  return <Svg />;
}