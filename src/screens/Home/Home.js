import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import {Body, Card, CardItem} from 'native-base';
import ProgressCircle from '../Graphs/ProgressCircle';
import BarGraph from '../Graphs/BarChart';
import BarGraph12 from '../Graphs/BarChart12';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <View style={[styles.container]}>
        {/* top bar */}
        <View style={[styles.topbar]}>
          {/* left heading */}
          <View style={[styles.heading]}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <EIcon name="menu" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>BizRizer.Inc</Text>
          </View>
          {/* nav icon */}
          <View style={[styles.nav]}>
            <EIcon
              name="location-pin"
              size={30}
              color="#1565c0"
              style={{
                backgroundColor: '#1565c0',
                opacity: 0.3,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
        {/* bottom screen */}
        <View style={[styles.bottomScreen]}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* progress circle graph */}
            <Card style={{width: '90%', height: 400, borderRadius: 20}}>
              <CardItem
                style={{
                  backgroundColor: '#fafafd',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                }}>
                <Body
                  style={{
                    // backgroundColor:'green',
                    flexDirection: 'column',
                  }}>
                  {/* heading */}
                  <View
                    style={{
                      width: '100%',
                      height: '15%',
                      // backgroundColor:'red',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20}}>Invites Overview Summary</Text>
                  </View>
                  {/* graph */}
                  <View
                    style={{
                      width: '100%',
                      height: '85%',
                      // backgroundColor:'pink'
                    }}>
                    {/* progress circle */}
                    <View
                      style={{
                        // backgroundColor:'white',
                        height: '70%',
                        width: '100%',
                      }}>
                      <ProgressCircle></ProgressCircle>
                    </View>
                    {/* labels */}
                    <View
                      style={{
                        // backgroundColor:'light blue',
                        height: '30%',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <View style={[styles.progressCircleLabel]}>
                        <View style={[styles.progressCircleLeftLabel]}>
                          <View
                            style={[
                              styles.outerRing,
                              {backgroundColor: '#0080ff'},
                            ]}>
                            <View style={[styles.innerRing]}></View>
                          </View>
                          <Text style={{marginLeft: 10, fontSize: 15}}>
                            Total
                          </Text>
                        </View>
                        <View style={[styles.progressCircleRightLabel]}>
                          <Text style={{fontSize: 15}}>10(100%)</Text>
                        </View>
                      </View>
                      <View style={[styles.progressCircleLabel]}>
                        <View style={[styles.progressCircleLeftLabel]}>
                          <View
                            style={[
                              styles.outerRing,
                              {backgroundColor: '#00b300'},
                            ]}>
                            <View style={[styles.innerRing]}></View>
                          </View>
                          <Text style={{marginLeft: 10, fontSize: 15}}>
                            Invites Opened
                          </Text>
                        </View>
                        <View style={[styles.progressCircleRightLabel]}>
                          <Text style={{fontSize: 15}}>06(60%)</Text>
                        </View>
                      </View>
                      <View style={[styles.progressCircleLabel]}>
                        <View style={[styles.progressCircleLeftLabel]}>
                          <View
                            style={[
                              styles.outerRing,
                              {backgroundColor: '#ffd500'},
                            ]}>
                            <View style={[styles.innerRing]}></View>
                          </View>
                          <Text style={{marginLeft: 10, fontSize: 15}}>
                            Click to Reviewed Sites
                          </Text>
                        </View>
                        <View style={[styles.progressCircleRightLabel]}>
                          <Text style={{fontSize: 15}}>04(40%)</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
            {/* 5star bar graph */}
            <Card style={{width: '90%', height: 400, borderRadius: 20}}>
              <CardItem
                style={{
                  backgroundColor: '#fafafd',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                }}>
                <Body
                  style={{
                    // backgroundColor:'green',
                    flexDirection: 'column',
                  }}>
                  {/* heading */}
                  <View
                    style={{
                      width: '100%',
                      height: '15%',
                      // backgroundColor:'red',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20}}>Invites Overview Summary</Text>
                  </View>
                  {/* graph */}
                  <View
                    style={{
                      height: '75%',
                      width: '100%',
                    }}>
                    <BarGraph></BarGraph>
                  </View>
                </Body>
              </CardItem>
            </Card>

            {/* 12 month bar graph */}
            <Card style={{width: '90%', height: 400, borderRadius: 20}}>
              <CardItem
                style={{
                  backgroundColor: '#fafafd',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                }}>
                <Body
                  style={{
                    // backgroundColor:'green',
                    flexDirection: 'column',
                  }}>
                  {/* heading */}
                  <View
                    style={{
                      width: '100%',
                      height: '15%',
                      // backgroundColor:'red',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20}}>Invites Overview Summary</Text>
                  </View>
                  {/* graph */}
                  <View
                    style={{
                      height: '75%',
                      width: '100%',
                    }}>
                    <BarGraph12></BarGraph12>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3fa',
    width: '100%',
    height: '100%',
  },
  topbar: {
    // backgroundColor: 'pink',
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    width: '50%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  nav: {
    width: '40%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginRight: 10,
  },
  bottomScreen: {
    width: '100%',
    height: '90%',
    backgroundColor: '#f3f3fa',
  },
  outerRing: {
    // backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  progressCircleLabel: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    justifyContent: 'space-between',
  },
  progressCircleLeftLabel: {
    // backgroundColor: 'yellow',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  progressCircleRightLabel: {
    // backgroundColor: 'orange',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
