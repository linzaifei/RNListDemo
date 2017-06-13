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
    ListView,
    TouchableHighlight,
    Alert,
} from 'react-native';


let API_URL = 'https://raw.githubusercontent.com/mqy1023/react-native-listview-all/master/mock/listUser.json';
let data = ['1','2','3','4','5','6','7','8',];

export default class RNListViewDemo extends Component {

    constructor(props){
        super(props);

        var getRowData = (dataBlob,sectionId,rowId) =>{
            return dataBlob[sectionId+':'+rowId];
        };

        var getSectionHeaderData = (dataBlob,sectionId)=>{
            return  dataBlob[sectionId];
        };

        this.state = {
            loadding:true,
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                getSectionHeaderData,
                getRowData,
            }),

        }
    }

    componentDidMount(){
        this._loadData();

    }

    fetchUsersData() { // 获取数据
        return new Promise((resolve, reject) => {
            fetch(API_URL)
                .then((response) => response.json())
                .then((users) => {
                    resolve(users);
                }).catch(err => reject(err));
        });
    }
    _loadData(){
        this.fetchUsersData().then(responseData => {
            let organizations = responseData.results;
            let length = organizations.length;

            // console.log(responseData.results);
            var dataBlob ={};
            var sectionIds = [];
            var rowIds = [];


            for(let i=0;i < length ;i++){
                let organization = organizations[i];
                sectionIds.push(organization.id);

                dataBlob[organization.id] = organization.organization;

                let users = organization.users;
                let userLenght = users.length;

                rowIds[i] = [];

                for (let j = 0 ;j < userLenght;j++){
                    let user = users[j].user;
                    rowIds[i].push(user.md5);
                    dataBlob[organization.id +':'+ user.md5] = user;
                }

            }

            this.setState( {
                dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIds,rowIds),
                loadding:false,
            })


        }).done();
    }


    _Click(rowId){
        alert(rowId);
    }

    _renderContent(rowData,sectionId,rowId){
        return(

            <TouchableHighlight onPress = {()=>this._Click(rowId)}>
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

    render() {

        return (
            <View style = {styles.container}>
                <View style = {{backgroundColor:'red',height:64}}>

                </View>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = { this._renderContent}
                    renderSectionHeader = {this.renderSectionHeader}
                    // stickySectionHeadersEnabled = {false}

                />


            </View>



        );
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
        height:40,
    },
    text:{
        height:40,

    }

});

AppRegistry.registerComponent('RNListViewDemo', () => RNListViewDemo);
