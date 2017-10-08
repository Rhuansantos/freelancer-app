import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	PixelRatio, 
	Dimensions,
	ScrollView 
} from 'react-native';


class ProfileScreen extends Component{
	
	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Image style={styles.profileImage} source={require('../images/examples/12885852_1731167487105536_7785043722532779008_o.png')} />
					<Text style={styles.profileName}>{'Rhuan Santos'.toUpperCase()}</Text>
					<View style={styles.profileInfo}>
						<Text style={styles.profileLabels}>RATING:</Text>
							<Text></Text>
						<Text style={styles.profileLabels}>DESCRIPTION:</Text>
							<Text style={styles.profileDescription}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</Text>
						<Text style={styles.profileLabels}>PRICE: <Text style={styles.profileDescription}>18/p</Text></Text>	
					</View>
					<View style={styles.profileJobs}>
						<Text style={styles.profileLabels}>GALLERY</Text>
						
					</View>
				</View>
			</ScrollView>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  alignItems: 'center'
	},
	profileName: {
		color: 'white',
		fontSize: 26,
		paddingTop: 10
	},
	profileImage: {
		width: 200,
		height: 200,
		borderRadius: 100
	},
	profileInfo: {
		width: width / 1.1,
		marginTop: 50,		
		borderColor: 'white',
		borderTopWidth: 1 / PixelRatio.get(),
		borderBottomWidth: 1 / PixelRatio.get(),
		paddingTop: 5,
		paddingVertical: 15
	},
	profileLabels: {
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 10
	},
	profileDescription: {
		color: 'white',
		paddingTop: 10,
		fontWeight: 'normal'
	},
	profileJobs: {
		width: width / 1.1,
		height: 400,
		borderColor: 'white',
		borderTopWidth: 1 / PixelRatio.get(),
		paddingTop: 50,
	}
};

export default ProfileScreen;
