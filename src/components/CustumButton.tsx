import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RPH, RPW } from '../utils/ResponsiveScreenSize'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { fontFamily } from '../utils/fontFamily'
const CustumButton = ({ title, onPress, style, titleStyle }:any)=>{
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.CustumButtonStyle,style]}>
                <Text style={[styles.ButtonText, titleStyle]}>{title}</Text>
           </TouchableOpacity>
        </View>
    )

}
const styles=StyleSheet.create({
    CustumButtonStyle: {
        backgroundColor: '#007BFF', 
        borderRadius: RPW(3),
        alignSelf:"center",
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: RPH(3),
        height: RPH(6.8),
        width: "80%",
        
    },
    ButtonText: {
        color: '#FFF',
        fontSize: fonts.font16,
        textAlign: 'center', 
        textAlignVertical: 'center', 
        fontFamily: fontFamily.raleway,
    }

})
export default CustumButton;