# react-native-google-static-map
A wrapper for Google's Static Maps

# Example
```js
const locationProps = {
  latitude: '32.064171',
  longitude: '34.7748068',
  zoom: 13,
  size: {
    width: 300,
    height: 550
  }
}

class MapExample extends Component {

  static propTypes = {
  }

  render() {
    return (
        <View style={styles.content}>
          <Text style={styles.title} >Google Static Maps</Text>
          <GoogleStaticMap style={styles.map} {...locationProps} />
        </View>
    );
  }
}
```
