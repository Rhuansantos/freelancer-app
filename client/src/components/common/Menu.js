import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Menu extends Component{



	render(){
		return(
			<View style={styles.menuContainer}>
				<View>
					<Image style={styles.profilePicture}
					source={require('../../images/examples/profile.jpg')}/>
				</View>

			</View>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	menuContainer: {
		width: 300,
		height: height,
		backgroundColor: 'rgba(36,123,160, 0.4)'
	},
	profilePicture: {
		width: 200,
		height: 200,
		marginLeft: '10%',
		borderRadius: 100
	}
}