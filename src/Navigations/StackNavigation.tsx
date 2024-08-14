import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticScreen from '../screen/AuthenticScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import SignInScreen from '../screen/SignInScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="WelcomeScreen"
                screenOptions={{
                    headerShown: false,  // This will hide the header for all screens
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;
