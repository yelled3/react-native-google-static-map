/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react-native';
import {AppRegistry} from 'react-native';

//import CurrentScreen from './Features/MainApp/MainAppFlow';
import CurrentScreen from './Features/MapExample';


class Crowd extends React.Component {
  render() {
    return (
      <CurrentScreen />
    );
  }
}

AppRegistry.registerComponent('Crowd', () => Crowd);
