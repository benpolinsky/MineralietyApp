/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import ListingGrid from './components/listingGrid';

export default class MineralietyApp extends Component {
  render() {
    return (
		<NavigatorIOS 
			initialRoute={{
				component: ListingGrid,
				title: 'Listings',
				passProps: {style: {flex: 1}}
			}}
			style={{flex: 1}}
		/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	paddingTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MineralietyApp', () => MineralietyApp);
