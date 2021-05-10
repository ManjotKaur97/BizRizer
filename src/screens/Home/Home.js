import React, {Component} from 'react';
import {Text, TouchableOpacity, View,  StyleSheet, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import { Body, Card, CardItem } from 'native-base';
export default class Home extends Component{
    constructor(props){
        super(props)

    }
    render(){
        const Drawer = createDrawerNavigator();
        return(
            <View style={[styles.container]}>
                  {/* top bar */}
                    <View style={[styles.topbar]}>
                        {/* left heading */}
                        <View style={[styles.heading]}>
                        <TouchableOpacity 
                       
                        onPress={()=>{this.props.navigation.toggleDrawer();}}>
                                <EIcon name="menu" size={30} color="#900" />
                        </TouchableOpacity>
                        <Text>BizRizer.Inc</Text>
                        </View>
                        {/* nav icon */}
                        <View style={[styles.nav]}>
                        
                        <EIcon name="location-pin" size={30} color="#900" />
                        </View>
                       
                    </View>
                    {/* bottom screen */}
                    <View style={[styles.bottomScreen]}>
                        <ScrollView
                        contentContainerStyle={{
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Card style={{width:'90%',height:300}}>
                                <CardItem style={{backgroundColor:'orange',width:'100%',height:'100%'}}>
                                    <Body style={{backgroundColor:'green',flexDirection:'column'}}>
                                        {/* heading */}
                                        <View style={{ 
                                            width:'100%',
                                            height:'20%',
                                            backgroundColor:'red',
                                            flexDirection:'row',
                                            justifyContent:'space-evenly',
                                            alignItems:'center'
                                        }}>
                                            <Text>Google</Text>
                                            <AIcon name="google" size={30} color="#900" />
                                        </View>
                                        {/* graph */}
                                        <View style={{width:'100%',height:'80%',backgroundColor:'pink'}}>

                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={{width:'90%',height:300}}>
                                <CardItem style={{backgroundColor:'orange',width:'100%',height:'100%'}}>
                                    <Body style={{backgroundColor:'green',flexDirection:'column'}}>
                                        <Text></Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card style={{width:'90%',height:300}}>
                                <CardItem style={{backgroundColor:'orange',width:'100%',height:'100%'}}>
                                    <Body style={{backgroundColor:'green'}}>
                                        <Text></Text>
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
    container:{
        backgroundColor:'#dde4f6',
        width:'100%',
        height:'100%'
    },
    topbar:{
        backgroundColor:"pink",
        width:'100%',
        height:'10%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    heading:{
        width:'50%',
        height:'80%',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'red'
    },
    nav:{
        width:'40%',
        height:'80%',
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'blue',
        marginRight:10
    },
    bottomScreen:{
        width:'100%',
        height:'90%',
        backgroundColor:'yellow'
    }
    
  });