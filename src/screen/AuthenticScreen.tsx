import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ImagesPath } from '../components/imagesPath/ImagesPath';
import { colors } from '../utils/colors';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import CustumButton from '../components/CustumButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const AuthenticScreen = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.AuthenticScreenOuter}>
            <ImageBackground
                source={ImagesPath.AuthenticImage}
                style={styles.backgroundImage}

            >
                <View style={styles.AuthenticContainer}>
                    <Text style={styles.AuthenticText}> You want {"\n"}Authentic, here{"\n"} you go!</Text>
                </View>
                <View style={styles.AuthenticSubtitleContainer}>
                    <Text style={styles.AuthenticSubtitle}>
                        Find it here, buy it now!
                    </Text>
                </View>
                <CustumButton title="Continue" style={styles.button} titleStyle={styles.customTitleStyle} 
                    onPress={() => navigation.navigate("SignInScreen")}/>


            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    AuthenticScreenOuter: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',

    },
    AuthenticText: {
        color: colors.background,
        fontSize: RPW(10),
        // fontWeight: "700",
        textAlign: "center",
        fontFamily:"Montserrat-Bold",
        fontWeight:"700"
    },
    AuthenticContainer: {
        marginTop: "120%",
        // backgroundColor:"red",
        // alignContent:"center",
        alignItems: "center"
    },
    button: {
        marginTop: RPW(3),
        height: RPH(7),
        width: "90%",
        backgroundColor: colors.background,
    },
    customTitleStyle: {
        color: colors.darkGrey,
        fontSize: RPW(5),
        textAlign: 'center',
        textAlignVertical: 'center',
        // fontFamily:"Montserrat-Regular"
    },
    AuthenticSubtitleContainer: {
        marginVertical: RPH(3),
      
        
        alignItems: 'center',  
        alignSelf: 'center',
       
    },
    AuthenticSubtitle: {
        color: colors.lightGrey,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize:RPH(2),
        fontWeight:"800"

    }

});

export default AuthenticScreen;
