import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

import Register from './pages/Register/index'
import Login from './pages/Login/index'
import ScreenChat from './pages/ScreenChat/index'



const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="Login" component={Login}/>
            </AppStack.Navigator>

        </NavigationContainer>
    )   
}