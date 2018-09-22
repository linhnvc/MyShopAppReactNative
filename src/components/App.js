import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { HomeStack } from '../Router';

// import Authentication from './Authentication/Authentication';
// import ChangeInfo from './ChangeInfo/ChangeInfo';
// import Main from './Main/Main';
// import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(false);

export default class App extends Component {
    render() {
        return (
            // <Navigator 
            //     initialRoute={{ name: 'MAIN' }}
            //     renderScene={(route, navigator) => {
            //         switch (route.name) {
            //             case 'MAIN': return <Main />;
            //             case 'AUTHENTICATION': return <Authentication />;
            //             case 'CHANGE_INFO': return <ChangeInfo />;
            //             default: return <OrderHistory />;
            //         }
            //     }}
            // />
            <HomeStack />
        );
    }
}
