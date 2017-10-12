import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  Text, View, FlatList, Button, Image } from 'react-native';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ResultScreen from './ResultScreen';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 1000,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

export const AppNavigator = DrawerNavigator({
  Main: { screen: HomeScreen },
  Result: { screen: ResultScreen },
  Profile: { screen: ProfileScreen }

}, {
  // Default config for all screens
    drawerWidth: 300,
    drawerPosition: 'left',
    drawerBackgroundColor: 'black',
    useNativeAnimations: true
    
});

// contentComponent: props => <Text>fasfafa</Text>

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