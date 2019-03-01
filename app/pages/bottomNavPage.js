import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BottomNavPage extends Component {
    static navigationOptions = {
        title: 'Mercado Opção',
    };

    render() {
        return (
            <View>
                <Text>
                    BottomNav
                </Text>
            </View>
        );
    }
}