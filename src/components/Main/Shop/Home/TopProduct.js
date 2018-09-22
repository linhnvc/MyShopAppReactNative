import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';


export default class TopProduct extends Component {

    
    render() {
        const { 
            container, 
            titleContainer, 
            title, 
            body, 
            productContainer, 
            productImage,
            productName,
            productPrice
        } = styles;
        return (
            <View style={container}> 
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity 
                        style={productContainer} 
                        onPress={() => this.props.goToProductDetail()}
                    >
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Áo phông nam</Text>
                        <Text style={productPrice}>699.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={productContainer} 
                        onPress={() => this.props.goToProductDetail()}
                    >
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Chân váy nữ</Text>
                        <Text style={productPrice}>589.000 VND</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }} />
                    <TouchableOpacity 
                        style={productContainer} 
                        onPress={() => this.props.goToProductDetail()}
                    >
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Áo phông nam</Text>
                        <Text style={productPrice}>699.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={productContainer} 
                        onPress={() => this.props.goToProductDetail()}
                    >
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Chân váy nữ</Text>
                        <Text style={productPrice}>589.000 VND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize: 20,
        color: '#d3d3cf'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
        
        backgroundColor: 'red'
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    }, 
    productName: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#d3d3cf',
        fontWeight: '300',
        marginVertical: 5
    }, 
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        color: '#662f90'
    }
});
