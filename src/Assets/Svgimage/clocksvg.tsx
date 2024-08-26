import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Clocksvg = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#004BFE"
      fillRule="evenodd"
      d="M11.9.668H6.2v1.9h5.7v-1.9Zm-3.8 12.35H10v-5.7H8.1v5.7Zm7.629-6.28 1.349-1.349c-.409-.484-.855-.94-1.34-1.339l-1.349 1.349A8.514 8.514 0 0 0 9.05 3.518a8.55 8.55 0 0 0-8.55 8.55 8.545 8.545 0 0 0 8.55 8.55 8.545 8.545 0 0 0 6.678-13.88ZM9.05 18.718a6.645 6.645 0 0 1-6.65-6.65 6.645 6.645 0 0 1 6.65-6.65 6.645 6.645 0 0 1 6.65 6.65 6.645 6.645 0 0 1-6.65 6.65Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Clocksvg;
