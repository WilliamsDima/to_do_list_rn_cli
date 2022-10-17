/* eslint-disable prettier/prettier */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export const SvgBurger = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="none"
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M2 12h20M2 6h20M2 18h20"
    />
  </Svg>
)
