import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
const SignInScreen = () => {
    return (
        <View style={styles.WelcomeWrapper}>
            <View style={styles.WelcomeBackContainer}>
                <Text style={styles.WelcomeBackText}>
                    Welcome{"\n"}Back!
                </Text>
            </View>

        </View>
    );
}
const styles=StyleSheet.create({
    WelcomeWrapper:{
        flex:1,
        marginHorizontal:RPW(5),
        marginVertical:RPH(2.5)

    },
    WelcomeBackContainer:{
        
    },
    WelcomeBackText:{
        color:colors.Black,
        fontSize:RPW(10),
        fontWeight:"900"
        // fontFamily:"Montserrat-BlackItalic"

    }

})

export default SignInScreen;
