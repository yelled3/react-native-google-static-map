import React from 'react-native';
const {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Component
    } = React;

import GoogleStaticMap from './../GoogleStaticMap';


const mockLocation = {
  latitude: '32.064171',
  longitude: '34.7748068',
  zoom: 13,
  size: {
    width: 300,
    height: 550
  },
  key: ''//'AAAAAAAAAA-BBBBBBBBBBBBBBBBB-CCCCCCCCCC'
}


class MapExample extends Component {

  static propTypes = {
  }

  render() {
    return (
        <View style={styles.content}>
          <Text style={styles.title} >Google Static Maps</Text>
          <GoogleStaticMap style={styles.map} {...mockLocation} >
            <Text>Something here!</Text>
          </GoogleStaticMap>
        </View>
    );
  }
}


const styles = StyleSheet.create({

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4d4d'
  },

  title: {
    color: 'white',
    fontSize: 32,
    paddingVertical: 15
  },

  map: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  }

});


AppRegistry.registerComponent('MapExample', () => MapExample);
