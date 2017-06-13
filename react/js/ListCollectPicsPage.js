/**
 * Created by xsy on 2017/6/9.
 */
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
    Image,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


let data = ['第一','第二','第三','第四','第五','第六','第七','第八','第九','第十','第十一','第十二'];

let itemWdith = 85;

let pics = ['http://qzone.qqjay.com/u/files/2012/0225/b318cc49d09e4229aaa4278d340ea174.jpg',
            'http://img15.3lian.com/2016/w4/39/82.jpg',
            'http://www.wndhw.com/fengjing/weimei/images/wm017t1.jpg',
    'http://s4.album.sina.com.cn/pic/4a795a9102001csr',
    'http://img1.imgtn.bdimg.com/it/u=4191584223,2120911820&fm=26&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=1401906733,1406122825&fm=214&gp=0.jpg',
    'http://img16.3lian.com/gif2016/q17/86/62.jpg',
    'http://img1.3lian.com/2015/w22/55/103.jpg',
    'http://img16.3lian.com/gif2016/q17/86/65.jpg',
    'http://p2.wmpic.me/article/2015/04/29/1430288017_AxyQHlLa.jpg',
    'http://images.quanjing.com/chineseview026/high/177-1231.jpg',
    'http://img1.3lian.com/2016/w1/46/21.jpg',
]


export default class ListCollectPicsPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2}).cloneWithRows(pics)
        };

    }

    _clickItem(rowData,rowId){
        alert('点击'+ rowId +'内容'+rowData);
    }

    _renderRowCell(rowData,sectionid,rowId){
        console.log({rowData});
        return(
            <TouchableOpacity onPress = {()=>this._clickItem(rowData,rowId)}>
                <View style = {styles.viewStyle}>

                    <Image
                        source = {{uri :rowData}}
                        style = {{width:itemWdith,height:itemWdith}} />
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


