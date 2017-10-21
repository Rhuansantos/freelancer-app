import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, FlatList, Animated, Easing} from 'react-native';
import { Search } from './common/';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import { addNavigationHelpers, DrawerNavigator, StackNavigator, Transitioner } from 'react-navigation';

import ProfileScreen from './ProfileScreen';
import ResultScreen from './ResultScreen';
import Menu from './common/Menu';

export const AppNavigator = StackNavigator({
	Result: { screen: ResultScreen },
	Profile: { screen: ProfileScreen }
  });

export default class HomeScreen extends Component{

	constructor(props){
		super(props);
		this.presetColors = {
			mainBackground: [
				'rgb(54, 104, 151)',
				'rgb(54, 120, 159)',
				'rgb(55, 133, 166)',
				'rgb(56, 145, 173)',
				'rgb(57, 158, 180)',
				'rgb(59, 171, 187)',
				'rgb(60, 185, 184)'
			],
		};

	}
	
	searchResults({results, index}){
		return(
			<View style={{width: 100, height: 100}}>
			</View>
		);
	}
	render() {
		return (
			<AnimatedLinearGradient customColors={this.presetColors.mainBackground} speed={2000}>
			<View style={styles.container}>
					<Text style={styles.logo}>Freelancer</Text>
					<Text style={styles.slogan}>The easiest way to find your services</Text>
					<Search screenProps={this.props.navigation} />
					<FlatList
					data={[{key: 'a'}, {key: 'b'}]}
					renderItem={this.searchResults}
					/>
			</View>
			</AnimatedLinearGradient>
		);
	}
}


HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
HomeScreen.navigationOptions = {
	// title: 'Search',
	headerMode: 'none',
	mode: 'modal',
};



const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: 'transparent'
	},
	logo: {
		color: 'white',
		fontSize: 40,
	},
	slogan: {
		color: 'white',
		fontSize: 16
	}
};