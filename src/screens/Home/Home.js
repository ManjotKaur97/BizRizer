import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Home extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View style={{flex:1,flexGrow:1,backgroundColor:'red',width:'100%',height:'100%'}}>
                <View style={{flexGrow:0.1,backgroundColor:'white',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                   
                    <TouchableOpacity style={{width:'30%',height:'80%',backgroundColor:'pink'}}
                    onPress={()=>{console.log('drawer pressed')}}>
                    <Text>Drawer</Text>
                    </TouchableOpacity>
                    <Text >BizRizer.Inc</Text>
                    <Text>nav</Text>
                </View>
            </View>
        );
    }
}