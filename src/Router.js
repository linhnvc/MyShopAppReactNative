//import React from 'react';
import { StackNavigator } from 'react-navigation';

import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import Main from './components/Main/Main';
import OrderHistory from './components/OrderHistory/OrderHistory';

import HomeView from './components/Main/Shop/Home/HomeView';
import ProductDetail from './components/Main/Shop/ProductDetail/ProductDetail';
import ListProduct from './components/Main/Shop/ListProduct/ListProduct';

import CartView from './components/Main/Shop/Cart/CartView';
import SearchView from './components/Main/Shop/Search/SearchView';

export const HomeStack = StackNavigator({
    ManHinh_Main: {
        screen: Main
    },
    ManHinh_Authentication: {
        screen: Authentication
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo
    },
    ManHinh_OrderHistory: {
        screen: OrderHistory
    }
});

export const StackScreenAtHome = StackNavigator({
    MH_HomeView: {
        screen: HomeView
    },
    MH_ProductDetail: {
        screen: ProductDetail
    },
    MH_ListProduct: {
        screen: ListProduct
    }
});

export const StackScreenAtCart = StackNavigator({
    MH_HomeView: {
        screen: CartView
    },
    MH_ProductDetail: {
        screen: ProductDetail
    }
});

export const StackScreenAtSearch = StackNavigator({
    MH_HomeView: {
        screen: SearchView
    },
    MH_ProductDetail: {
        screen: ProductDetail
    }
});
