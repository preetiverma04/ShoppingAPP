import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home/HomeScreen';
import { ImagesPath } from '../components/imagesPath/ImagesPath';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import { colors } from '../utils/colors';
import CartScreen from '../screen/CartScreenComponents/CartScreen';
import FilterScreen from '../screen/Filtter/FilterScreen';
import FavouriteScreen from '../screen/FavouriteScreenComponent/FavouriteScreen';
import ProfileScreen from '../screen/ProfileScreenComponent/ProfileScreen';
import { fonts } from '../utils/fonts';
const BottomTabs = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    paddingVertical: RPH(1),
                    borderTopWidth: 0,
                    backgroundColor: colors.background,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: fonts.font12,
                },
            }}>
            <BottomTabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? colors.RoyalBlue : colors.Black;
                        return (
                            <Image
                                source={ImagesPath.HomeIcon}
                                style={[styles.icon, { tintColor: color }]}
                            />
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarLabel: 'Favourites',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? colors.RoyalBlue : colors.Black;
                        return (
                            <Image
                                source={ImagesPath.FavouriteIcon}
                                style={[styles.icon, { tintColor: color }]}
                            />
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Filter"
                component={FilterScreen}
                options={{
                    tabBarLabel: 'Filter',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? colors.RoyalBlue : colors.Black;
                        return (
                            <Image
                                source={ImagesPath.FilterIcon}
                                style={[styles.icon, { tintColor: color }]}
                            />
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? colors.RoyalBlue : colors.Black;
                        return (
                            <Image
                                source={ImagesPath.CartIcon}
                                style={[styles.icon, { tintColor: color }]}
                            />
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? colors.RoyalBlue : colors.Black;
                        return (
                            <Image
                                source={ImagesPath.ProfileIcon}
                                style={[styles.icon, { tintColor: color }]}
                            />
                        );
                    },
                }}
            />
        </BottomTabs.Navigator>
    );
};
const styles = StyleSheet.create({
    icon: {
        width: RPW(5),
        height: RPH(5),
        resizeMode: "contain"
    },
});
export default BottomNavigation;
