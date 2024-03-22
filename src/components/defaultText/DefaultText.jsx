import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DefaultText = (props) => {
  return (
    <View>
      <Text 
        style={[{fontWeight: props.fontWeight}, styles.text]}>
            {props.content}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#02577a',
    }
})

export default DefaultText