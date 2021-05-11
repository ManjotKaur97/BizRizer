import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Random Screen</Text>
      </View>
    );
  }
}
