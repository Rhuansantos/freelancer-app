import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerBackground}>
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} />
	  </View>
	</View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = {
  spinnerStyle: {
	// top: -70,
  },
};

export { Spinner };
