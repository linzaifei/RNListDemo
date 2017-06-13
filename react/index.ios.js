/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,

    DeviceEventEmitter,
} from 'react-native';

import ListViewPage from './js/ListViewPage';
import ListCollectPage from  './js/ListCollectPage';
import ListCollectPicsPage from  './js/ListCollectPicsPage';
import ListSectionView from './js/ListSectionView'
import ListNetSectionView from  './js/ListNetSectionView'

export default class RNListDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            index : 0,
        }

    }

    _didFirst(index){
        this.setState({
            index:index,
        })
    }


  render() {
        switch (this.state.index) {
            case 0:{
                return (
                    <View style={[styles.container, styles.center]}>
                        <Text style = {styles.Textstyle} onPress={()=>this._didFirst(1)}>ListView</Text>
                        <Text style = {styles.Textstyle} onPress={()=>this._didFirst(2)}>ListSectionView</Text>
                        <Text style = {styles.Textstyle} onPress={()=>this._didFirst(3)}>ListNetSectionView（网络请求）</Text>
                        <Text style = {styles.Textstyle} onPress={()=>this._didFirst(4)}>ListCollectPage</Text>
                        <Text style = {styles.Textstyle} onPress={()=>this._didFirst(5)}>ListCollectPicsPage</Text>
                    </View>
                )
            }break;
            case 1:{
                return(
                    <ListViewPage></ListViewPage>
                )
            }break;
            case 2:{
                return(
                    <ListSectionView></ListSectionView>
                )
            }break;
            case 3:{
                return (
                <ListNetSectionView></ListNetSectionView>
                )
            }break;

            case 4:{
                return(
                    <ListCollectPage></ListCollectPage>
                )
            }break;
            case 5:{
                return(
                    <ListCollectPicsPage></ListCollectPicsPage>
                )
            }break;

            default:
                break
        }


  };
}

var styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'#f5f5f5',

    },
    center:{
      justifyContent:'center',
        alignItems:'center',
    },
    navigator:{
        height:64,
        backgroundColor:'red',

    },
    Textstyle:{
        color:'#999999',
        fontSize:15,
        margin:5,

    }

});

AppRegistry.registerComponent('RNListDemo', () => RNListDemo);
