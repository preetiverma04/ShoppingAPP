import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
     
        width={11}
        height={11}
        fill="none"
        {...props}
    >
        <Path
            fill="#0042E0"
            d="M7.84.832h-.025c-.997 0-1.879.528-2.386 1.306A2.859 2.859 0 0 0 3.042.832h-.025A2.84 2.84 0 0 0 .203 3.671c0 .93.407 2.248 1.201 3.334 1.512 2.067 4.025 3.876 4.025 3.876S7.94 9.072 9.453 7.005c.794-1.086 1.201-2.405 1.201-3.334A2.84 2.84 0 0 0 7.84.832Z"
        />
    </Svg>
)
export default SvgComponent
