import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';
import CustumInputText from '../components/CustumInputText';
import { ImagesPath } from '../components/imagesPath/ImagesPath';
import  CustumButton from '../components/CustumButton';
import { fontFamily } from '../utils/fontFamily';
const ForgotPassword = () => {
    return (
        <View style={styles.Container}>
        <View style={styles.ForgotWrapper}>
          <View>
            <Text style={styles.ForgotHeaderText}>
                Forgot{"\n"}Password?
            </Text>
            </View>
            <View style={styles.InputTextContainer}>
                <CustumInputText 
                placeholder="Enter your Email Address"
                icon={ImagesPath.Emailicon}
                />
            </View>
            <View style={styles.DescriptionTextContainer}>
                <Text style={styles.DescriptionTextSymobol}>
                        * <Text style={styles.DescriptionText}> We will send you a message to set or reset your new password
                        </Text>
                </Text>
            </View>
            <View>
                <CustumButton style={styles.button} title="Submit"/>
            </View>
        </View>
        </View>
    );
}

export default ForgotPassword;
const styles=StyleSheet.create({
    Container:{
        flex: 1,
        
        backgroundColor: colors.background

    },
    ForgotWrapper:{
        flex:1,
        marginHorizontal: RPW(5),
        marginVertical: RPH(2.5),
        backgroundColor:colors.background
    },
      ForgotHeader:{

      },
      ForgotHeaderText:{
          color: colors.Black,
          fontSize: fonts.font40,
          fontWeight: "900",
          lineHeight: RPW(15),

      },
    InputTextContainer:{
        marginTop:RPW(5)
    },
    DescriptionTextContainer:{
        
       
        marginHorizontal: RPW(3),
        marginTop: RPH(2),
        maxWidth: '100%',

    },
    DescriptionText:{
        color: colors.grey2,
        fontSize: fonts.font12,
        fontFamily: fontFamily.MontserratRegular,
        fontWeight: "400"

    },
    DescriptionTextSymobol:{
        color:colors.darkorange,
        fontSize: fonts.font14, 
        fontWeight: "400",
        fontFamily: fontFamily.MontserratRegular,
    },
    button:{
        width:"90%",
        borderRadius:RPW(1)
    }
})