import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	Image, 
	Dimensions, 
	View} 
from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Rating extends Component {

	render(){
		return(
			<View style={styles.cardContainer}>
				<Text style={styles.labels}>RATING: <Icon name="star" size={13} color="white" />
					<Icon name="star" size={13} color="white" />
					<Icon name="star" size={13} color="white" />
					<Icon name="star" size={13} color="white" />
					<Icon name="star-half-empty" size={13} color="white" />
				</Text>
			</View>
		);
	}
}


const styles = {
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	labels: {
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 10
	},
}

export { Rating };