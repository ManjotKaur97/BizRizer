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

export default class BarChart12 extends Component {
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
            // justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              //   backgroundColor: 'yellow',
              width: '10%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>0</Text>
          </View>
          <View
            style={{
              //   backgroundColor: 'pink',
              width: '90%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 10}}>Apr</Text>
            <Text style={{fontSize: 10}}>May</Text>
            <Text style={{fontSize: 10}}>Jun</Text>
            <Text style={{fontSize: 10}}>Jul</Text>
            <Text style={{fontSize: 10}}>Aug</Text>
            <Text style={{fontSize: 10}}>Sep</Text>
            <Text style={{fontSize: 10}}>Oct</Text>
            <Text style={{fontSize: 10}}>Nov</Text>
            <Text style={{fontSize: 10}}>Dec</Text>
            <Text style={{fontSize: 10}}>Jan</Text>
            <Text style={{fontSize: 10}}>Feb</Text>
            <Text style={{fontSize: 10}}>Mar</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerBar: {
    backgroundColor: '#dde4f6',
    width: '4%',
    height: '99%',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
});
