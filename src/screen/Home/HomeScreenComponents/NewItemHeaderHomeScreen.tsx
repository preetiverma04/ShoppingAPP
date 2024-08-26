import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';

const NewItemHeaderHomeScreen = ({StartingTitle,EndTitle}:any) => {
    return (
        <View>
            <View style={styles.NewItemContainer}>
                <Text style={styles.NewItemText}>{StartingTitle}</Text>
                <View style={styles.seeAllContainer}>
                    <Text style={styles.SeeAllText}>{EndTitle}</Text>
                    <View style={styles.iconContainer}>
                        <Image source={ImagesPath.EllipseIcon} style={styles.EllipseIcon} />
                        <Image source={ImagesPath.arrow} style={styles.arrowIcon} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    NewItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: RPW(3),
    },
    NewItemText: {
        color: colors.Black,
        fontSize: fonts.font20,
        fontFamily: fontFamily.ralewayBold,
     
    },
    seeAllContainer: {
        height: RPW(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    SeeAllText: {
        color: colors.Black,
        fontSize: fonts.font14,
        fontFamily: fontFamily.raleway,
        fontWeight: '700',
        marginRight: RPW(2),
    },
    iconContainer: {
        alignSelf: "center",
        width: RPW(8),
        height: RPH(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    EllipseIcon: {
        alignSelf:"center",
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignItems:"center"
    },
    arrowIcon: {
        position: 'absolute',
        width: RPW(4),
        height: RPH(4),
        resizeMode: 'contain',
        alignSelf:"center"
    },
});

export default NewItemHeaderHomeScreen;
