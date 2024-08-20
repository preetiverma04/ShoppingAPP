import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import { colors } from '../utils/colors';
const CustumInputText = ({ placeholder, icon, endicon, isPassword, eyeSlashIcon, style, placeholderTextColor }:any) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.CustumInputWrapper}>
            <View style={[styles.inputContainer, style]}>
                {icon && <Image source={icon} style={styles.icon} />}
                <TextInput
                    style={[
                        styles.CustumInput,
                        endicon && { paddingRight: RPW(8) },
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || colors.grey2}
                    keyboardType={isPassword ? 'numeric' : 'default'}
                    secureTextEntry={isPassword && !showPassword}
                />
                {endicon && !isPassword && (
                    <Image source={endicon} style={styles.endIcon} />
                )}
                {isPassword && (
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Image source={showPassword ? endicon : eyeSlashIcon} style={styles.endIcon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    CustumInputWrapper: {
        borderRadius: RPW(3),
        padding: RPW(2),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightGrey2,
        borderRadius: RPW(3),
        borderColor: "#A8A8A9",
        borderWidth: RPW(0.1),
        paddingHorizontal: RPW(2),
    },
    CustumInput: {
        flex: 1,
        height: RPH(7.5),
        color: colors.Black,
        paddingHorizontal: RPW(2),
    },
    icon: {
        width: RPW(6),
        height: RPW(6),
        resizeMode: 'contain',
        marginRight: RPW(2),
    },
    endIcon: {
        width: RPW(6),
        height: RPW(6),
        resizeMode: 'contain',
        right: RPW(2),
    },
});
export default CustumInputText;
