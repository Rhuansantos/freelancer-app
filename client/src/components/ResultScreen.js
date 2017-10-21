import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, Button, Image, Dimensions } from 'react-native';
import { Cards, Header, presetColors } from './common/';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';



class ResultScreen extends Component{

	// define header of the page
	static navigationOptions = {
		drawerLabel: 'Results',
		drawerIcon: () => (
			<Image
			  source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
			  style={{width: 30, height: 30, borderRadius: 15}}
			/>
		  )
	}

	static propTypes = {
		navigation: PropTypes.object.isRequired
	}

	constructor() {
		super();
	}
	
	renderCards({item, index}){	
		return(
			<View>
				<Cards />
			</View>
		);
	}
	render() {
		//the Header components should recive the navigation props
		console.log(this.props.navigation);
		return (
				<View style={styles.container}>
				<AnimatedLinearGradient customColors={presetColors.mainBackground} speed={2000}>
					<Header test={this.props.navigation.navigate} /> 
					<Button
						onPress={() => this.props.navigation.navigate('Profile')}
						title="Learn More"
						color="#841584"
						accessibilityLabel="Learn more about this purple button"
					/>
					<FlatList
					data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]} // data goes here
					renderItem={this.renderCards} // function to render the data
					/>
					</AnimatedLinearGradient>
				</View>
		);
	}
}

const {height, width} = Dimensions.get('window');

const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  justifyContent: 'center',
	  alignItems: 'center'
	}
};


export default ResultScreen;