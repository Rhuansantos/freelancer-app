import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

export default class Menu extends Component{



	render(){
		return(
			<View style={styles.menuContainer}>
				<View>
					<Image style={styles.profilePicture}
					source={require('../../images/examples/12885852_1731167487105536_7785043722532779008_o.png')}/>
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