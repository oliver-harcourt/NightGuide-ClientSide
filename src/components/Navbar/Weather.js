import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'

import { Svg } from 'expo';

const { G, Path, Rect } = Svg;
const { width, height } = Dimensions.get('window');

class Weather extends React.Component {

    render() {
        return (
            <TouchableOpacity >
                <Svg viewBox="0 0 130.67 130.67" width="60" height="60">

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

                                fill="#fff"
                                d="M116.88 129.56v.36a18.4 18.4 0 0 1-5.22.74H45.87a13.67 13.67 0 0 1 18.36-17c1.88-9.17 9.3-16 18.17-16 9.66 0 17.6 8.13 18.54 18.54a13.51 13.51 0 0 1 15.94 13.33zM44.29 48.05a2.46 2.46 0 0 1 0 .26c0 2.9-3.84 5.27-8.54 5.27H0V27a24.91 24.91 0 0 1 11-2.44c9.72 0 17.71 5.05 18.65 11.51a23.45 23.45 0 0 1 2.4-.14c7.54 0 13.64 3.77 13.64 8.42a5.92 5.92 0 0 1-1.4 3.7z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M40.84 97.77a10.82 10.82 0 0 0-2.7 0 10.74 10.74 0 0 0 2.7 0zM30.51 87.45c0 8.06-4.57 10-7.63 10.33 3.06.38 7.63 2.28 7.63 10.32 0-8 4.57-9.94 7.63-10.32-3.06-.37-7.63-2.27-7.63-10.33zM20.18 97.77a10.78 10.78 0 0 0 2.7 0 10.85 10.85 0 0 0-2.7 0zM116.09 24.54a6.65 6.65 0 0 0-1.71 0 6.65 6.65 0 0 0 1.71 0zM109.54 18c0 5.12-2.89 6.32-4.83 6.55 1.94.25 4.83 1.45 4.83 6.55 0-5.1 2.9-6.3 4.84-6.55-1.94-.24-4.84-1.44-4.84-6.55z"
                            />
                            <Path

                                d="M103 24.54a6.75 6.75 0 0 0 1.72 0 6.75 6.75 0 0 0-1.72 0z"
                            />
                            <Path
                                d="M75.87 57.5a23.54 23.54 0 0 1 3.41-27.87 23.55 23.55 0 1 0 22.3 39.19A23.58 23.58 0 0 1 75.87 57.5z"
                                fill="#ffe394"
                                stroke="#231f20"
                                strokeLinejoin="round"
                            />
                        </G>
                    </G>
                </Svg>
            </TouchableOpacity>
        )
    }
}
export default Weather