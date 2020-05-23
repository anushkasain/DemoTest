import React, { Component } from 'react';
import {
    View,
    Text,
     StyleSheet, TextInput, TouchableOpacity,Image
} from 'react-native';
import * as Validation from '../common/Validation'


const Header = ({ style,goBack,addAction }) => (
    <View style={styles.headerView}>
        <TouchableOpacity onPress={()=>goBack()}>
        <Image source={require('../assets/back.png')} 
        style={styles.headerImg}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>addAction()}>
     <Text style={styles.headerTxt}> Add </Text>
      </TouchableOpacity>
    </View>
   
)
class AddData extends Component {

    constructor(props) {
        super(props)
        this.index = this.props.navigation.state.params&&this.props.navigation.state.params.index
        
        this.state = {
            nameTxt: this.props.navigation.state.params&&this.props.navigation.state.params.data?this.props.navigation.state.params.data.name:'',
            typeTxt:this.props.navigation.state.params&&this.props.navigation.state.params.data?this.props.navigation.state.params.data.type:''
        }
    }
    componentDidMount = () => {
        console.log("edit::---did",this.props.navigation.state.params&&this.props.navigation.state.params.index);

     }
//action
addData=()=>{
    let mzg = ''
   if(this.state.nameTxt==''){
    mzg = Validation.EMPTY_NAME_ERR
   }else if(this.state.typeTxt == ''){
    mzg = Validation.EMPTY_TYPE_ERR
   }
   if(mzg!=''){
    alert(mzg)
    return;
   }
   console.log("edit::---",this.index);

  this.props.navigation.state.params&&this.props.navigation.state.params.gobackData({name:this.state.nameTxt,type:this.state.typeTxt,index:this.index})
  this.props.navigation.goBack()
}

render() {
    
    return (
        <View style={styles.container}>
            <Header 
            goBack={()=>this.props.navigation.goBack()}
            addAction={()=>this.addData()}/>
            <View style={styles.conatinerView}>

                <TextInput
                    placeholder={'Name'}
                    style={styles.txtInput}
                    value={this.state.nameTxt}
                    onChangeText={(txt) => this.setState({ nameTxt: txt })}
                />
                <TextInput
                    placeholder={'Type'}
                    style={styles.txtInput}
                    value={this.state.typeTxt}
                    onChangeText={(txt) => this.setState({ typeTxt: txt })}
                />
                <TouchableOpacity style={styles.loginView} onPress={() => this.loginBtnClk()}>
                    {/* <Text style={styles.txtLogin}>Login</Text> */}
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(224,225,227)'
    },
    conatinerView: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 30
    },

    txtInput: {
        backgroundColor: 'white',
        borderWidth: .5,
        borderColor: 'white',
        marginTop: 30,
        height:45
    },
    txtLogin: {
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    loginView: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    headerView:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical:10,
        justifyContent:'space-between'

    },
    headerImg:{
        tintColor:'black',
        marginLeft:10
    },
    headerTxt:{
        marginRight:10
    }

});


export default AddData
