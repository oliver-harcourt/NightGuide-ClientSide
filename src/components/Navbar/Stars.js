import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Svg } from 'expo';

const { G, Path, Rect } = Svg;
const { width, height } = Dimensions.get('window');

class Stars extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Actions.stars()}>
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
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M54.57 103.29a7.59 7.59 0 0 0-1.37 1.34 7.39 7.39 0 0 0 1.37-1.34z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M44.19 103.12c4 4.12 2.59 7.35 1.21 9 1.75-1.32 5-2.6 9 1.51-4-4.11-2.58-7.34-1.2-9.05-1.75 1.42-5.02 2.66-9.01-1.46zM44 113.5a7.36 7.36 0 0 0 1.39-1.33A7.72 7.72 0 0 0 44 113.5zM20.28 65.51a7.44 7.44 0 0 0-1.38 1.34 7.65 7.65 0 0 0 1.38-1.34z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M9.89 65.34c4 4.12 2.59 7.35 1.21 9 1.75-1.32 5-2.6 9 1.51-4-4.11-2.58-7.35-1.2-9.05-1.75 1.37-5.02 2.66-9.01-1.46zM9.72 75.72a8 8 0 0 0 1.38-1.33 7.43 7.43 0 0 0-1.38 1.33zM89.08 74.94a7.44 7.44 0 0 0-1.38 1.34 7.65 7.65 0 0 0 1.38-1.34zM78.69 74.77c4 4.12 2.59 7.35 1.21 9 1.75-1.32 5-2.61 9 1.51-4-4.12-2.58-7.35-1.2-9-1.7 1.32-5.02 2.61-9.01-1.51zM78.52 85.15a8 8 0 0 0 1.38-1.33 7.43 7.43 0 0 0-1.38 1.33zM61.79 29a7.57 7.57 0 0 0-1.38 1.33A7.43 7.43 0 0 0 61.79 29zM51.41 28.78c4 4.13 2.58 7.35 1.2 9.06 1.75-1.32 5-2.61 9 1.5-4-4.11-2.58-7.34-1.21-9.05-1.74 1.33-5.01 2.62-8.99-1.51zM51.23 39.17a7.57 7.57 0 0 0 1.38-1.33 7.43 7.43 0 0 0-1.38 1.33zM114.76 30.38a7.16 7.16 0 0 0-1.38 1.33 7.43 7.43 0 0 0 1.38-1.33zM104.37 30.2c4 4.12 2.59 7.35 1.21 9.05 1.75-1.32 5-2.6 9 1.51-4-4.11-2.58-7.34-1.2-9-1.75 1.24-5.02 2.56-9.01-1.56zM104.2 40.59a7.81 7.81 0 0 0 1.38-1.34 7.65 7.65 0 0 0-1.38 1.34z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                fill="none"
                                stroke="#fff"
                                d="M48.68 42.11L23.69 62.39M22.43 79.47l18.56 19.88M58.41 100.41l16.11-11.95M63.81 42.31l11.97 26.14M66.29 28l35.19-.1"
                            />
                        </G>
                    </G>
                </Svg>
            </TouchableOpacity>
        )
    }
}

export default Stars