import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, FlatList, Animated, Easing} from 'react-native';
import { Search, presetColors } from './common/';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';


export default class HomeScreen extends Component{
	constructor(props){
		super(props);
	}
	searchResults({results, index}){
		return(
			<View style={{width: 100, height: 100}}>
			</View>
		);
	}
	
	// 
	render() {
		return (
			<AnimatedLinearGradient customColors={presetColors.mainBackground} speed={2000}>
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
	title: 'Search',
	header: null
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