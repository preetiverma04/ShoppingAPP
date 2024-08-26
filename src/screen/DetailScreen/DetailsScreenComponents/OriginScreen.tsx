import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';

const OriginScreen = () => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.originOuterContainer}>
                <View>
                <Text style={styles.OriginText}>Origin </Text>
                </View>
                <View style={styles.RegionContainer}>
                    <Text style={styles.RegionText}>EU</Text>
                </View>
                <View style={styles.SizeOuterContainer}>
                <View style={styles.SizeGuideContainer}>
                    <Text style={styles.SizeGuideText}>
                        Size Guide
                    </Text>
                </View>
                <View style={styles.ArrowWrapper}>
                    <Image source={ImagesPath.arrow} style={styles.arrow}/>
                </View>
                </View>
            </View>
            
        </View>
    );
}
const styles=StyleSheet.create({
    outerWrapper:{
        flex:1,
        backgroundColor:colors.background
    },
    originOuterContainer:{
        marginHorizontal:RPW(5)
    },
    OriginText:{
        marginVertical: RPW(2),
        color:colors.Black,
        textAlign:"left",
        fontSize:fonts.font18,
        fontFamily:fontFamily.ralewayMedium,
        fontWeight:"700"
    },
    RegionContainer:{
        marginVertical:RPW(2),
        width:RPW(20),
        height:RPH(5),
        backgroundColor:colors.AliceBlue,
        borderRadius:RPW(2),
        alignItems:"center",
        justifyContent:"center"

    },
    RegionText:{
        color: colors.Black,
        textAlign: "left",
        fontSize: fonts.font14,
        fontFamily: fontFamily.ralewayMedium,
        fontWeight:"600"
    },
    SizeGuideContainer:{
        marginVertical: RPH(1),
    },
    SizeGuideText:{
       
        color: colors.Black,
        textAlign: "left",
        fontSize: fonts.font16,
        fontFamily: fontFamily.ralewayMedium,
        fontWeight: "700"
    },
    ArrowWrapper:{
        width:RPW(10),
        height:RPH(5),
        borderRadius:20,
        alignItems:"center",
        backgroundColor:colors.RoyalBlue
    },
    arrow:{
        width:RPW(5),
        height:RPH(5),
        resizeMode:"contain"
    },
    SizeOuterContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default OriginScreen;