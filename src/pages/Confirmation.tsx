import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { Button } from '../components/Button'

export default function Confirmation() {
  const navigation = useNavigation()

  const handleMoveOn = () => {
    navigation.navigate('PlantSelect')
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.content }>
        <Text style={ styles.emoji }>
          😄
        </Text>

        <Text style={ styles.title }>
          Prontinho
        </Text>

        <Text style={ styles.subtitle }>
          Agora vamos começar a cuidar das suas { '\n' }
          plantinhas com muito cuidado.
        </Text>

        <View style={ styles.footer }>
          <Button
            title={ 'Começar' }
            onPress={ handleMoveOn }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },

  emoji: {
    fontSize: 78
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 30
  },

  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})