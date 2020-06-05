import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import TruckStop from '../components/TruckStop';

export default class TruckMap extends React.Component {
    render() {
      return (
        <React.Fragment>
            <MapView style={styles.mapStyle} 
                initialRegion={{
                    latitude: 49.8844,
                    longitude: -97.14704,
                    latitudeDelta: 0.12,
                    longitudeDelta: 0.004
                }}
            >
            <TruckStop 
                latitude={49.8874}
                longitude={-97.1313}
            />
            </MapView>
          </React.Fragment>
      );
    }
  }

  const styles = StyleSheet.create({
    mapStyle : {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
  });