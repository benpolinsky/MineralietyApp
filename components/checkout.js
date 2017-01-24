import React, {Component} from 'react';
import {
    View, 
    ScrollView, 
    Text, 
    TextInput, 
    PickerIOS, 
    Button, 
    Modal,
    AlertIOS } from 'react-native';
import USStates from '../support/USStates.js';
import StripeAPI from '../support/stripeAPI.js';

const PickerItemIOS = PickerIOS.Item;


export default class Checkout extends Component {
	constructor(){
		super();
		this.state = {
      card: {
  			name: "",
  			street: "",
  			city: "",
  			usState: "",
  			country: "",
  			cc_number: "",
  			cc_cvc: "",
  			cc_exp_month: "",
        cc_exp_year: ""
      },
      token: {
        tokenId: ""
      },
			modalOpen: false
		}
		
		this.closeModal.bind(this);
	}
	
	submitPurchase(){
    var stripe = new StripeAPI;
    stripe.token(this.state.card).then((res) => {
      this.setState({modalOpen: true, token: res})        
    }).catch((err) => {
      return AlertIOS.alert("Card Error", err.message);
    });
    
	}
	
	closeModal(){
		this.setState({modalOpen: false})
	}
	
	render(){
		return(
			<ScrollView contentContainerStyle={{paddingTop: 15, alignItems: 'stretch', justifyContent: 'flex-start'}}>
				<MnTextField label="Name:" onChangeText={(text) => this.setState({card: {...this.state.card, name: text}})} value={this.state.card.name} />
				<MnTextField label="Street:" onChangeText={(text) => this.setState({card: {...this.state.card, street: text}})} value={this.state.card.street} />
				<MnTextField label="City:" onChangeText={(text) => this.setState({card: {...this.state.card, city: text}})} value={this.state.card.city} />
				<PickerIOS 
					selectedValue={this.state.card.usState}
					onValueChange={(usState) => this.setState({card: {...this.state.card, usState: usState}})}
				>
					{ USStates.map((usState) => {
						return <PickerItemIOS 
							key={usState}
							value={usState}
							label={usState}
							/>
					})}
				</PickerIOS>

				<MnTextField label="Country:" onChangeText={(text) => this.setState({card: {...this.state.card, country: text}})} value={this.state.card.country} />
				<MnTextField label="Credit Card Number:" onChangeText={(text) => this.setState({card: {...this.state.card, cc_number: text}})} value={this.state.card.cc_number} />
				<MnTextField label="Credit Card Security Code:" onChangeText={(text) => this.setState({card: {...this.state.card, cc_cvc: text}})} value={this.state.card.cc_cvc} />
				<MnTextField label="Credit Card Expiry Month:" onChangeText={(text) => this.setState({card: {...this.state.card, cc_exp_month: text}})} value={this.state.card.cc_exp_month} />
				<MnTextField label="Credit Card Expiry Year:" onChangeText={(text) => this.setState({card: {...this.state.card, cc_exp_year: text}})} value={this.state.card.cc_exp_year} />
				<Button title="Purchase" color="#46A8B9" onPress={this.submitPurchase.bind(this)}/>

					<Modal 
						animationType='slide'
						transparent={false} 
						visible={this.state.modalOpen} 
						>
            <View style={{paddingTop: 50}}>
						<Text>Payment Details</Text>
            <Text>{this.state.token.tokenId}</Text>
            </View>
						<Button title="close" onPress={this.closeModal.bind(this)} />
					</Modal>
			</ScrollView>
		)
	}
}

// Quick inline abstraction until I decide if I'm using a form/component lib
class MnTextField extends Component {
	render(){
		return (
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