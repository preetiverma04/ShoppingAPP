import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import RatingViewHeader from './RatingViewHeader';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';
import CustumRating from '../../../components/CustumRating';
import { fontFamily } from '../../../utils/fontFamily';
import { fonts } from '../../../utils/fonts';
import CustumButton from '../../../components/CustumButton';
const RatingAndReviews = () => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.OuterContainer}>
                <RatingViewHeader />
                <View style={styles.RatingOuterContainer}>
                    <CustumRating />
                    <View style={styles.RatingValue}>
                        <Text style={styles.RatingText}>
                            4/5
                        </Text>
                    </View>
                </View>
                <View style={styles.UserOuterContainer}>
                    <View style={styles.ProfilePicContainer}>
                        <Image source={ImagesPath.ProfilePic} style={styles.ProfilePic} />
                    </View>
                    <View style={styles.UserDetailContainer}>
                        <View>
                            <Text style={styles.UserNameText}>Preeti Verma</Text>

                        </View>
                        <CustumRating />
                        <View style={styles.DescriptionContainer}>
                            <Text style={styles.DescriptionText}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...
                            </Text>
                        </View>
                    </View>
                </View>
                <CustumButton title="View All Reviews" style={styles.Button} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        backgroundColor: colors.background
    },
    OuterContainer: {
        marginHorizontal: RPW(5),
        marginBottom: RPW(5),
    },
    RatingStar: {
        width: RPW(5),
        height: RPH(5),
        resizeMode: "contain",
        marginHorizontal: RPW(2),
    },
    RatingValue: {
        width: RPW(17),
        height: RPW(9),
        backgroundColor: colors.LightTint,
        alignItems: "center",
        borderRadius: 7,
    },
    RatingText: {
        color: colors.Black,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font18
    },
    RatingOuterContainer: {
        flexDirection: "row",
        marginVertical: RPH(1)
    },
    ProfilePic: {
        width: RPW(23),
        height: RPH(11),
        borderRadius: 50,
        resizeMode: "cover"
    },
    ProfilePicContainer: {
        borderRadius: 40,
        width: RPW(26),
        height: RPH(12),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        shadowColor: colors.Black,
        shadowOffset: { width: 0, height: RPW(1) },
        shadowOpacity: 0.16,
        shadowRadius: 2,
        elevation: 4,
    },
    UserDetailContainer:{

    },
    UserNameText: {
        color: colors.Black,
        fontSize: fonts.font20,
        fontFamily: fontFamily.ralewayBold,
    },
    DescriptionContainer: {
        width: RPW(60),
        height: RPH(10),
    },
    DescriptionText: {
        color: colors.Black,
        fontSize: fonts.font14,
        fontFamily: fontFamily.ralewayMedium,
        textAlign: "justify"
    },
    Button: {
        width: "100%"
    },
    UserOuterContainer:{
        flexDirection: "row", 
        justifyContent: "space-between",
         alignItems: "center",
          marginTop: RPH(1)
    }
})
export default RatingAndReviews;