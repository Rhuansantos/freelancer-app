import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ResultScreen from './ResultScreen';


const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
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
  headerMode: 'float',
  title: 'Main',
  initialRouteName: 'Main',
  transitionConfig: noTransitionConfig
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
