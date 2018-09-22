import React, { Component } from 'react';
import { View, 
    Text, TouchableOpacity, Dimensions, Image, StyleSheet 
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { width } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, row1, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>CÔNG LINH</Text>
                    <TouchableOpacity>
                        <Image source={icLogo} style={iconStyle} />
                    </TouchableOpacity>
                </View>
                {/* <TextInput 
                    style={textInput} 
                    placeholder="Bạn muốn mua gì?"
                    underlineColorAndroid="transparent"
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: 55, 
        backgroundColor: '#34b089', 
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: 5,
        justifyContent: 'space-around'
    },
    row1: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontSize: 23
    },
    textInput: { 
        height: width / 13, 
        backgroundColor: '#fff', 
        padding: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderRadius: width / 26
    }, 
    iconStyle: { width: 25, height: 25 }
});


// <TouchableOpacity onPress={this.props.onOpen}>
//                     <Text>Open Menu</Text>
//                 </TouchableOpacity>
