import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const DefaultInput = (props) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={{color: '#02577A'}}>{props.label}</Text>        
        <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor='rgba(1, 48, 63, 0.5)'
        inputMode={props.inputMode}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        />
    </View>
  )
}

export default DefaultInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#02577A',
        borderRadius: 5,
        paddingLeft: 15,
        color: 'black'
    },
    inputContainer: {
        gap: 10,
        width: '100%'
    }
})