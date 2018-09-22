import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet,
    TextInput
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {

    static navigationOptions = () => ({
        header: null
    })
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }

    goBackMain() {
        this.props.navigation.goBack();
    }

    render() {
        const { container, row1, iconStyle, titleStyle, controlStyle,
            signInStyle, signUpStyle,
            activeStyle,
            inActiveStyle,
            inputStyle,
            bigButton,
            bigButtonText
        } = styles;

        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={bigButtonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" />
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TextInput style={inputStyle} placeholder="Re-enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={bigButtonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={() => { this.goBackMain(); }} >
                        <Image
                            source={icBack}
                            style={iconStyle}
                        // onPress={this.props.onOpen}
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>LAZALING</Text>
                    <TouchableOpacity>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                </View>

                {mainJSX}

                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle}>
                        <Text
                            style={isSignIn ? activeStyle : inActiveStyle}
                            onPress={this.signIn.bind(this)}
                        >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle}>
                        <Text
                            style={!isSignIn ? activeStyle : inActiveStyle}
                            onPress={this.signUp.bind(this)}
                        >SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3eb377',
        padding: 20,
        justifyContent: 'space-between',
        // marginItems: 'center'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontSize: 25
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },

    inActiveStyle: {
        color: '#d7d7d7'
    },
    activeStyle: {
        color: '#3eb377'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        // paddingVertical: 20,
        height: 50,
        flex: 1,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderRightWidth: 1,
        borderColor: '#3eb377',
        justifyContent: 'center'
    },
    signUpStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        // paddingVertical: 20,
        height: 50,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center'
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 25,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderColor: '#fff',
        // placeholderColor: 'red'
    },
    bigButton: {
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigButtonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '100'
    }
});
