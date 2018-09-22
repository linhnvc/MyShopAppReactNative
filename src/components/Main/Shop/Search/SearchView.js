// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export default class SearchView extends Component {

//     // Hide Side Bar
//     static navigationOptions = () => ({
//         header: null
//     })
//     goToProductDetail = () => {
//         this.props.navigation.navigate('MH_ProductDetail');
//     }
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'gray' }}>
//                 <Text>Component Search</Text>
//                 <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
//                     <Text>Go to product detail</Text>
//                 </TouchableOpacity>
//             </View>

//         );
//     }
// }

import React, { Component } from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
    ScrollView, View, Image, Dimensions,
    TextInput
} from 'react-native';

import sp1 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';


export default class SearchView extends Component {
    static navigationOptions = () => ({
        header: null
    })
    goToProductDetail = () => {
        this.props.navigation.navigate('MH_ProductDetail');
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, wrapper,
            header, inputSearch, btnSearch
        } = styles;
        return (
            <View style={wrapper}>
            <View style={header}>
                <TextInput 
                    style={inputSearch}
                    placeholder="Muốn tìm cái gì?"
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={btnSearch}>
                    <Text style={{ color: '#fff', fontSize: 15 }}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width, height: 10, backgroundColor: '#34b089' }} />
            <ScrollView>
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>BLACK DRESS</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'red',
                                    borderRadius: 15
                                }}
                            />
                            <TouchableOpacity onPress={this.goToProductDetail}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={product}>
                    <Image source={sp4} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>BLACK DRESS</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'red',
                                    borderRadius: 15
                                }}
                            />
                            <TouchableOpacity onPress={this.goToProductDetail}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                
            </ScrollView>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
    },
    header: { 
        paddingLeft: 10, 
        paddingRight: 10, 
        height: 38, 
        width,
        backgroundColor: '#34b089', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    inputSearch: { height: 36, 
        width: width - 110, 
        borderRadius: 18, 
        backgroundColor: '#fff',
        paddingVertical: 0,
        paddingLeft: 15,
        fontSize: 15,
       
    },
    btnSearch: {
        // backgroundColor: '#34b089',
        // height: 40,
        // width: 80,
        // borderRadius: 20,
        // borderWidth: 1,
        // borderColor: '#00a06b',
        // justifyContent: 'center',
        // paddingVertical: 0,
        // flexDirection: 'column'
        height: 36,
        //margin: 10,
        width: 80,
        marginTop: 0,
        backgroundColor: '#00a06b',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});
