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
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';
 const App =()=>{
  return(
    <Provider store={Store}>
    <StackNavigation />
    </Provider>
  )
}
export default App;