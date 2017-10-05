import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput, PixelRatio, Dimensions } from 'react-native';

export default class Search extends Component {
	constructor(props) {
	  super(props);
	  this.state = {text: ''};
	}
  
	render() {
	  return (
		<View style={styles.container}>
		  <TextInput
			style={styles.searchInput}
			placeholderTextColor="#336B9C"
			placeholder="What are you looking for?"
			onChangeText={(text) => this.setState({text})}
		  />
		  <View style={styles.searchResultsContainer}>
		  	<Text>
			{this.state.text.split(' ').map((word) => word && 'results here').join(' ')}
			</Text>
		  </View>
		</View>
	  );
	}
  }

  const {height, width} = Dimensions.get('window');

  const styles = {
	searchInput: {
		width: width / 1.1,
		height: 50,
		fontSize: 22,
		color: '#336B9C',
		backgroundColor: '#E6E6EA',
		borderBottomColor: '#E6E6EA',
		padding: 10,
		borderRadius: 10
	},
	searchResultsContainer: {
		backgroundColor: '#E6E6EA',
		width: width / 1.1,
		height: 50,
		// marginTop: -10,
		borderRadius: 10
	}
  };
  