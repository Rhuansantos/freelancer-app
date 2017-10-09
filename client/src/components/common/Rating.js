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
				<Text style={styles.profileLabels}>RATING: <Icon name="star" size={13} color="white" />
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
	cardContainer: {
		// flex: 1,
		// height: 200,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50
	}
}

export { Rating };