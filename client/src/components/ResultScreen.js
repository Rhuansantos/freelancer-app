import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { Cards } from './common/'


export default class ResultScreen extends Component{
	

	renderCards({item, index}){
		return(
			<Cards>fasfasfas</Cards>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
				data={[{key: 'a'}, {key: 'b'}]} // data goes here
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
  
