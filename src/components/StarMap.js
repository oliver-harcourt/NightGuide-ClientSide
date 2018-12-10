import React from 'react';
import {
    StyleSheet,
    WebView,
    View
} from 'react-native';
import path from '../../data/uri'

export default class StarMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView style={styles.webView}
                    renderError={() => errorMessage}
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    allowTransparency="true"
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    webView: {
        marginBottom: -385,
        backgroundColor: 'black'
    }
});