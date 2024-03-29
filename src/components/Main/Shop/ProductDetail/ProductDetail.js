// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export default class ProductDetail extends Component {
//     // Hide Side Bar
//     static navigationOptions = () => ({
//         header: null
//     })
//     back() {
//         this.props.navigation.goBack();
//     }
    
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'red' }}> 
//                 <Text>ProductDetail Component</Text>
//                 <TouchableOpacity onPress={() => { this.back(); }}>
//                     <Text>Back</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import img1 from '../../../../media/temp/sp5.jpeg';
import img3 from '../../../../media/temp/sp3.jpeg';
import img2 from '../../../../media/temp/sp4.jpeg';
import back from '../../../../media/appIcon/back.png';
import cart from '../../../../media/appIcon/cartfull.png';


export default class ProductDetail extends Component {

    static navigationOptions = () => ({
        header: null
    });
    back() {
        this.props.navigation.goBack();
    }
    render() {
        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        return (
            <View style={wrapper}>
                <ScrollView style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.back(); }}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={img1} style={productImageStyle} />
                            <Image source={img2} style={productImageStyle} />
                            <Image source={img3} style={productImageStyle} />
                            <Image source={img2} style={productImageStyle} />
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{'back of the'.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>100$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy Đây là một cái váy</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, alignItems: 'center' }}>
                                <Text style={txtMaterial}>Material Fur</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={txtColor}>Color: Black</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'black'.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        paddingHorizontal: 15,
        paddingTop: 20,
        height: 50
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 0
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});
