import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ToDoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path 
    fill={props.color}
    stroke={props.color}
    d="M5 7.2C.7 11.9 4 19 10.5 19c2.2 0 4.1-.8 5.5-2.2C20.3 12.1 17 5 10.5 5 8.3 5 6.4 5.8 5 7.2zm9.4 3c1.4 2.3-.3 5.2-3.3 5.6-4.2.6-6.7-3.8-3.9-6.6 1.7-1.7 5.8-1.1 7.2 1zM31.3 12.2c.5 1.8 25.9 1.8 26.5 0 .3-.9-2.8-1.2-13.3-1.2s-13.6.3-13.2 1.2zM5 27.2C.7 31.9 4 39 10.5 39c2.2 0 4.1-.8 5.5-2.2 4.3-4.7 1-11.8-5.5-11.8-2.2 0-4.1.8-5.5 2.2zm9.4 3c1.4 2.3-.3 5.2-3.3 5.6-4.2.6-6.7-3.8-3.9-6.6 1.7-1.7 5.8-1.1 7.2 1zM31.3 32.2c.5 1.8 25.9 1.8 26.5 0 .3-.9-2.8-1.2-13.3-1.2s-13.6.3-13.2 1.2zM15.6 49c-2.8 3.3-5.3 6-5.6 6-.4 0-1.5-.9-2.5-2C5.7 51 3 50.3 3 51.8c0 1 6.3 7.2 7.3 7.2 1.3 0 12.7-14.1 12.2-15.1-1.1-1.6-1.9-1-6.9 5.1zM31.3 52.2c.5 1.8 25.9 1.8 26.5 0 .3-.9-2.8-1.2-13.3-1.2s-13.6.3-13.2 1.2z" />
  </Svg>
)