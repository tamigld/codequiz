import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerTitle = (props) => {
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
        fontSize: 20,
        fontWeight: '700'
    }
})

export default DrawerTitle