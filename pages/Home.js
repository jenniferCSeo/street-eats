import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Button } from 'react-native-elements'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                    <View style={styles.container}>
                    <Text style={styles.title}>street eats</Text>
                    <Image style={styles.logo} source={require('../assets/logo.png')}/>
                    <View style={styles.btncontainer}>
                        <Button style={styles.btn} onPress={() => this.props.navigation.navigate('TruckMap')} title="find a truck"/>
                        <Button style={styles.btn} title="register a truck"/>
                    </View>
                    </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff781f',
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
        width: 80,
        height: 80,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    btncontainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    btn:{
        flex: 1,
    },
  });