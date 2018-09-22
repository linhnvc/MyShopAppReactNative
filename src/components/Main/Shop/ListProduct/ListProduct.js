import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList
} from 'react-native';

import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
// import sp2 from '../../../../media/temp/sp2.jpeg';

const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
];

export default class ListProduct extends Component {
    // Hide Side Bar
    static navigationOptions = () => ({
        header: null
    })
    back() {
        this.props.navigation.goBack();
    }
    goToProductDetail = () => {
        this.props.navigation.navigate('MH_ProductDetail');
    }

    renderRow = ({ item, index }) => {
        const { container, header, wrapper, backStyle, titleStyle,
            productContainer,
            productImage,
            productInfo,
            lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={productContainer}>
                <Image style={productImage} source={sp1} />
                <View style={productInfo}>
                    <Text style={txtName}>Ao phong nam</Text>
                    <Text style={txtPrice}>469.000 VND</Text>
                    <Text style={txtMaterial}>Material silk</Text>
                    <View style={lastRowInfo}>
                        <Text style={txtColor}>Color: red</Text>
                        <View style={{ backgroundColor: 'red', height: 16, width: 16, borderRadius: 8 }} />
                        <TouchableOpacity onPress={this.goToProductDetail}>
                            <Text style={txtShowDetail}>Show detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )

    }

    render() {
        const { container, header, wrapper, backStyle, titleStyle,
            productContainer,
            productImage,
            productInfo,
            lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={() => { this.back(); }}>
                        <Image source={backList} style={backStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Party dress</Text>
                    <View style={{ height: 30, width: 30 }} />
                </View>
                <FlatList
                    style={wrapper}
                    renderItem={this.renderRow}
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb',
        padding: 10
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    wrapper: {
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    backStyle: {
        height: 30,
        width: 30
    },
    titleStyle: {
        fontSize: 20,
        color: '#b10d65'
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        color: '#bcbcbc',
        fontSize: 17,
        fontWeight: '100'
    },
    txtPrice: {
        color: '#b10d65'
    },
    txtMaterial: {

    },
    txtColor: {

    },
    txtShowDetail: {
        color: '#b10d65'
    }
});


/* <TouchableOpacity onPress={() => { this.back(); }}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity> */
