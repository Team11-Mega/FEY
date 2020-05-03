import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// import Login from './pages/Login/index'
// import ScreenChat from './pages/ScreenChat/index'
import ScreenChat from './screens/ChatScreen'
import Login from './screens/LoginScreen'


const AppStack = createStackNavigator()
// screenOptions={{ headerShown: false }} tira o header da aplicação

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                
                
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='ScreenChat' component={ScreenChat} />

            </AppStack.Navigator>
        </NavigationContainer>
    )
}