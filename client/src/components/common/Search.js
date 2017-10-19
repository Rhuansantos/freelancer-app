import  React, { Component }  from 'react';
import {
  AppRegistry, StyleSheet, Text, View, AlertIOS, Dimensions, PixelRatio
} from 'react-native';
// import axios from 'axios';

import AutoComplete from 'react-native-autocomplete';
import Services from '../../data.json';


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
    // const temp = [];
    const Services = this.state.Search
        .filter(services => services.name.toLowerCase().startsWith(text.toLowerCase()))
        .map(services => services.name);

    let temp = Array.from(new Set(Services)); // eliminate data that has been repetead
    this.setState({ data: temp });
    
    // console.log(this.state.data);

  }
  
  onSelect(value) {
    AlertIOS.alert('You choosed', value);
  }

  render() {
    return (
      <View style={styles.container}>
      {console.log(this.state.data)}
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


const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  autocomplete: {
	  width: width / 1.1,
    height: 50,
    margin: 10,
    marginTop: 50,
    color: 'white',
    borderBottomColor: 'white',
		paddingBottom: 10,
		borderBottomWidth: 1 / PixelRatio.get()
  },
 container: {
    flex: 1,
  }
});

export { Search };