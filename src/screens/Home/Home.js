import React, {Component} from 'react';
import {Text, TouchableOpacity, View,  StyleSheet, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EIcon from 'react-native-vector-icons/Entypo';
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
                        <ScrollView>
                            <Text style={{fontSize:100}}>text1 </Text>
                            <Text style={{fontSize:100}}>text2 </Text>
                            <Text style={{fontSize:100}}>text3 </Text>
                            <Text style={{fontSize:100}}>text4 </Text>
                            <Text style={{fontSize:100}}>text5 </Text>
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