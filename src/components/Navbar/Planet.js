import React from 'react'
import { TouchableOpacity, Dimensions, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Svg } from 'expo';

const { G, Path, Defs, Circle, Rect } = Svg;
const { width, height } = Dimensions.get('window');

const Planet = () => {
    return (
        <TouchableOpacity onPress={() => Actions.starmap()}>
            <Svg viewBox="0 0 130.67 130.67" height="60" width="60">
                <G id="prefix__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
                    <G id="prefix__Layer_1" data-name="Layer 1">
                        <Rect
                            width={130.67}
                            height={130.67}
                            rx={19.01}
                            ry={19.01}
                            fill="#f3a683"
                        />
                        <Circle
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            cx={65.33} cy={65.33} r={49.33} />
                        <Circle
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round" cx={65.33} cy={65.33} r={28.8} />
                        <Circle
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round" cx={65.33} cy={65.33} r={10.46} />
                        <Circle
                            cx={29.86}
                            cy={30.73}
                            r={7.25}
                            stroke="#231f20"
                            fill="#fde284"
                            strokeMiterlimit={10}
                        />
                        <Path
                            d="M36.54 27.9c6.7.45 11.44 1.54 11.44 2.82s-4.74 2.38-11.44 2.82c-2.07.13-4.32.21-6.68.21s-4.61-.08-6.68-.21c-6.7-.44-11.44-1.54-11.44-2.82s4.74-2.37 11.44-2.82"
                            stroke="#231f20"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <Circle
                            cx={103.84}
                            cy={96.83}
                            r={7.25}
                            fill="#87c7ec"
                            stroke="#231f20"
                            strokeLinejoin="round"
                        />
                    </G>
                </G>
            </Svg>
        </TouchableOpacity>
    )
}

export default Planet