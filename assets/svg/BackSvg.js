import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BackSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 288.312 288.312"
    style={{
      enableBackground: "new 0 0 288.312 288.312",
    }}
    xmlSpace="preserve"
    {...props}
    width={44}
    height={44}
  >
    <Path 
    scale={0.9} 
    fill={props.color}
    stroke={props.color}
    d="M127.353 3.555c-4.704-4.74-12.319-4.74-17.011 0L15.314 99.653c-4.74 4.788-4.547 12.884.313 17.48l94.715 95.785c4.704 4.74 12.319 4.74 17.011 0 4.704-4.74 4.704-12.427 0-17.167l-74.444-75.274h199.474v155.804c0 6.641 5.39 12.03 12.03 12.03 6.641 0 12.03-5.39 12.03-12.03v-168.05c0-6.641-5.39-12.03-12.03-12.03H52.704l74.648-75.49c4.704-4.729 4.704-12.416.001-17.156z" />
  </Svg>
)
