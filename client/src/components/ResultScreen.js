import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import { Cards, Header } from './common/'


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
		return (
			<View style={styles.container}>
				<Header test={this.props.navigation} /> 
				<FlatList
				data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]} // data goes here
				renderItem={this.renderCards} // function to render the data
			  />
			</View>
		);
	}
}


const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  justifyContent: 'center',
	  alignItems: 'center'
	}
};


export default ResultScreen;