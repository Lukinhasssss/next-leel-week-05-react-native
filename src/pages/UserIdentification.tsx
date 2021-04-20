import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { Button } from '../components/Button'

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <View style={ styles.container }>
      <KeyboardAvoidingView
        style={ styles.container }
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <View style={ styles.content }>
          <View style={ styles.form }>
            <View style={ styles.header }>
              <Text style={ styles.emoji }>
                {isFilled ? '😄' : '😃' }
              </Text>

              <Text style={ styles.title }>
                Como podemos { '\n' }
                chamar você?
              </Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Digite um nome"
              onBlur={ handleInputBlur } // Quando o usuário sai do input
              onFocus={ handleInputFocus }
              onChangeText={ handleInputChange }
            />

            <View style={ styles.footer }>
              <Button title={ 'Confirmar' } />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },

  header: {
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },

  emoji: {
    fontSize: 44
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },

  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})