import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import CustumInputText from '../components/CustumInputText';
import { ImagesPath } from '../components/imagesPath/ImagesPath';
import { colors } from '../utils/colors';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import { fonts } from '../utils/fonts';
import { fontFamily } from '../utils/fontFamily';
import CustumButton from '../components/CustumButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const navigation=useNavigation()
    return (
       <View style={styles.Container}>
        <View style={styles.WelcomeWrapper}>
            <View style={styles.WelcomeBackContainer}>
                <Text style={styles.WelcomeBackText}>
                    Welcome{"\n"}Back!
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <CustumInputText
                    placeholder="Username or Email"
                    icon={ImagesPath.User}
                />
            </View>
            <View style={styles.passwordContainer}>
                <CustumInputText
                    placeholder="Password"
                    icon={ImagesPath.lockicon}
                    endicon={ImagesPath.eyeicon}
                    eyeSlashIcon={ImagesPath.eyeSlashicon}
                    isPassword={true}
                />
            </View>
            <View>
                <Pressable onPress={()=>navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotpasswordText}>
                        Forgot Password?
                    </Text>
                </Pressable>
            </View>
            <View >
                    <CustumButton title="Login" style={styles.button} onPress={() => navigation.navigate("BottomNavigation")}/>
            </View>

            <View>
                <Text style={styles.ContinueWithText}>- OR Continue with -</Text>
            </View>
            <View style={styles.socialIconsContainer}>
                <View style={styles.iconContainer}>
                    <Image source={ImagesPath.googleicon} style={styles.iconImage} />
                </View>
                <View style={styles.iconContainer}>
                    <Image source={ImagesPath.appleicon} style={styles.iconImage} />
                </View>
                <View style={styles.iconContainer}>
                    <Image source={ImagesPath.facebookicon} style={styles.iconImage} />
                </View>
            </View>
            <View>
            <View style={{flexDirection:"row",justifyContent:"center",marginTop:RPH(2)}}>
                <View>
                    <Text style={styles.createAcountText}>
                        Create An Account
                    </Text>
                </View>
                <View>
                        <Pressable onPress={() => navigation.navigate("CreateAccountScreen")}>
                            <Text style={styles.SignupText}>
                        Sign Up
                    </Text>
                        </Pressable>
                </View>
            </View>
            </View>
        </View>
        </View>
       
    );
};

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: colors.background

    },

    WelcomeWrapper: {
        flex: 1,
        marginHorizontal: RPW(5),
        marginVertical: RPH(2.5),
        backgroundColor:colors.background
    },
    WelcomeBackContainer: {},
    WelcomeBackText: {
        color: colors.Black,
        fontSize: fonts.font40,
        fontWeight: "900",
        lineHeight: RPW(15),
    },
    inputContainer: {
        marginTop: RPW(5),
    },
    passwordContainer: {
        marginTop: RPH(2)
    },
    forgotpasswordText: {
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        fontWeight: "400",
        color: colors.RoyalBlue,
        textAlign: "right",

    },
    button: {
        marginTop: RPH(3),
        height: RPH(6.8),
        width: "90%",
        borderRadius: RPW(1),
    },
    ContinueWithText: {
        marginTop: RPH(10),
        fontWeight: "500",
        textAlign: "center",
        color: colors.CharcoalGray,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal:RPH(3)
    },
    socialIconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: RPH(3),
    },
    iconContainer: {
        width: RPH(9),
        height: RPH(9),
        borderColor: colors.RoyalBlue,
        borderWidth: RPW(0.1),
        borderRadius: RPW(100),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: RPW(1.5),
    },
    iconImage: {
        width: "35%",
        height: "35%",
        resizeMode: "contain",
    },
    createAcountText: {
        marginTop: RPW(2),
        color: colors.CharcoalGray,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        textAlign: "center",
        marginHorizontal: RPH(1),
        lineHeight: fonts.font14,
        fontWeight:"600"
    },
    SignupText: {
    marginTop: RPW(2),
    color: colors.RoyalBlue,
    fontSize: fonts.font12,
    fontFamily: fontFamily.MontserratRegular,
    textAlign: "center",
    marginHorizontal: RPH(1),
    fontWeight: "600",
    textDecorationLine: "underline",
    lineHeight: fonts.font14,
    
        
    }
});

export default SignInScreen;
