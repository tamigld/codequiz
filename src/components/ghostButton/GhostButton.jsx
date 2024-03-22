import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const GhostButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.actionText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#02577A',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#02577A',
    fontWeight: '700',
    fontSize: 16
  }
})

export default GhostButton