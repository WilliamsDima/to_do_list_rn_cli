import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const FolderSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    style={{
      enableBackground: "new 0 0 490 490",
    }}
    xmlSpace="preserve"
    {...props}
    width={30}
    height={30}
  >
    <Path 
          fill={props.color}
          stroke={props.color}
    d="M410.3 447.2H0l79.7-289.3H490z" />
    <Path 
          fill={props.color}
          stroke={props.color}
    d="M62.2 134.9h348.1V90.6h-205l-20.6-47.8H0v318.1z" />
  </Svg>
)
