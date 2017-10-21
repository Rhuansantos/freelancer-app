import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import AppWithNavigationState from './components/AppNavigator';
import './ReactotronConfig';

// Main class
class App extends Component {
  constructor(){
		super();
		this.store = store;
	}

  render() {
    return (
			<Provider store={this.store}>
				<AppWithNavigationState />
			</Provider>
    );
  }
}

export default App;