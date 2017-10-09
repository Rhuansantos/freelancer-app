import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	Image, 
	Dimensions, 
	View} 
from 'react-native';
import { Rating } from './';


class Cards extends Component {
	constructor(){
		super();
		this.data = [];
	}
	render(){
		return(
			<View style={styles.cardContainer}>
				<Image style={styles.profileImage} source={require('../../images/examples/12885852_1731167487105536_7785043722532779008_o.png')} />
				<Text>Name:</Text>
				<Text>Last Activity:</Text>
				<Rating />
			</View>
		);
	}
}


const styles = {
	cardContainer: {
		flex: 1,
		height: 200,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50
	}
}

export { Cards }