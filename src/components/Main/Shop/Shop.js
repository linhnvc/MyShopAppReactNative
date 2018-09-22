import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Image, StyleSheet } from 'react-native';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
//mport HomeView from './Home/HomeView';
// import CartView from './Cart/CartView';

import Header from './Header';

import homeIcon from '../../../media/appIcon/home0.png';
import homeIconS from '../../../media/appIcon/home.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import searchIcon from '../../../media/appIcon/search0.png';
import searchIconS from '../../../media/appIcon/search.png';
import contactIcon from '../../../media/appIcon/contact0.png';
import contactIconS from '../../../media/appIcon/contact.png';

//const { width } = Dimensions.get('window');

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 'home'
        };
    }

    //  

    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        //const { selectedTab } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34b089' }}
                    >
                        <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText="8"
                        selectedTitleStyle={{ color: '#34b089' }}
                    >
                        <Cart />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34b089' }}
                    >
                        <Search />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34b089' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 23,
        height: 23
    }

});
