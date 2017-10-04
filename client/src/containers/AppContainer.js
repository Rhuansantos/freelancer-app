import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import {
  View,
  Text
} from 'react-native';

// Main
class AppContainer extends Component {

  render() {
   return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }

}

// dispatch event
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// map state
function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);