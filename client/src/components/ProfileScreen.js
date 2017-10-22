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
import { Rating, presetColors } from './common/';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';


export default class ProfileScreen extends Component{
	constructor(props){
		super(props);
		console.log(this.props.navigation.state.params);
	}
	render() {
		return (
			<AnimatedLinearGradient customColors={presetColors.mainBackground} speed={2000}>
				<ScrollView>
					<View style={styles.container}>
						<Image style={styles.profileImage} source={{uri: this.props.navigation.state.params.profile_image}} />
						<Text style={styles.profileName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
						<View style={styles.profileInfo}>
							<Rating />
							<Text style={styles.profileLabels}>DESCRIPTION:</Text>
								<Text style={styles.profileDescription}>{this.props.navigation.state.params.description}</Text>
							<Text style={styles.profileLabels}>PRICE: <Text style={styles.profileDescription}>$18 per hour</Text></Text>	
						</View>
						<View style={styles.profileJobs}>
							<Text style={styles.profileLabels}>GALLERY</Text>
							
						</View>
					</View>
				</ScrollView>
			</AnimatedLinearGradient>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  alignItems: 'center',
	  backgroundColor: 'transparent'
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

