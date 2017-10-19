import  React, { Component }  from 'react';
import {
  AppRegistry, StyleSheet, Text, View, AlertIOS, Dimensions, PixelRatio, Button
} from 'react-native';
// import axios from 'axios';

import AutoComplete from 'react-native-autocomplete';
import Services from '../../data.json';

const {height, width} = Dimensions.get('window');

class Search extends Component {
  constructor(props) {
    super(props);
    this.onTyping = this.onTyping.bind(this);
    this.state = {
      Search: [],
      data: []
    }
  }

	componentDidMount() {
    this.setState({ Search: Services }); // populate state
	}

  onTyping(text) {
    const Services = this.state.Search
        .filter(services => services.name.toLowerCase().startsWith(text.toLowerCase()))
        .map(services => services.name);

    let temp = Array.from(new Set(Services)); // eliminate data that has been repetead
    this.setState({ data: temp });
  }
  
  onSelect(value) {
    // AlertIOS.alert('You choosed', value);
    // console.log(this.props);
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

            autoCompleteFontSize={18}
            autoCompleteRegularFontName="Helvetica Neue"
            autoCompleteBoldFontName="Helvetica Bold"
            autoCompleteTableCellTextColor={'white'}

            autoCompleteRowHeight={40}
            autoCompleteFetchRequestDelay={100}

            maximumNumberOfAutoCompleteRows={10}
          />
          <View style={styles.searchLine}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autocomplete: {
	  width: width / 1.1,
    height: 50,
    margin: 10,
    marginTop: 100,
    color: 'white',
    paddingBottom: 10,
    fontSize: 28
  },
  searchLine: {
    width: width / 1.2,
    height: 1 / PixelRatio.get(),
    backgroundColor: 'white',
  },
 container: {
    flex: 1,
    alignItems:'center'
  }
});

export { Search };