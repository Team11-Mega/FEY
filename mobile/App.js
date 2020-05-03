import React from 'react';


import Routes from './src/routes'
console.disableYellowBox = true
export default function App() {
  return (
    <Routes />
  );
}

// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

// //import ScreenChat from './src/screens/ChatScreen'
// import LoginScreen from './src/screens/LoginScreen'


// const AppNavigator = createStackNavigator(
//   {
//     login: LoginScreen,
//   //  Chat: ScreenChat,
//   },
//   {
//     headerMode: "none"
//   }
// )

// export default createAppContainer(AppNavigator)