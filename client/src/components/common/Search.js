import  React, { Component }  from 'react';
import {
  AppRegistry, StyleSheet, Text, View, AlertIOS, Dimensions, PixelRatio
} from 'react-native';
import axios from 'axios';

import AutoComplete from 'react-native-autocomplete';
import Services from '../../data.json';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  autocomplete: {
	// alignSelf: 'stretch',
	  width: width / 1.1,
    height: 50,
    margin: 10,
    marginTop: 50,
    color: 'white',
    // backgroundColor: '#FFF',
    // borderColor: 'lightblue',
    // borderWidth: 1,
    borderBottomColor: 'white',
		paddingBottom: 10,
		borderBottomWidth: 1 / PixelRatio.get()
  },
 container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  }
});

class Search extends Component {

  state = { data: [] }

  constructor(props) {
    super(props);
    this.onTyping = this.onTyping.bind(this);
    this.state.Search = [];
  }

  	// api goes here
	componentDidMount() {
	// 	fetch('http://localhost:3000/service/findAll').then(res => res.json()).then((json) => {
    //   const { results: seacrhQueries } = json;
    //   	this.setState({ seacrhQueries });
	// 	});


		// let temp = [];

		// axios.get('http://localhost:3000/service/findAll')
		// .then((response) => {
		// 	response.data.forEach(function(element) {
		// 		temp.push(element.name);
		// 	});
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });

		// let values = ["Saab", "Volvo", "BMW"];
		this.setState({ Search: Services });

		// console.log(this.state.Search);
	}

  onTyping(text) {
    const Services = this.state.Search
        .filter(country => country.name.toLowerCase().startsWith(text.toLowerCase()))
        .map(country => country.name);

    this.setState({ data: Services });
  }

  onSelect(value) {
    // AlertIOS.alert('You choosed', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <AutoComplete
          style={styles.autocomplete}

          suggestions={this.state.data}
          onTyping={this.onTyping}
          onSelect={this.onSelect}

          placeholder="What are you looking for?"
          clearButtonMode="always"
          returnKeyType="go"
          textAlign="center"
          clearTextOnFocus

          autoCompleteTableTopOffset={10}
          autoCompleteTableLeftOffset={20}
          autoCompleteTableSizeOffset={-40}
          autoCompleteTableBorderColor="transparent"
          autoCompleteTableBackgroundColor="transparent"
          autoCompleteTableCornerRadius={8}
          autoCompleteTableBorderWidth={1}

          autoCompleteFontSize={15}
          autoCompleteRegularFontName="Helvetica Neue"
          autoCompleteBoldFontName="Helvetica Bold"
          autoCompleteTableCellTextColor={'white'}

          autoCompleteRowHeight={40}
          autoCompleteFetchRequestDelay={100}

          maximumNumberOfAutoCompleteRows={10}
        />
      </View>
    );
  }
}


export { Search };