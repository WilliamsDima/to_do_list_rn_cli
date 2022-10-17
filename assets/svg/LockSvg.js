import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const LockSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 470 470"
    style={{
      enableBackground: "new 0 0 470 470",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
        fill={props.color}
        stroke={props.color}
    d="M162.5 139.546V102.5c0-39.977 32.523-72.5 72.5-72.5s72.5 32.523 72.5 72.5v37.046c.164.069.329.132.493.201a186.953 186.953 0 0 1 29.507 15.724V102.5C337.5 45.981 291.519 0 235 0S132.5 45.981 132.5 102.5v52.971a187.161 187.161 0 0 1 29.507-15.724c.164-.069.329-.132.493-.201z" />
    <Path 
        fill={props.color}
        stroke={props.color}
    d="M235 155c-86.985 0-157.5 70.515-157.5 157.5S148.015 470 235 470s157.5-70.515 157.5-157.5S321.985 155 235 155zm54.094 190.381-21.213 21.213L235 333.713l-32.881 32.881-21.213-21.213 32.881-32.881-32.881-32.881 21.213-21.213L235 291.287l32.881-32.881 21.213 21.213-32.881 32.881 32.881 32.881z" />
  </Svg>
)
