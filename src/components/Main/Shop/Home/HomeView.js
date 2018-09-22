import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {

    // Hide Side Bar
    static navigationOptions = () => ({
        header: null
    })
    goToListProduct = () => {
        this.props.navigation.navigate('MH_ListProduct');
    }
    goToProductDetail = () => {
        this.props.navigation.navigate('MH_ProductDetail');
    }

    render() {
        //const { types } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#dbdbdb' }}>
                <Collection />
                <Category goToListProduct={this.goToListProduct} />
                <TopProduct goToProductDetail={this.goToProductDetail} />
            </ScrollView>
        );
    }
}
