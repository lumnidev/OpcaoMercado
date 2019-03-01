import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SignInPage extends Component {
    static navigationOptions = {
        title: 'Entrar',
    };

    render() {
        return (
            <View>
                <Text>
                    SignInScreen
                </Text>
                <Button
                    title="Ir para página principal"
                    onPress={() => this.props.navigation.navigate('BottomNavPage', { name: 'test' })}
                />
            </View>
        );
    }
}