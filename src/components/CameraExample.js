import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });

    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <View>
                                    <Image
                                        source={{ uri: 'https://i.gifer.com/XVoD.gif' }}
                                        style={{
                                            marginLeft: 200,
                                            marginBottom: 200,
                                        source={{
                                            uri: 'https://i.gifer.com/XVoD.gif'
                                        }}
                                        style={{
                                            marginLeft: 200,
                                            marginBottom: 0,
                                            width: 100,
                                            height: 100
                                        }}
                                    // source={require('../../assets/constellation-images/Leo.png')}
                                    />

                                </View>
                                <Text style={{
                                    marginLeft: 200,
                                    marginTop: 20,
                                    width: 100,
                                    height: 100
                                }}
                                >Moon</Text>
                                <View>
                                    <Image
                                        source={{ uri: 'http://revision.ru/images/authors/6942/earth.gif' }}
                                        style={{
                                            marginLeft: 300,
                                            marginBottom: 250,
                                            width: 100,
                                            height: 100
                                        }}
                                    // source={require('../../assets/constellation-images/Leo.png')}
                                    />
                                </View>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    {' '}Flip{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}