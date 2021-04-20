import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export default function Welcome() {
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Gerencie { '\n' }
        suas plantas de { '\n' }
        forma fácil
      </Text>

      <Image
        source={ wateringImg }
        style={ styles.image }
        resizeMode="contain"
      />

      <Text style={ styles.subtitle }>
        Não esqueça mais de regar suas { '\n' }
        plantas. Nós cuidamos de lembrar você { '\n' }
        sempre que precisar.
      </Text>

      <TouchableOpacity
        activeOpacity={ 0.7 }
        style={ styles.button}
        onPress={ handleStart }
      >
        <Feather
          name="chevron-right"
          style={ styles.buttonIcon }
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20
  },

  title: {
    fontSize: 30,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56
  },

  buttonIcon: {
    color: colors.white,
    fontSize: 32
  }
})