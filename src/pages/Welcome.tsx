import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors'
import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button'


export default function Welcome() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Gerencie { '\n' }
        suas plantas { '\n' }
        de forma fácil
      </Text>

      <Image source={ wateringImg } style={ styles.image } />

      <Text style={ styles.subtitle }>
        Não esqueça mais de regar suas { '\n' }
        plantas. Nós cuidamos de lembrar você { '\n' }
        sempre que precisar.
      </Text>

      <Button title={ '>' } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 30
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  image: {
    width: 292,
    height: 284
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
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

  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})