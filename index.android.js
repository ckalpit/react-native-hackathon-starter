import React from 'react'
import { AppRegistry } from 'react-native'
import AppRootContainer from './src/AppRootContainer'
import Expo from 'expo'

const HackathonStarter = () => (
  <AppRootContainer />
)

// AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
Expo.registerRootComponent(HackathonStarter)
