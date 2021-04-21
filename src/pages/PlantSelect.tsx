import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Header } from '../components/Header'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { EnvironmentButton } from '../components/EnvironmentButton'
import api from '../services/api'

type EnvironmentProps = {
  key: string
  title: string
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>()

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnvironment()
  }, [])

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Header />

        <Text style={ styles.title }>
          Em qual ambiente
        </Text>
        <Text style={ styles.subtitle }>
          Você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList
          data={ environments }
          renderItem={({ item }) => (
            <EnvironmentButton
              title={ item.title }
              // active
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={ false }
          contentContainerStyle={ styles.environmentList }
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{ marginRight: 32 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  header: {
    paddingHorizontal: 30
  },

  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20,
  },

  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32
  }
})