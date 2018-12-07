import React from 'react';
import {
    StyleSheet,
    WebView,
    View,
    Text,
    Image
} from 'react-native';

export default class StarMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const path = 'https://virtualsky.lco.global/embed/?longitude=-119.86286000000001&latitude=34.4326&projection=polar&constellationlabels=true'

        return (
            <View>
                <WebView
                    renderError={() => errorMessage}
                    scalesPageToFit={true}
                    source={{ uri: 'https://virtualsky.lco.global/embed/?longitude=-119.86286000000001&latitude=34.4326&projection=polar&constellationlabels=true' }} 
                    style={{marginTop: 20}}
                    width="500" 
                    height="350" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    allowTransparency="true"
                    />
            </View>
        );
    };
};
