import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
	<View style={style.container}>	
		<Text style={style.title}>{ props.title }</Text>
	</View>
);

/* StyleSheet */
const style = StyleSheet.create({
	container: {
		marginTop:25,
		backgroundColor: '#4287f5',

		/* Flex Box */
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: '#fff'
	}
})

export default Header;