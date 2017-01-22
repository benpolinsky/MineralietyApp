import React, {Component} from 'react';
import {ListView, ScrollView, StyleSheet, TouchableHighlight, View} from 'react-native';
import GridItem from './gridItem.js';
import ShowListing from './showListing.js';

export default class ListingGrid extends Component {
	
	constructor(){
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		
		this.state = {
			dataSource: ds.cloneWithRows([
				{name: 'Amythest Ring', 	id: 1, imageSrc: 'https://placehold.it/300x300', priceString: '$19.99' }, 
				{name: 'Diamond Necklace', 	id: 2, imageSrc: 'https://placehold.it/300x300', priceString: '$93.99' },
				{name: 'Amythest Ring', 	id: 3, imageSrc: 'https://placehold.it/300x300', priceString: '$94.99' }, 
				{name: 'Diamond Necklace', 	id: 4, imageSrc: 'https://placehold.it/300x300', priceString: '$9,943.29' },
				{name: 'Amythest Ring', 	id: 5, imageSrc: 'https://placehold.it/300x300', priceString: '$9,923.49' }, 
				{name: 'Diamond Necklace', 	id: 6, imageSrc: 'https://placehold.it/300x300', priceString: '$100.00' },
				{name: 'Amythest Ring', 	id: 7, imageSrc: 'https://placehold.it/300x300', priceString: '$99.39' }, 
				{name: 'Diamond Necklace', 	id: 8, imageSrc: 'https://placehold.it/300x300', priceString: '$9, 931.29' }
			])
		};
	}
	
	showListing(data){
		this.props.navigator.push({
			title: data.name,
			component: ShowListing,
			passProps: {data}
		});
	}
	
	render(){
		return <ListView 
					dataSource={this.state.dataSource}
					style={{flex: 1}}
					contentContainerStyle={{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}
					renderRow={(rowData) => <GridItem style={{flex: 1}} rowData={rowData} onPress={this.showListing.bind(this, rowData)} /> }
				/>
	}
}