import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
import Checkout from './checkout.js';

export default class ShowListing extends Component {
	
	buyItem(){
		// We'd pass the id in of course
		this.props.navigator.push({
			title: "Checkout",
			component: Checkout,
			passProps: {style: {flex: 1}}
		});
	}
	
	render (){
		return (
			<View style={{justifyContent: 'center', alignItems: "center", flex: 1}}>
				<Image source={{uri: this.props.data.imageSrc}} style={{width: 300, height: 300}}/>
				<Text>{this.props.data.name}</Text>
				<Text>{this.props.data.priceString}</Text>
				<Button title="Purchase" color="#46A8B9" onPress={this.buyItem.bind(this)}/>
			</View>
		)
	}

}