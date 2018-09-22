// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export default class OrderHistory extends Component {

//     static navigationOptions = () => ({
//         header: null
//     })
    
//     goBackMain() {
//         this.props.navigation.goBack();
//     }

//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#2d86ff' }}>
//                 <Text>OrderHistory Component</Text>
//                 <TouchableOpacity onPress={() => { this.goBackMain(); }}>
//                     <Text>Back</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
// import backSpecial from '../../media/appIcon/backs.png';
import backBtn from '../../media/appIcon/back_white.png';

export default class OrderHistory extends Component {

    // Hide NavigationBar:
    static navigationOptions = () => ({
        header: null
    });
    constructor(props) {
        super(props);
        this.state = { arrOrder: [] };
    }
    goBackToMain() {
        this.props.navigation.goBack();
    }
    render() {
        const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                <TouchableOpacity onPress={() => { this.goBackToMain(); }}>
                        <Image source={backBtn} style={backIconStyle} />
                    </TouchableOpacity>
                    <Text style={headerTitle}>Order History</Text>
                    <View style={{ width: 30, height: 30 }} />
                    
                </View>
                <View style={body}>
                    <ScrollView>
                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>7A-NVCL7364519864</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>09:36:05 08/04/1997</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>298.000 VND</Text>
                            </View>
                        </View>

                        
                        <View style={orderRow}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>9C-NVCL7356245332</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>17:08:03 12/09/2017</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>360.000 VND</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-around'
    }
});
