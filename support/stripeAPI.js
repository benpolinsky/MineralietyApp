// Wrapper around tipsi-stripe's wrapper around stripe's api

import {STRIPE_PUBLISHABLE_KEY} from 'react-native-dotenv';
import stripe from 'tipsi-stripe';

export default class StripeAPI {

  constructor(){
    stripe.init({
      publishableKey: STRIPE_PUBLISHABLE_KEY
      // merchantId: 'MERCHANT_ID', // Optional Apple ID
    })
  }
  
  
  // prepare card parameters and return token for submission to server
  token(card){
    const formattedCard = {
      number: card.cc_number,
      expMonth: card.cc_exp_month,
      expYear: card.cc_exp_year,
      cvc: card.cc_cvc,
      name: card.name
    }
    
    return stripe.createTokenWithCard(formattedCard);
  }
    
  // returns promise that returns token once modal filled  
  addCard(){
    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'full',
    }

    return stripe.paymentRequestWithCardForm(options);
  }

}
