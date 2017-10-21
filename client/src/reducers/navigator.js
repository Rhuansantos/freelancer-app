import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Result');
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Profile');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
	let nextState;
	switch (action.type) {
	  case 'Home':
		nextState = AppNavigator.router.getStateForAction(
		  NavigationActions.back(),
		  state
		);
		break;
	  case 'Profile':
		nextState = AppNavigator.router.getStateForAction(
		  NavigationActions.navigate({ routeName: 'Profile' }),
		  state
		);
		break;
		case 'Result':
		nextState = AppNavigator.router.getStateForAction(
		  NavigationActions.navigate({ routeName: 'Result' }),
		  state
		);
		break;
	  default:
		nextState = AppNavigator.router.getStateForAction(action, state);
		break;
	}
  
	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
  }

  export default nav;