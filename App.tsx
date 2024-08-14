/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native'
import  WelcomeSCreen  from './src/screen/WelcomeScreen';
import  StackNavigation  from './src/Navigations/StackNavigation';
 const App =()=>{
  return(
    <StackNavigation />
  )
}
export default App;