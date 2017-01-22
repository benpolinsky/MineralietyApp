import React, {Component} from 'react';
import {View, Text, TextInput, PickerIOS} from 'react-native';
import USStates from './USStates.js';

const PickerItemIOS = PickerIOS.Item;


export default class Checkout extends Component {
	constructor(){
		super();
		this.state = {
			name: "",
			street: "",
			city: "",
			usState: ""
		}
	}
	
	render(){
		return(
			<View style={{flex: 1, paddingTop: 100, alignItems: 'stretch', justifyContent: 'flex-start'}}>
				<MnTextField label="Name:" onChangeText={(text) => this.setState({name: text})} value={this.state.name} />
				<MnTextField label="Street:" onChangeText={(text) => this.setState({street: text})} value={this.state.street} />
				<MnTextField label="City:" onChangeText={(text) => this.setState({city: text})} value={this.state.city} />
				<PickerIOS 
					selectedValue={this.state.usState}
					onValueChange={(usState) => this.setState({usState: usState})}
				>
					{ USStates.map((usState) => {
						return <PickerItemIOS 
							key={usState}
							value={usState}
							label={usState}
							/>
					})}
					</PickerIOS>
			</View>
		)
	}
}

class MnTextField extends Component {
	render(){
		return(
			<View style={{marginBottom: 50}}>
			<Text>{this.props.label}</Text>
			<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
				<TextInput 
					style={{height: 40}}
					onChangeText={this.props.onChangeText}
					value={this.props.value}
					returnKeyType="next"
					/> 
			 </View>
		</View>
				)
	}
}