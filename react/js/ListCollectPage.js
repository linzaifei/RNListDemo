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
    NativeModules,
    ListView,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


let data = ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十','第十一','第十二'];


let itemWdith = 85;

export default class ListCollectPage extends Component {

    constructor(props){
        super(props);

        this.state = {
          dataSource : new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2}).cloneWithRows(data)
        };

    }

    _clickItem(rowData,rowId){
        alert('点击'+ rowId +'内容'+rowData);
    }

    _renderRowCell(rowData,sectionid,rowId){
        return(
            <TouchableOpacity onPress = {()=>this._clickItem(rowData,rowId)}>
            <View style = {styles.viewStyle}>
                <Text style = {styles.textStyle}>{rowData}</Text>
            </View>
            </TouchableOpacity>

        );
    }
    
    _randerContent(){
        return(

            <View style = {styles.container}>
                <ListView
                    initialListSize={12}
                    dataSource  = {this.state.dataSource}
                    renderRow = {(rowData,sectionid,rowId)=> this._renderRowCell(rowData,sectionid,rowId)}
                    contentContainerStyle={styles.listviewStyle}

                />

            </View>

        )
    }

  render() {
    return(

        this._randerContent()
    )
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
    listviewStyle:{
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textStyle:{
        color:'#999',
        fontSize:15,
        margin:5,
    },
    viewStyle:{
        backgroundColor:'white',
        borderColor:'#d5d5d5',
        borderWidth:1,
        height:itemWdith,
        width:itemWdith,
        padding: 5,
        margin: 5,
        justifyContent:'center',
        alignItems:'center',
    }
});


