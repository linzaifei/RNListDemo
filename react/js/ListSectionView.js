/**
 * Created by xsy on 2017/6/12.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    DeviceEventEmitter,
    TouchableHighlight,
} from 'react-native';


let arr = [{
    'title':'reactNative',
    'sId':1,
    'users':[{
        'name':'飞',
        'rid':12,
    },{
        'name':'zai',
        'rid':24,
    },
        {
            'name':'zai12',
            'rid':2412,
        },
    {
        'name':'zai43re',
        'rid':2434,
    },
    {
        'name':'zewai',
        'rid':2324,
    }],

    },
    {
        'title':'weex',
        'sId':2,
        'users':[{
            'name':'飞2',
            'rid':23,
        },{
            'name':'zai2',
            'rid':44,
        },
            {
                'name':'lin2',
                'rid':67,
            }],
    },{
        'title':'IOS',
        'sId':3,
        'users':[{
            'name':'飞3',
            'rid':26,
        },{
            'name':'zai4',
            'rid':25,
        }],

    }];

export default class ListSectionView extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2,
                sectionHeaderHasChanged:(s1,s2)=>s1 !== s2,
            }),
        }
    }

    componentDidMount(){

      let length = arr.length;
      let dataBlob = {};
      let rowIds = [];
      let sectionIds = [];

      for (let i =0 ;i < length;i ++){
         let dic = arr[i];
         sectionIds.push(dic.sId);
         dataBlob[dic.sId] = dic.title;

         let userLenght = dic.users.length;

         let users = dic.users;
          rowIds[i] = [];
         for (let j =0;j < userLenght;j++){

             let user = users[j];
             rowIds[i].push(user.rid);
             dataBlob[dic.sId + ':' + user.rid] = user;

         }
      }

        this.setState({
            data : this.state.data.cloneWithRowsAndSections(dataBlob,sectionIds,rowIds)
        })
    }


    _didRows(rowId){
        alert(rowId);
    }

    _renderContent(rowData,sectionId,rowId){
        return(

            <TouchableHighlight onPress = {()=>this._didRows(rowId)}>
                <View style = {styles.viewStyle}>
                    <Text>{rowId}</Text>
                </View>
            </TouchableHighlight>

        )
    }
    renderSectionHeader(sectionData, sectionID) { // 渲染Section部分
        console.log(sectionData);
        return (
            <View style={styles.section}>
                <Text style={styles.text}>{sectionData}</Text>
            </View>
        );
    }

    render(){
        return(

            <View>
                <ListView

                    dataSource = {this.state.data}
                    renderRow = {this._renderContent}
                    renderSectionHeader = {this.renderSectionHeader}

                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f2f2f2',
    },
    viewStyle:{
        height:40,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderColor:'#d5d5d5',
        justifyContent:'center'
    },
    textStyle:{
        color:'#999999',
        fontSize:15,
    },
    section:{
        backgroundColor:'red',

    }

});