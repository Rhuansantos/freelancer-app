import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import store from './store/index';
import AppWithNavigationState from './components/AppNavigator';

// Main class
class App extends Component {
  
  constructor(){
		super();
		this.store = store;
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
		<AnimatedLinearGradient customColors={this.presetColors.mainBackground} speed={2000}>
			<Provider store={this.store}>
				<AppWithNavigationState />
			</Provider>
		</AnimatedLinearGradient>
    );
  }
}

export default App;