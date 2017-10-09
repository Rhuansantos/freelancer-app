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
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center'
	},
	searchInput: {
		height: 35,
		fontSize: 30,
		color: 'white',
		borderBottomColor: '#E6E6EA',
		paddingBottom: 10,
		borderBottomWidth: 0.7 / PixelRatio.get()
	}
  };
  