import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, Button, Image, Dimensions } from 'react-native';
import { Cards, Header, presetColors } from './common/';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';


class ResultScreen extends Component{
	constructor(props) {
		super(props);
		this.renderCards = this.renderCards.bind(this);
		console.log('results page');
		console.log(this);
	}

	renderCards({item, index}){	
		return(
			<View>
				<Cards screenProps={this.props.navigation} />
			</View>
		);
	}
	render() {
		return (
			<AnimatedLinearGradient customColors={presetColors.mainBackground} speed={2000}>
				<View style={styles.container}>
						<FlatList
						data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]} // data goes here
						renderItem={this.renderCards} // function to render the data
						/>
				</View>
			</AnimatedLinearGradient>
		);
	}
}


ResultScreen.navigationOptions = {
	title: 'Results',
	headerMode: 'none',
	mode: 'modal',
};
const {height, width} = Dimensions.get('window');

const styles = {
	container: {
	  flex: 1,
	  marginTop: 10,
	  justifyContent: 'center',
	  alignItems: 'center'
	}
};


export default ResultScreen;