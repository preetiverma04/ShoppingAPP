import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../utils/fontFamily';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import { ImagesPath } from '../components/imagesPath/ImagesPath';
import CustumButton from '../components/CustumButton';
import CustumInputText from '../components/CustumInputText';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.welcomeWrapper}>
                <View style={styles.welcomeBackContainer}>
                    <Text style={styles.welcomeBackText}>
                        Create{"\n"}Account!
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
                <View style={styles.passwordContainer}>
                    <CustumInputText
                        placeholder="Confirm Password"
                        icon={ImagesPath.lockicon}
                        endicon={ImagesPath.eyeicon}
                        eyeSlashIcon={ImagesPath.eyeSlashicon}
                        isPassword={true}
                    />
                </View>
                <View style={styles.disclaimerContainer}>
                    <Text style={styles.disclaimerText}>
                        By clicking the <Text style={styles.disclaimerHighlight}>Register</Text> button, you agree to the public offer.
                    </Text>
                </View>
                <View>
                    <CustumButton title="Create Account" style={styles.button} />
                </View>
                <View>
                    <Text style={styles.continueWithText}>- OR Continue with -</Text>
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
                <View style={styles.accountContainer}>
                    <Text style={styles.createAccountText}>
                        I Already have An Account
                    </Text>
                    <Pressable onPress={() => navigation.navigate("SignInScreen")}>
                        <Text style={styles.signupText}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    welcomeWrapper: {
        flex: 1,
        marginHorizontal: RPW(5),
        marginVertical: RPH(2.5),
    },
    welcomeBackContainer: {},
    welcomeBackText: {
        color: colors.Black,
        fontSize: fonts.font40,
        fontWeight: "900",
        lineHeight: RPW(15),
    },
    inputContainer: {
        marginTop: RPW(5),
    },
    passwordContainer: {
        marginTop: RPH(2),
    },
    disclaimerContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: RPW(3),
        marginTop: RPH(2),
    },
    disclaimerText: {
        color: colors.grey2,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        fontWeight:"400"
    },
    disclaimerHighlight: {
        color: colors.darkorange,
        fontWeight: "400"
    },
    button: {
        marginTop: RPH(3),
        height: RPH(6.8),
        width: "90%",
        borderRadius: RPW(1),
    },
    continueWithText: {
        marginTop: RPH(10),
        fontWeight: "500",
        textAlign: "center",
        color: colors.CharcoalGray,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        marginHorizontal: RPH(3),
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
    accountContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: RPH(2),
    },
    createAccountText: {
        color: colors.CharcoalGray,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        textAlign: "center",
        marginHorizontal: RPH(1),
        lineHeight: fonts.font14,
        fontWeight: "600",
    },
    signupText: {
        color: colors.RoyalBlue,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        textAlign: "center",
        marginHorizontal: RPH(1),
        fontWeight: "600",
        textDecorationLine: "underline",
        lineHeight: fonts.font14,
    },
});

export default CreateAccountScreen;
