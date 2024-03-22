import { StyleSheet, SafeAreaView, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import DefaultTitle from "../../src/components/defaultTitle/DefaultTitle";
import Card from '../../src/components/card/Card';

const Dashboard = ({ navigation }) => {
  const [falseLoading, setFalseLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        setFalseLoading(true)
      }, 1000);
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

    return unsubscribe;

  }, [navigation])

  const imagesUrls = [
    {
      url: require('../../src/img/html5.png'),
      name: 'HTML5',
      page: 'StackHTML',
      stackCategory: 'HTML',
      description: 'HTML5 is the latest evolution of the standard web markup language used to structure and present content on the World Wide Web.',
      key: 1
    },
    {
      url: require('../../src/img/js.png'),
      name: 'JavaScript',
      page: 'StackHTML',
      stackCategory: 'JavaScript',
      description: 'JavaScript is a programming language that enables you to implement complex features on web pages.',
      key: 3
    },
    {
      url: require('../../src/img/python.png'),
      name: 'Python',
      page: 'StackHTML',
      stackCategory: 'Python',
      description: 'Python is an interpreted, high-level, general-purpose programming language known for its clean syntax and readability.',
      key: 4
    },
    {
      url: require('../../src/img/linux.png'),
      name: 'Linux',
      page: 'StackHTML',
      stackCategory: 'Linux',
      description: 'Linux is an open-source Unix-like operating system known for its stability, security, and flexibility.',
      key: 5
    },
    {
      url: require('../../src/img/php.png'),
      name: 'PHP',
      page: 'StackHTML',
      stackCategory: 'PHP',
      description: 'PHP is a general-purpose scripting language especially suited to web development that can be embedded into HTML.',
      key: 6
    },
    {
      url: require('../../src/img/wordpress.png'),
      name: 'Wordpress',
      page: 'StackHTML',
      stackCategory: 'Wordpress',
      description: 'WordPress is an open-source, freely available content management system that allows you to easily create websites, blogs, or applications.',
      key: 7
    },
    {
      url: require('../../src/img/mysql.png'),
      name: 'MySQL',
      page: 'StackHTML',
      stackCategory: 'MySQL',
      description: 'MySQL is an open-source relational database management system widely used for its reliability and ease of use.',
      key: 8
    }
  ];

  return (
    isLoading ?
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator />
      </SafeAreaView>

      :

      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          <DefaultTitle
            content='Categorias'
          />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.categorieView}>
            {
              imagesUrls.map((element, index) => {
                return (
                  <Card
                    onPress={
                      () => navigation.navigate(`StackHTML`, {
                        stackName: element.name,
                        imageUrl: element.url,
                        stackCategory: element.stackCategory,
                        loading: falseLoading
                      })
                    }
                    key={index}
                    imageUrl={element.url}
                    title={element.name}
                    description={element.description}
                  />
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf2f4',
    flex: 1
  },
  header: {
    position: 'absolute',
    top: 0
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    gap: 20
  },
  categorieView: {
    flexWrap: 'wrap',
    width: '100%',
    gap: 20
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})