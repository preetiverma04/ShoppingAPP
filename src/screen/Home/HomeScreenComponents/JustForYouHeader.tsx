import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
const JustForYouHeader = () => {
    return (
        <View>
            <View style={{flexDirection:"row"}} >
                <Text style={styles.HeaderText}>
                    Just For You
                </Text>
                <View>
                    <Image source={ImagesPath.Star} style={styles.star} />
                </View>
            </View>
            
        </View>
    );
}
const styles=StyleSheet.create({
    HeaderText:{
        marginLeft: RPW(3),
        color:colors.Black,
        fontSize:fonts.font20,
        fontFamily:fontFamily.ralewayBold,
      
    },
    star:{
        marginLeft:RPW(3),
        width:RPW(8),
        height:RPH(4),
        resizeMode:"contain",
        marginBottom:RPW(2)
        
    }

})

export default JustForYouHeader;