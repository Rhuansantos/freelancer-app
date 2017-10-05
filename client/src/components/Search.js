import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput, PixelRatio } from 'react-native';

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
		  <Text style={{padding: 10, fontSize: 42}}>
			{this.state.text.split(' ').map((word) => word && 'results here').join(' ')}
		  </Text>
		</View>
	  );
	}
  }

  const styles = {
	searchInput: {
		height: 50,
		fontSize: 22,
		color: '#336B9C',
		backgroundColor: '#E6E6EA',
		borderBottomColor: '#E6E6EA',
		padding: 10,
		borderRadius: 10
	}
  };
  