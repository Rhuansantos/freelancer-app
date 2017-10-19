import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Dimensions } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';

export default class Search extends Component {
	constructor(props) {
	  super(props);
	  this.state = {text: ''};
	}
  
	render() {
	  return (
			<View style={styles.searchSection}>
				<Hideo
				iconClass={FontAwesomeIcon}
				iconName={'search'}
				iconColor={'#336B9C'}
				placeholderTextColor="#336B9C"
				placeholder="What are you looking for?"
				// this is used as backgroundColor of icon container view.
				iconBackgroundColor={'#E6E6EA'}
				inputStyle={{ color: '#336B9C', backgroundColor: '#E6E6EA'}}
				/>
			</View>
	  );
	}
  }

  const {height, width} = Dimensions.get('window');

  const styles = {
	searchSection: {
		width: width / 1.1,
		// width: 300,
		height: 60,
		// paddingTop: 5,
		padding: 5,
		// flex: 1,
		// flexDirection: 'row',
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#E6E6EA',
		borderBottomColor: '#E6E6EA',
		borderRadius: 10
	},
	searchInput: {
		// height: 50,
		fontSize: 22,
		// padding: 10,
		color: '#336B9C',
	},
	searchIcon: {
		// padding: 10,
	},
	searchResultsContainer: {
		// flex: 1,
		// backgroundColor: '#E6E6EA',
		// borderRadius: 10
	}
  };
  