import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Error = () => (
  <Text style={styles.error}>
    Oops! Something went wrong =(
  </Text>
)

const styles = StyleSheet.create({
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
})

export default Error