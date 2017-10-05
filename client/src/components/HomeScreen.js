import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component{
	render() {
		return (
			<View>
				<Text>Hi</Text>
				    <Button
					onPress={() => this.props.navigation.dispatch({ type: 'Profile' })}
					title="Log in"
					/>
			</View>
		);
	}
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: null,
};

export default HomeScreen;
