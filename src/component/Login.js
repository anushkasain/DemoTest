import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Dimensions
} from 'react-native';
import { loginAction } from '../actions/actions'
import { connect } from 'react-redux'
import * as Validation from '../common/Validation'
import * as NaviagtionService from '../../NavigationService'
import * as Constant from '../constant/index'

class Login extends Component {

    constructor(props) {
        super(props)
        this.refreshTempData = undefined
        this.state = {
            emailTxt: 'delvin@mailinator.com',
            passTxt: '12345678'
        }
    }
    componentDidMount = () => { }

    //APi
    loginApi = () => {
        let data = {
            device_id: '654321',
            device_type: 'IOS',
            device_token: '12345',
            email: this.state.emailTxt,
            password: this.state.passTxt
        }
        this.props.loginAction(data)
    }
    responseHnadle = (data) => {
        console.log("data::--", data);
        this.props.navigation.navigate(Constant.homeScreen)
    }
    //Action
    loginBtnClk = () => {
        if (Validation.emailValidation(this.state.emailTxt) && Validation.passValidation(this.state.passTxt)) {
            this.loginApi()
        }
    }

    render() {
        const { loading, data } = this.props
        data && this.responseHnadle(data)

        return (
            <View style={styles.container}>
                <View style={styles.conatinerView}>

                    <TextInput
                        placeholder={'Email'}
                        style={styles.txtInput}
                        value={this.state.emailTxt}
                        onChangeText={(txt) => this.setState({ emailTxt: txt })}
                    />
                    <TextInput
                        placeholder={'Password'}
                        style={styles.txtInput}
                        value={this.state.passTxt}
                        onChangeText={(txt) => this.setState({ passTxt: txt })}
                    />
                    <TouchableOpacity style={styles.loginView} onPress={() => this.loginBtnClk()}>
                        <Text style={styles.txtLogin}>Login</Text>
                    </TouchableOpacity>
                </View>
                {
                    loading &&
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <ActivityIndicator size={'large'} color={'black'} />
                    </View>
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
    }

});

const mapStateToProps = ({ fetchReducer }) => ({
    loading: fetchReducer.fetching,
    data: fetchReducer.data,
})
const mapDispatchToProps = {
    loginAction: loginAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
