import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

StatusBar.setHidden(false);
StatusBar.setBackgroundColor('#34b089');

export default class Main extends Component {

    // Hide Side Bar
    static navigationOptions = () => ({
        header: null
    })

    goToAuthentication = () => {
        this.props.navigation.navigate('ManHinh_Authentication');
    }
    goToChangeInfo = () => {
        this.props.navigation.navigate('ManHinh_ChangeInfo');
        // o day d co navigator ma'
        // t thu sua cai dau tien, tai luc dau lam theo no ko chay dc
        // yeah chay dc roi day
        // m gioi vl
        // m khen t bang thua :))
        // master rn roi :))
        // dcm the di ngu cmm di
        // t di ngu? de m hoc dc nhieu cai hon t a'. D ngu? :))
        // thoi cha biet noi gi nua
        // m noi di
        // dcm m. noi' xong r
        // thoi lam tiep di
        // ukm
        // bye 6
        // 658.06 :))
        // t tat teamviewer 
        // ok
    }
    goToOrderHistory = () => {
        this.props.navigation.navigate('ManHinh_OrderHistory');
    }

    closeControlPanel = () => {
        this.drawer.close();
    }
    openControlPanel = () => {
        this.drawer.open();
    }

    render() {
        //const { navigator } = this.props;
        return (
            // <View style={{ flex: 1, backgroundColor: '#b4b4b4' }}>
            //     <StatusBar 
            //         backgroundColor="black"    
            //         barStyle="light-content"            
            //     />
            //     <Text>Main Component</Text>
            //     <TouchableOpacity onPress={() => { this.goToAuthentication(); }}>
            //         <Text>Go to Authentication</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => { this.goToChangeInfo(); }}>
            //         <Text>Go to ChangeInfo</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => { this.goToOrderHistory(); }}>
            //         <Text>Go to OrderHistory</Text>
            //     </TouchableOpacity>

            // </View>
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu 
                    openAuthentication={this.goToAuthentication} 
                    openChangeInfo={this.goToChangeInfo} 
                    openOrderHistory={this.goToOrderHistory}
                />}
                openDrawerOffset={0.3}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }// ch
} 
