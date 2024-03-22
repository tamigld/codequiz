import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'

import Home from './pages/home/Home';
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard'

import { View, Alert, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import StackPage from './pages/stacks/StackPage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const App = () => {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user)
    })

    return unsubscribe;
  }, [])

  const signOut = () => {
    Alert.alert('Sign out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Sign out',
        onPress: () => {
          auth().signOut()
        }
      }
    ])
  }


  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        <View>
          <DrawerItem
            label='Welcome!'
          />
          <DrawerItem
            label={`${user.email}`}
            icon={() => <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: -25 }} />}
          />
        </View>
        <DrawerItem
          label='Log out'
          onPress={signOut}
        />
      </DrawerContentScrollView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#edf2f4'} />
      <NavigationContainer>
        {user ?
          <Drawer.Navigator
            initialRouteName='Dashboard'
            drawerStyle={{
              backgroundColor: '#edf2f4',
              paddingVertical: 20
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
          >
            <Stack.Screen
              name='Dashboard'
              component={Dashboard}
              options={() => (
                {
                  headerTitle: '',
                  headerStyle: {
                    backgroundColor: '#edf2f4',
                    borderBottomWidth: 1,
                    borderBottomColor: '#02a9f7'
                  },
                  headerRight: () => (
                    <Image style={{ width: 40, height: 40 }} source={require('./src/img/codequiz-logo.png')} />
                  )
                }
              )}
            />
            <Stack.Screen
              name='StackHTML'
              component={StackPage}
              options={{
                headerShown: false,
              }}
            />
          </Drawer.Navigator>

          :

          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Home'
          >
            <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Login'
              component={Login}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    marginHorizontal: 20,
    marginVertical: 40,
    gap: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  drawerItem: {
    backgroundColor: '#d4f0fc'
  }
})

export default App