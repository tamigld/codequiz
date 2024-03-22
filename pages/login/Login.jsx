import { StyleSheet, Image, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'

import DefaultInput from '../../src/components/defaultInput/DefaultInput'
import DefaultButton from '../../src/components/defaultButton/DefaultButton'
import DefaultText from '../../src/components/defaultText/DefaultText'
import DefaultLink from '../../src/components/defaultLink/DefaultLink'
import DefaultTitle from '../../src/components/defaultTitle/DefaultTitle'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useTogglePasswordVisibility } from '../../src/utils/hooks/useTogglePasswordVisibility '
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Login = ({ navigation }) => {

  const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlePreviousPage = () => {
    navigation.navigate('Home')
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  const signIn = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // setName(user.user.displayName)
        // console.log(name);
      })
      .catch((error) => console.log(error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBack}>
        <DefaultLink
          content={<FontAwesomeIcon icon={faHome} color='#02577a' />}
          onPress={handlePreviousPage}
        />
      </TouchableOpacity>
      <Image
        source={require('../../src/img/codequiz-logo.png')}
      />
      <DefaultTitle
        content='Sign In'
      />
      <SafeAreaView style={styles.viewContainer}>
        <DefaultInput
          placeholder='Type your e-mail'
          label='E-mail'
          inputMode='email'
          keyboardType='email-address'
          secureTextEntry={false}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <View style={styles.passwordInput}>
          <DefaultInput
            placeholder='Type your password'
            label='Password'
            inputMode='text'
            secureTextEntry={passwordVisibility}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={handlePasswordVisibility}>
            <FontAwesomeIcon style={styles.icon} icon={passwordVisibility ? faEye : faEyeSlash} size={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <DefaultButton
        actionText='Sign In'
        onPress={signIn}
        backgroundColor='#02577A'
        borderColor='#02577A'
      />
      <TouchableOpacity onPress={handleSignUp}>
        <DefaultText
          content='New around here? Create account.'
          fontWeight='700'
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 100,
    backgroundColor: '#edf2f4'
  },
  goBack: {
    position: 'absolute',
    left: 50,
    top: 50
  },
  viewContainer: {
    width: '100%',
    paddingHorizontal: 50,
    gap: 15,
    alignItems: 'center'
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: '55%'
  },
  icon: {
    color: '#02577a'
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login