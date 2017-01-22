import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';


export default class GridItem extends Component {
	render(){
		return (
			<TouchableHighlight underlayColor={'white'} style={{width: 170, height: 180, marginTop: 20}} onPress={this.props.onPress}>
				<View style={{width: 160, height: 180, marginBottom: 20}}>
					<Image 
						style={{width: 150, height: 150, margin: 10}}
						source={{uri: 'https://placehold.it/150x150'}}
						/>
					<Text style={{textAlign: 'center'}}>{this.props.rowData.name}</Text>
				</View>
			</TouchableHighlight>
			)
	}
}