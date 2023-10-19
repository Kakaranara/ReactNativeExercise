/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ReduxsProvider } from './src/lib/providers';
// import HomeDemoScreen from './src/screens/auth_case/HomeDemoScreen';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';
import VeryfierScreen from '../screens/Verifyer';
import StylingScreen from '../screens/StylingScreen';
import FlexScreen from '../screens/FlexScreen';
import RealHomeScreen from '../screens/real_case/RealHomeScreen';
import PostDetailScreen from '../screens/real_case/PostDetailScreen';
import HookTesterScreen from '../screens/HooksTesterScreen';
import LoginScreen from '../screens/auth_case/LoginScreen';

const Stack = createNativeStackNavigator()
export default function AppNavigation() {

    const authState = useSelector((state) => state.auth)
    const isLogin = authState.isLogin

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLogin ? <>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Counter' component={CounterScreen} />
                    <Stack.Screen name='Veryfier' component={VeryfierScreen} />
                    <Stack.Screen name='Styling' component={StylingScreen} />
                    <Stack.Screen name='Flex' component={FlexScreen} />
                    <Stack.Screen name='RealHome' component={RealHomeScreen} />
                    <Stack.Screen name='PostDetail' component={PostDetailScreen} />
                    <Stack.Screen name='Hooks' component={HookTesterScreen} />
                </> : <>
                    <Stack.Screen name='Login' component={LoginScreen} />
                </>}
            </Stack.Navigator>
        </NavigationContainer>
    )
}