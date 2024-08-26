import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { RPW } from '../../../utils/ResponsiveScreenSize';
import { fontFamily } from '../../../utils/fontFamily';
import { fonts } from '../../../utils/fonts';
const RatingViewHeader = () => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.outerContainer}>
                <Text style={styles.RatingReviewText}>
                    Rating & Reviews 
                </Text>  
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    outerWrapper:{
        flex:1,
        backgroundColor:colors.background
    },
    outerContainer:{
      
    },
    RatingReviewText:{
        color:colors.Black,
        fontFamily:fontFamily.ralewayBold,
        fontSize:fonts.font24
    },
    

})

export default RatingViewHeader;