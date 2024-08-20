import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticScreen from '../screen/AuthenticScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import SignInScreen from '../screen/SignInScreen';
import CreateAccountScreen from '../screen/CreateAccountScreen';
import ForgotPassword from '../screen/ForgotPassword';
import HomeScreen from '../screen/HomeScreenComponents/HomeScreen';
import BottomNavigation from './BottomNvaigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="WelcomeScreen"
                screenOptions={{
                    headerShown: false, 
                }}
            >
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen
                    name="AuthenticScreen"
                    component={AuthenticScreen}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CreateAccountScreen"
                    component={CreateAccountScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="BottomNavigation" component={BottomNavigation}
                    options={{ headerShown: false }}/>

               
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;
