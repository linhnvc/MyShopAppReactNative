import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import bannerImg from '../../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imgStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4 }} >
                    <Image source={bannerImg} style={imgStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}

const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        // height: height * 0.35,
        width: width - 20,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2, 
        padding: 10, 
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#afaeaf'
    }, 
    imgStyle: {
        width: imgWidth,
        height: imgHeight
    }
});
