import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import CustumButton from '../../../components/CustumButton';

const DetailFooter = () => {
    return (
        <View>
            <View style={styles.OuterContainerFooter}>
                <Image source={ImagesPath.FavouriteIcon} style={styles.FavouriteIcon} />
                <CustumButton title="Add to Cart" style={styles.button1} />
                <CustumButton title="Buy now" style={styles.button2} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    OuterContainerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: RPW(5),
    },
    FavouriteIcon: {
        width: RPW(9),
        height: RPH(9),
        resizeMode: 'contain',
        tintColor: colors.Black,
    },
    button1: {
        width: RPW(40),
        height: RPH(6.5),
        backgroundColor:"black",
        marginBottom:RPW(5)
    },
    button2: {
        width: RPW(40),
        height: RPH(6),
        marginBottom: RPW(5)
    },
});

export default DetailFooter;
