import React from 'react'
import { Marker} from 'react-native-maps';
// const truckImg = require('../assets/truck.png')

export default class TruckStop extends React.Component {
    //what props to pass in? definitely a logo
    constructor(props) {
        super(props);
    }

    //need to figure out how to get location from someone's phone...
    render() {
        return (
            <Marker
                pinColor='indigo'
                coordinate={{latitude: this.props.latitude, longitude:this.props.longitude}}
                onPress={() => alert("ouch!")}
            >

            </Marker>
        );
    }
}