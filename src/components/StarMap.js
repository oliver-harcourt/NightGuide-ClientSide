import React from 'react';
import {
    StyleSheet,
    WebView,
    View
} from 'react-native';

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
                    source={{ uri: 'https://virtualsky.lco.global/embed/?longitude=-119.86286000000001&latitude=34.4326&projection=polar&constellationlabels=true' }}
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
        marginBottom: -355,
        marginTop: 0,
        backgroundColor: 'black'
    }
});