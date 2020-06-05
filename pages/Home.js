import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Button} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Text style={styles.title}>street eats</Text>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Button title="find a truck"/>
                <Button ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                        colors: ['red', 'pink'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }} title="register a truck" type="outline" containerStyle={styles.button}/>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    button:{
        backgroundColor: "white",
    }
  });