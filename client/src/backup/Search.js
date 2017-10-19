import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-native-autocomplete-input'; // 3.3.1
import { Button, StyleSheet, Text, View, TextInput, PixelRatio, TouchableOpacity } from 'react-native';
import axios from 'axios';


const API = 'https://swapi.co/api';
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

class Search extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
			// seacrhQueries: ['a', 'b', 'c', 'd', 'f'],
			seacrhQueries: [],
			query: ''
		};
	}

	// api goes here
	componentDidMount() {
		// fetch('http://localhost:3000/service/findAll').then(res => res.json()).then((json) => {
    //   const { results: seacrhQueries } = json;
    //   this.setState({ seacrhQueries });
		// });


		let temp = [];

		axios.get('http://localhost:3000/service/findAll')
		.then((response) => {
			response.data.forEach(function(element) {
				temp.push(element.name);
			});
		})
		.catch(function (error) {
			console.log(error);
		});

		// let values = ["Saab", "Volvo", "BMW"];
		this.setState({ seacrhQueries: temp });

		

		// console.log(temp);
	
		// console.log(this.state.seacrhQueries);
	}

	findService(query){
		
		// this.setState({ 
		// 	seacrhQueries: ['a', 'b', 'c']
		// });

		if (query === '') {
      return [];
    }

		const { seacrhQueries } = this.state;
		console.log(seacrhQueries);
		// return seacrhQueries;

		
	}
  
	render() {
		const { query } = this.state;
		const find = this.findService(query);
		// const { seacrhQueries } = ['A', 'a', 'b', 'c', 'd'];

		// const { seacrhQueries } = this.state.seacrhQueries;

		// console.log(query);
		
	  return (
		<View style={styles.container}>
			<Autocomplete
			autoCapitalize="none"
			autoCorrect={false}
			containerStyle={styles.searchInput}
			data={this.state.seacrhQueries}
			defaultValue={query}
			placeholder="What are you looking for?"
			onChangeText={text => this.setState({ query: text })}
			renderItem={data => (
			<TouchableOpacity onPress={() => this.setState({ query: data })}>
				<Text style={styles.itemText}>
				{data}
				</Text>
			</TouchableOpacity>
			)}
			/>
		</View>
	  );
	}
  }

  const styles = {
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  // backgroundColor: 'black'
	},
	searchInput: {
		// flex: 1,
		width: 400,
		height: 200,		
		// backgroundColor: 'transparent'
		// height: 35,
		// // fontSize: 30,
		// color: 'white',
		// borderBottomColor: '#E6E6EA',
		// paddingBottom: 10,
		// borderBottomWidth: 0.7 / PixelRatio.get()
	},
	itemText: {
    fontSize: 15,
    margin: 2
  },

	};
	
	export { Search };
  