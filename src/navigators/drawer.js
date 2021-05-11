import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
// import BottomTab from './src/navigators/bottomtab';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator independent={true}>
          <Drawer.Screen name="Home" component={Home} />
          {/* <Drawer.Screen name="BottomTab" component={BottomTab} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
