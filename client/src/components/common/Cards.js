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
				<View style={styles.imageContainer}>
					<Image style={styles.profileImage} source={require('../../images/examples/12885852_1731167487105536_7785043722532779008_o.png')} />
				</View>
				<View style={styles.profileInfo}>
					<Text style={styles.profileLabels}>Name:</Text>
					<Text style={styles.profileLabels}>Last Activity:</Text>
					<Rating />
				</View>
			</View>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	cardContainer: {
		flex: 1,
		// width: width / 1.1,
		height: 150,
		flexDirection: 'row', 
		flexWrap: 'wrap',
		borderRadius: 7,
		marginTop: 20,
		backgroundColor: '#E6E6EA',
		padding: 10,
	},
	imageContainer: {
		width: '30%',
	},
	profileImage: {
		width: 100,
		height: 100,
		marginTop: 15,
		borderRadius: 50
	},
	profileLabels: {
		color: '#336B9C',
		fontWeight: 'bold',
		paddingTop: 10
	},
	profileInfo: {
		width: '60%',
		marginLeft: '5%',
		marginTop: 15,
	}
}

export { Cards }