/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import VeryfierScreen from './src/screens/Verifyer';
import { ReduxsProvider } from './src/lib/providers';
import StylingScreen from './src/screens/StylingScreen';
import FlexScreen from './src/screens/FlexScreen';
import RealHomeScreen from './src/screens/real_case/RealHomeScreen';
import PostDetailScreen from './src/screens/real_case/PostDetailScreen';
import HookTesterScreen from './src/screens/HooksTesterScreen';
// import HomeDemoScreen from './src/screens/auth_case/HomeDemoScreen';
import LoginScreen from './src/screens/auth_case/LoginScreen';
import { useSelector } from 'react-redux';
import AppNavigation from './src/navigations/AppNav';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  
  return (
    <ReduxsProvider>
      <AppNavigation />
    </ReduxsProvider>
  )
}

export default App;
