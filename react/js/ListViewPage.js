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
    TouchableHighlight,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


let data = ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十','第十一','第十二'];
export default class ListViewPage extends Component {

    constructor(props){
        super(props);

        this.state = {
          dataSource : new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2}).cloneWithRows(data)
        };

    }

    _renderRowCell(rowData,sectionIds,rowIds){
        console.log(rowIds);
        return(
        <TouchableHighlight onPress ={()=> this._didSelect(rowIds)} onLongPress = {()=>this._deleteRow(rowIds)} >
            <View style = {styles.viewStyle}>
                <Text style = {styles.textStyle}>{rowData}</Text>

            </View>
        </TouchableHighlight>

        );
    }

    _didSelect(rowid){
        alert('点击了'+rowid);
    }
    _deleteRow(rowid){
        delete data[rowid];
        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
        })

    }
    _addHeader(){
        return(
            <View style = {{height:200,backgroundColor:'red'}}>


            </View>

        );
    }

    _randerContent(){
        return(

            <View style = {styles.container}>
                <ListView style = {{flex:1}}

                dataSource  = {this.state.dataSource}
                renderRow = {(rowData,sectionIds,rowIds)=> this._renderRowCell(rowData,sectionIds,rowIds)}
                          renderHeader = {this._addHeader}
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
        // justifyContent:'center',
        // alignItems:'center',
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle:{
        color:'#999',
        fontSize:15,
        margin:5,
    },
    viewStyle:{
        backgroundColor:'white',
        borderColor:'#d5d5d5',
        borderBottomWidth:0.5,
        height:40,
        justifyContent:'center',
    }
});


