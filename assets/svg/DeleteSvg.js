import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const DeleteSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path 
    fill={'red'}
    stroke={'red'}
    d="M7 7.5c-1.1 1.3.5 3.3 10.1 13L28.4 32 17.2 43.3C11 49.6 6 54.9 6 55.2c0 .3.7 1.1 1.5 1.8 1.3 1.1 3.3-.5 13-10.1L32 35.6l11.5 11.3c9.7 9.6 11.7 11.2 13 10.1.8-.7 1.5-1.5 1.5-1.8 0-.3-5-5.6-11.2-11.9L35.6 32l11.3-11.5c9.6-9.7 11.2-11.7 10.1-13-.7-.8-1.5-1.5-1.8-1.5-.3 0-5.6 5-11.9 11.2L32 28.4 20.7 17.2C14.4 11 9.1 6 8.8 6c-.3 0-1.1.7-1.8 1.5z" />
  </Svg>
)
