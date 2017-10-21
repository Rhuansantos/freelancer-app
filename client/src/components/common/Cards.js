import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	Image, 
	Dimensions, 
	View,
	Button,
	TouchableOpacity
} 
from 'react-native';
import { Rating } from './';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cards extends Component {
	seeMore(){
		return null;
	}
	constructor(props){
		super(props);
		this.data = [];
	}
	render(){
		return(
			<TouchableOpacity onPress={()=> this.props.screenProps.dispatch({ type: 'Profile' })}>
				<View style={styles.cardContainer}>
					<View style={styles.imageContainer}>
						<Image style={styles.profileImage} source={require('../../images/examples/profile.jpg')} />
					</View>
					<View style={styles.profileInfo}>
						<Text style={styles.profileLabels}>Name: <Text style={styles.profileContent}>Rhuan</Text></Text>
						<Text style={styles.profileLabels}>Last Activity: <Text style={styles.profileContent}>3 days ago</Text></Text>
						<Text style={styles.profileLabels}>Rating:  <Icon name="star" size={13} color="#336B9C" />
						<Icon name="star" size={13} color="#336B9C" />
						<Icon name="star" size={13} color="#336B9C" />
						<Icon name="star" size={13} color="#336B9C" />
						<Icon name="star-half-empty" size={13} color="#336B9C" />
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	cardContainer: {
		flex: 1,
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
	},
	profileContent: {
		fontWeight: 'normal'
	}
}

export { Cards }