import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DefaultTitle = (props) => {
  return (
    <View>
      <Text 
        style={styles.text}>
            {props.content}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#02577a',
        fontSize: 26,
        fontWeight: '700'
    }
})

export default DefaultTitle