import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { Text, View } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5').then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results
          })
        })
  }

  render(){
    // this.props.navigation.navigate('* Chave da página*', state );
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
        <PeopleList peoples={ this.state.peoples } 
        onPressItem={() => {
          this.props.navigation.navigate('PeopleDetail');
        }}/>
      </View>
    );
  }
}