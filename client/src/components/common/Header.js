import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	Image, 
	Dimensions, 
	View,
	Button} 
from 'react-native';
import PropTypes from 'prop-types';



// const Header = ({ navigation }) => (
// 	{{console.log(this.test)}}
// 	<View style={styles.container}>
// 	  <Button
// 		onPress={() => navigation.dispatch({ type: 'Profile' })}
// 		title="Log in"
// 	  />
// 	</View>
//   );

class Header extends Component {
	constructor(){
		super();
		console.log(this);
	}
	render(){
		console.log(this.test);
		return(
			<View>

			</View>
		);
	}
}

const styles = {
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	labels: {
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 10
	},
}

export { Header };