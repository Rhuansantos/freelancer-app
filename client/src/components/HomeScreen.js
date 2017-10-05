import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';

import Search from './Search';


class HomeScreen extends Component{
	
	render() {
		return (
			<View style={styles.container}>
				<Search />
				<FlatList
				data={[{key: 'a'}, {key: 'b'}]}
				renderItem={({item}) => <Text>{item.key}</Text>}
			  />
			</View>
		);
	}
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: null,
};

const styles = {
	container: {
	  flex: 1,
	  marginTop: 50,
	  justifyContent: 'center',
	  alignItems: 'center'
	}
};
  

export default HomeScreen;
