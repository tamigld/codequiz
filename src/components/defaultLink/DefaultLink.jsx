import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import React from 'react'

const DefaultLink = (props) => {
  return (
    <View>
      <TouchableWithoutFeedback 
        onPress={props.onPress}
        >
          <Text
            style={[{fontWeight: props.fontWeight}, styles.text]}
          >
            {props.content}
          </Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#02577a'
    }
})

export default DefaultLink