import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      axios
        .get('https://randomuserERRO_POR_FAVOR.me/api/?nat=br&results=15').then(response => {
            const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false,
            })
          }).catch(error => {
            this.setState({
              loading: false, 
              error: true
            })
          });
    }, 1500)
  }

  renderLoading(){
    if (this.state.loading)
      return <ActivityIndicator size="large" color="#637fb8" />;
    return null
  }

  render(){
    // this.props.navigation.navigate('* Chave da página*', state );
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        {
          this.state.loading 
            ? <ActivityIndicator size="large" color="#637fb8" />
            : this.state.error 
              ? <Text style={styles.error}>Ops... Algo deu errado =(  </Text>          
              : <PeopleList 
                peoples={ this.state.peoples } 
                onPressItem={pageParams => {
                  this.props.navigation.navigate('PeopleDetail',pageParams);
                }}
                />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
})