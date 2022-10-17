import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const StarSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 243.317 243.317"
    style={{
      enableBackground: "new 0 0 243.317 243.317",
    }}
    xmlSpace="preserve"
    {...props}
    width={40} 
    height={40}
  >
    <Path 
    fill={props.color}
    stroke={props.color}
    d="M242.949 93.714a7.498 7.498 0 0 0-6.054-5.104l-74.98-10.9-33.53-67.941a7.501 7.501 0 0 0-13.451 0L81.404 77.71 6.422 88.61a7.501 7.501 0 0 0-4.157 12.792l54.257 52.886-12.807 74.672a7.5 7.5 0 0 0 10.881 7.906l67.064-35.254 67.063 35.254a7.49 7.49 0 0 0 3.489.861H192.234a7.5 7.5 0 0 0 7.277-9.324l-12.713-74.117 54.254-52.885a7.496 7.496 0 0 0 1.897-7.687zm-69.445 52.585a7.498 7.498 0 0 0-2.157 6.639l10.906 63.581-57.102-30.018a7.496 7.496 0 0 0-6.979 0l-57.103 30.018 10.906-63.581a7.499 7.499 0 0 0-2.157-6.639l-46.199-45.031 63.847-9.281a7.498 7.498 0 0 0 5.647-4.103l28.55-57.849 28.55 57.849a7.5 7.5 0 0 0 5.646 4.103l63.844 9.281-46.199 45.031z" />
  </Svg>
)
