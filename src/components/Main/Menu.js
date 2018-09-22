import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import profileIcon from '../../media/temp/profile.png';

StatusBar.setBackgroundColor('#00a06b');

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoged: true };
    }

    render() {
        const { container, 
            profileStyle, 
            btnStyle, 
            btnText, 
            btnSignInStyle, 
            loginContainer, 
            username 
        } = styles;
        const logoutJSX = (
            <View style={{}}>
                <TouchableOpacity style={btnStyle} onPress={() => this.props.openAuthentication()}>
                    <Text style={btnText} >Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>Nguyễn Văn Công Linh</Text>
                <View>
                    <TouchableOpacity 
                        style={btnSignInStyle} 
                        onPress={() => this.props.openOrderHistory()}
                    >
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={btnSignInStyle} 
                        onPress={() => this.props.openChangeInfo()}
                    >
                        <Text style={btnText}>Change Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={btnSignInStyle} 
                        onPress={() => this.props.openAuthentication()}
                    >
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
                <View />
            </View>
        );

        const mainJSX = this.state.isLoged ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profileStyle} />
                { mainJSX }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 5,
        borderColor: '#00a06b',
        alignItems: 'center', 
        backgroundColor: '#00a06b'
    },
    profileStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 50
    },
    btnStyle: {
        height: 40,
        width: 250,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    btnSignInStyle: {
        height: 40,
        width: 250,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10
    },
    btnText: {
        color: '#34b089',
        fontSize: 15
    },
    loginContainer: { flex: 1, justifyContent: 'space-between', alignItems: 'center' },
    username: { color: '#fff', fontSize: 18 } 
});


{/* <TouchableOpacity 
                    onPress={() => this.props.openAuthentication()}
                > 
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.openChangeInfo()}
                >
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.openOrderHistory()}
                >
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity> */}
