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

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <ReduxsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Counter' component={CounterScreen} />
          <Stack.Screen name='Veryfier' component={VeryfierScreen} />
          <Stack.Screen name='Styling' component={StylingScreen} />
          <Stack.Screen name='Flex' component={FlexScreen} />
          <Stack.Screen name='RealHome' component={RealHomeScreen} />
          <Stack.Screen name='PostDetail' component={PostDetailScreen} />
          <Stack.Screen name='Hooks' component={HookTesterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxsProvider>
  )
}

export default App;
