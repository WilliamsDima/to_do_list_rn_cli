import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const DoneSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <Path 
    fill={props.color}
    stroke={props.color}
    d="M7 2C4.2 2 2 4.2 2 7v27c0 2.8 2.2 5 5 5h27c2.8 0 5-2.2 5-5V7c0-.5-.086-1-.188-1.5L19.095 27.406l-9.688-8.718 1.281-1.5L19 24.5 37.688 3.687C36.788 2.688 35.5 2 34 2Zm34 9v24c0 3.3-2.7 6-6 6H11v2c0 2.8 2.2 5 5 5h27c2.8 0 5-2.2 5-5V16c0-2.8-2.2-5-5-5Z" />
    </Svg>
)

// fill={props.color}
// stroke={props.color}
