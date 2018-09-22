import React, { Component } from 'react';
import {
    View, Text, ImageBackground,
    StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';


const { width } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        //const { types } = this.props;
        const { wrapper, textStyle, imgStyle, title } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper showsPagination width={imgWidth} height={imgHeight}>

                        <TouchableOpacity onPress={() => this.props.goToListProduct()}>
                            <ImageBackground source={littleIcon} style={imgStyle}>
                                <Text style={title}>Cong Linh</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.goToListProduct()}>
                            <ImageBackground source={littleIcon} style={imgStyle}>
                                <Text style={title}>Cong Linh</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                    </Swiper>
                </View>
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
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 20,
        color: '#afaeaf'
    },
    imgStyle: {
        width: imgWidth,
        height: imgHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#9a9a9a'
    }
});
