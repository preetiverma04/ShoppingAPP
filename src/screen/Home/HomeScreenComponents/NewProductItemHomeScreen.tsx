import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import { fontFamily } from '../../../utils/fontFamily';
import { fonts } from '../../../utils/fonts';

interface NewProductItemProp {
    id: number,
    NewProductitemimage: any,
    Description: string,
    Currency: string,
    Price: string,
}
const NewProductItemHomeScreen = ({ item }: { item: NewProductItemProp }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.productItemContainer}>
                <Image source={item.NewProductitemimage} style={styles.productItemImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productDescription}>{item.Description}</Text>
            </View>
            <View style={styles.CurrencyContainer}>
                <Text style={styles.Currency}>{item.Currency}</Text>
                <Text style={styles.productPrice}>{item.Price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        marginRight:RPW(3),
        width: RPW(40), 
    },
    productItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RPW(3),
        backgroundColor: colors.background,
        shadowColor: colors.RoyalBlue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: '100%',
        height: RPH(18.5),
    },
    productItemImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: RPW(3),
    },
    textContainer: {
        width: '100%',
        // paddingHorizontal: RPW(2),
    },
    productDescription: {
        marginTop: RPW(2),
        fontSize: fonts.font12,
        color: colors.Black,
        textAlign: 'left',
        flexWrap: 'wrap', 
    },
    CurrencyContainer: {
        flexDirection: "row",
        marginTop: RPW(1),
        alignItems: 'center',
    },
    Currency: {
        color: colors.grey,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font20,
       
    },
    productPrice: {
        marginLeft: RPW(1),
        color: colors.grey,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font20,
       
    },
});

export default NewProductItemHomeScreen;
