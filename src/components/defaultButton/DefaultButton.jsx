import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DefaultButton = (props) => {
  return (
    props.disabled ?

    <TouchableOpacity style={[styles.buttonDisabled, {backgroundColor: props.backgroundColor, borderColor: props.borderColor}]} onPress={props.onPress} disabled={props.disabled}>
      <Text style={styles.buttonDisabledText}>{props.actionText}</Text>
    </TouchableOpacity>

    :

    <TouchableOpacity style={[styles.button, {backgroundColor: props.backgroundColor, borderColor: props.borderColor}]} onPress={props.onPress} disabled={props.disabled}>
      <Text style={styles.buttonText}>{props.actionText}</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#02577A',
    borderWidth: 3,
    backgroundColor: '#02577A',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonDisabled: {
    opacity: 0.5,
    borderColor: '#02577A',
    borderWidth: 3,
    backgroundColor: '#02577A',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonDisabledText: {
    opacity: 0.5,
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})

export default DefaultButton