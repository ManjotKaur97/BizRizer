import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import screen1 from '../screens/Dashboard/Screen1';
import FIcons from 'react-native-vector-icons/FontAwesome';
import Drawer from '../navigators/drawer';

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = focused ? 'dashboard' : 'dashboard';
              } else {
                iconName = focused ? 'star' : 'star-o';
              }

              // You can return any component that you like here!
              return <FIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1565c0',
            inactiveTintColor: 'gray',
          }}>
          {/* <Tab.Screen name="Dashboard" component={Home} /> */}
          <Tab.Screen name="Dashboard" component={Drawer} />
          <Tab.Screen name="Screen1" component={screen1} />
          <Tab.Screen name="Scree2" component={screen1} />
          <Tab.Screen name="Screen3" component={screen1} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
