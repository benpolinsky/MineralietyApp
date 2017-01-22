import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, PickerIOS, Button, Modal} from 'react-native';
import USStates from '../support/USStates.js';

const PickerItemIOS = PickerIOS.Item;


export default class Checkout extends Component {
	constructor(){
		super();
		this.state = {
			name: "",
			street: "",
			city: "",
			usState: "",
			country: "",
			cc_number: "",
			cc_cvc: "",
			cc_exp: "",
			modalOpen: false
		}
		
		this.closeModal.bind(this);
	}
	
	submitPurchase(){
		this.setState({modalOpen: true})
	}
	
	closeModal(){
		this.setState({modalOpen: false})
	}
	
	render(){
		return(
			<ScrollView contentContainerStyle={{paddingTop: 100, alignItems: 'stretch', justifyContent: 'flex-start'}}>
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
				<MnTextField label="Country:" onChangeText={(text) => this.setState({country: text})} value={this.state.country} />
				<MnTextField label="Credit Card Number:" onChangeText={(text) => this.setState({cc_number: text})} value={this.state.cc_number} />
				<MnTextField label="Credit Card Security Code:" onChangeText={(text) => this.setState({cc_cvc: text})} value={this.state.cc_cvc} />
				<MnTextField label="Credit Card Expiry:" onChangeText={(text) => this.setState({cc_exp: text})} value={this.state.cc_exp} />
				<Button title="Purchase" color="#46A8B9" onPress={this.submitPurchase.bind(this)}/>
					<Modal 
						animiationType='slide' 
						transparent={false} 
						visible={this.state.modalOpen} 
						>
						<Text>Payment Details</Text>
						<Text>Name: </Text>
						<Text>Street: </Text>
						<Text>City: </Text>
						<Text>State: </Text>
						<Text>Country: </Text>
						<Text>Credit Card Number: </Text>
						<Text>Credit Card CVC: </Text>
						<Text>Credit Card EXP: </Text>
						<Button title="close" onPress={this.closeModal.bind(this)} />
					</Modal>
			</ScrollView>
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