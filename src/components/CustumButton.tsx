import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RPH, RPW } from '../utils/ResponsiveScreenSize'
import { colors } from '../utils/colors'
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
       
        width: "80%", 
        
    },
    ButtonText: {
        color: '#FFF',
        fontSize: RPW(4),
        textAlign: 'center', 
        textAlignVertical: 'center', 
        fontFamily: "NunitoSans_10pt_SemiExpanded-Bold",
    }

})
export default CustumButton;