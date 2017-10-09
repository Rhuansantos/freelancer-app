import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList} from 'react-native';


class ResultsScreen extends Component{
	
	render() {
		return (
			<View style={styles.container}>
				<Text>fasfas</Text>
				<FlatList
				data={[{key: 'a'}, {key: 'b'}]}
				renderItem={({item}) => <Text>{item.key}</Text>}
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
  

export default ResultsScreen;