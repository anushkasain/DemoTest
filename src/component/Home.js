import React, { Component } from 'react';
import {
    View,
    Text, Image,
    FlatList, StyleSheet, TouchableOpacity, Dimensions
} from 'react-native';
import * as Constant from '../constant/index'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.refreshTempData = undefined
        this.state = {
            listData: [{name: 'Name',type:'Types',add:'Add' }],
        }
    }
    componentDidMount = () => {

    }

    //Action
    getDataFromAddData=(item)=>{
        let data = [...this.state.listData]
        if (item.index!=undefined) {
            data[item.index] = item
        }else{
        data.push(item)
        }
        this.setState({listData:data})
    }
    editBtnClk = (item,index) => {
       this.props.navigation.navigate(Constant.AddDataScreen,
        {
            gobackData:(item)=>this.getDataFromAddData(item),
            data:item&&item,
            index:index?index:undefined
        })
    }
    deleteBtnClk = (item,index) => {
      let data = [...this.state.listData]
      data.splice(index,1)
      this.setState({listData:data})
    }
    renderItem = (item, index) => {
        return (
            <View style={[{ flex: 1 }, styles.sepratorStyle]}>
                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingVertical: 2 }}>
                    <View style={{ flex: .8, alignItems: 'center', flexDirection: 'row', paddingVertical: 5 }}>
                        <Image source={require('../assets/icon.png')} style={styles.imgStyle} />
                        <Text style={styles.itemHeader}>
                            {item.name}
                          
                        </Text>
                        <Text style={[styles.itemHeader,{marginLeft:5}]}>
                            {item.type}
                        </Text>
                    </View>
                    
                    <View style={[styles.txtBtnView]}>
                    {
                            index!=0?
                        <>
                        <TouchableOpacity style={styles.sepratorStyleTxt} onPress={() => this.editBtnClk(item,index)}>
                            <Text style={[styles.txtBtn]}>Edit</Text>
                        </TouchableOpacity >
                        
                        <TouchableOpacity style={styles.sepratorStyleTxt} onPress={() => this.deleteBtnClk(item,index)}>
                            <Text style={styles.txtBtn}>Delete</Text>
                        </TouchableOpacity>
                        </>:
                        <TouchableOpacity style={{}} onPress={() => this.editBtnClk()}>
                          <Text style={[styles.txtBtn]}>Add</Text>
                        </TouchableOpacity >
             }
                    </View>
                </View>

            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.state.listData != undefined &&
                    <FlatList
                        style={styles.list}
                        data={this.state.listData}
                        renderItem={({ item, index }) => this.renderItem(item, index)}
                        extraData={this.state.listData}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(224,225,227)'
    },
    list: {
        margin: 2,
        backgroundColor:'rgb(224,225,227)'
    },
    item: {
    },
    txtInput: {
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 2,
        paddingHorizontal: 2,
        height: 45
    },
    checkBox: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 2,
        width: 15,
        aspectRatio: 1
    },
    txtStock: {
        marginHorizontal: 5
    },
    checkBoxParent: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: .5,
        paddingHorizontal: 20
    },
    txtHeder: {
        fontWeight: '800',
        color: 'black'
    },
    txtItem: {
        // fontWeight:'500',
        color: 'grey'
    },
    itemHeader: {
        marginHorizontal: 10,
        fontWeight: '800',
    },
    sepratorStyle: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

    },
    sepratorStyleTxt: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 5,
        width: '100%',
        alignItems: 'center'
    },
    imgStyle: {
        borderRadius: 25,
        width: 50,
        aspectRatio: 1,
        borderWidth: .5,
        borderColor: 'black',
        
    },
    txtBtn: {
        color: 'black'
    },
    txtBtnView: {
        borderWidth: 1,
        borderColor: 'black',
        flex: .2,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 2,
        marginRight:4
    }
});
