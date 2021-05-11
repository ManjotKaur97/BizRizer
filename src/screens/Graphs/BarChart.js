import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import ActivityRings from 'react-native-activity-rings';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          //   backgroundColor: 'pink',
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '90%',
            // backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          {/* left labels */}
          <View
            style={{
              //   backgroundColor: 'yellow',
              width: '10%',
              height: '90%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>5 </Text>
            <Text>4 </Text>
            <Text>3 </Text>
            <Text>2 </Text>
            <Text>1 </Text>
          </View>

          <View
            style={{
              backgroundColor: '#f2f2f2',
              width: '90%',
              height: '100%',
              //   borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            {/* bar 1 */}
            <View style={[styles.outerBar]}>
              <View
                style={{
                  backgroundColor: '#1565c0',
                  width: '100%',
                  height: '20%',
                  borderRadius: 20,
                }}></View>
            </View>
            {/* bar 2 */}
            <View style={[styles.outerBar]}>
              <View
                style={{
                  backgroundColor: '#1565c0',
                  width: '100%',
                  height: '40%',
                  borderRadius: 20,
                }}></View>
            </View>
            {/* bar 3 */}
            <View style={[styles.outerBar]}>
              <View
                style={{
                  backgroundColor: '#1565c0',
                  width: '100%',
                  height: '60%',
                  borderRadius: 20,
                }}></View>
            </View>
            {/* bar 4 */}
            <View style={[styles.outerBar]}>
              <View
                style={{
                  backgroundColor: '#1565c0',
                  width: '100%',
                  height: '80%',
                  borderRadius: 20,
                }}></View>
            </View>
            {/* bar 5 */}
            <View style={[styles.outerBar]}>
              <View
                style={{
                  backgroundColor: '#1565c0',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                }}></View>
            </View>
          </View>
        </View>
        {/* bottom labels */}
        <View
          style={{
            width: '100%',
            height: '10%',
            // backgroundColor: '#f2f2f2',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>0</Text>
          <Text>1 Star</Text>
          <Text>2 Star</Text>
          <Text>3 Star</Text>
          <Text>4 Star</Text>
          <Text>5 Star</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerBar: {
    backgroundColor: '#dde4f6',
    width: '10%',
    height: '99%',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
});
