import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Svg } from 'expo';

const { G, Path, Rect } = Svg;
const { width, height } = Dimensions.get('window');

class Lookout extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => Actions.lookout()}>
                <Svg viewBox="0 0 130.67 130.67" height="60" width="60" >
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
                                d="M21.6 37.42a.49.49 0 0 1 0 .12c0 1.4-1.85 2.54-4.11 2.54H.28V27.27a12 12 0 0 1 5.31-1.17c4.68 0 8.52 2.43 9 5.54a10.76 10.76 0 0 1 1.15-.07c3.63 0 6.57 1.82 6.57 4a2.83 2.83 0 0 1-.71 1.85zM99.37 52.57a.6.6 0 0 0 0 .12c0 1.4 2.72 2.54 6 2.54h25.28v-12.8a24.44 24.44 0 0 0-7.79-1.18c-6.87 0-12.52 2.43-13.18 5.54-.55 0-1.12-.07-1.7-.07-5.32 0-9.64 1.82-9.64 4.06a2.42 2.42 0 0 0 1.03 1.79z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M21.44 59.07a4.82 4.82 0 0 0-1.26 0 4.82 4.82 0 0 0 1.26 0zM16.6 54.23c0 3.78-2.14 4.66-3.57 4.84 1.43.18 3.57 1.07 3.57 4.83 0-3.76 2.14-4.65 3.58-4.83-1.44-.18-3.58-1.07-3.58-4.84zM11.76 59.07a4.92 4.92 0 0 0 1.27 0 4.92 4.92 0 0 0-1.27 0zM119 16.27a4.82 4.82 0 0 0-1.26 0 4.82 4.82 0 0 0 1.26 0z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M114.21 11.43c0 3.78-2.14 4.67-3.58 4.84 1.44.18 3.58 1.07 3.58 4.84 0-3.77 2.14-4.66 3.57-4.84-1.43-.17-3.57-1.06-3.57-4.84z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M109.37 16.27a4.82 4.82 0 0 0 1.26 0 4.82 4.82 0 0 0-1.26 0z"
                            />
                            <Path
                                d="M114.21 130.49a17.9 17.9 0 0 1-2.55.18H18.34C21.57 118.45 28.88 93 33.68 92.43c3-.37 6.15 9.38 8.69 19.86 6.69-25.92 17.52-63 25-64 7.82-1 16.47 39.88 21.26 66.52 3.67-17.65 8.95-39.45 12.7-40.1 5.09-.85 10.79 39.56 12.88 55.78z"
                                fill="#00bdac"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M66.27 13.61l-8.25 7.22h16.5l-8.25-7.22z"
                            />
                            <Path
                                strokeWidth={0.87}
                                stroke="#231f20"
                                strokeLinejoin="round"
                                fill="#fde284"
                                d="M58.02 20.83h16.51v7.99H58.02z"
                            />
                            <Path

                                fill="#fde284"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                fill="none"
                                d="M58.02 28.83l-2.28 38.92M74.52 28.83l3.41 38.15M66.27 28.83V48.3"
                            />
                            <Path
                                fill="#87c7ec"
                                stroke="#231f20"
                                strokeLinejoin="round"
                                d="M63.85 23.01h4.75v3.25h-4.75z"
                            />
                        </G>
                    </G>
                </Svg>
            </TouchableOpacity>
        )
    }
}

export default Lookout