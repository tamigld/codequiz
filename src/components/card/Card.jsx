import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={props.onPress}>
      <Image source={props.imageUrl} />
      <View style={styles.descriptionView}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.goView}>
          <Text style={styles.descriptionText}>Go to quiz</Text>
          <FontAwesomeIcon icon={faArrowAltCircleRight} color='#02a9f7'/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  descriptionView: {
    flex: 1,
    gap: 5
  },
  descriptionText: {
    color: '#02a9f7',
    fontWeight: '900'
  },
  goView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    padding: 25,
    backgroundColor: '#edf2f4',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.10,
    shadowRadius: 9.22,
    elevation: 12
  },
  text: {
    color: 'white',
    backgroundColor: '#02a9f7',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5
  },
  description: {
    color: 'grey',
    fontWeight: '700'
  }
})