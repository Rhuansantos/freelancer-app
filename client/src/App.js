import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';


// Main class
class App extends Component {
  
  store = createStore(AppReducer); // creating store

  constructor(){
		super();
		this.presetColors = {
			mainBackground: [
				'rgb(54, 104, 151)',
				'rgb(54, 120, 159)',
				'rgb(55, 133, 166)',
				'rgb(56, 145, 173)',
				'rgb(57, 158, 180)',
				'rgb(59, 171, 187)',
				'rgb(60, 185, 184)'
			],
		};
	}

  render() {
    return (
		<AnimatedLinearGradient customColors={this.presetColors.mainBackground} speed={4000}>
			<Provider store={this.store}>
				<AppWithNavigationState />
			</Provider>
		</AnimatedLinearGradient>
    );
  }
}

export default App;