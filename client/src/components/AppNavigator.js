import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  Text, View, FlatList, Button, Image, Animated, Easing } from 'react-native';
import { addNavigationHelpers, DrawerNavigator, StackNavigator, Transitioner } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ResultScreen from './ResultScreen';
import Menu from './common/Menu';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 1000,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

export const AppNavigator = StackNavigator({
  Main: { screen: HomeScreen },
  Result: { screen: ResultScreen },
  Profile: { screen: ProfileScreen }

},{
  navigationOptions: {
    gesturesEnabled: true,
  },
});



const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />  
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);