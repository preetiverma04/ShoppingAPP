import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { RPH, RPW } from '../../utils/ResponsiveScreenSize';
import { colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fonts } from '../../utils/fonts';

interface ProductItemProp {
    id: number,
    Productitemimage: any,
    Description: string,
    Currency:string,
    Price: string,  
}

const ProductItemHomeScreen = ({ item }: { item: ProductItemProp }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.productItemContainer}>
                <Image source={item.Productitemimage} style={styles.productItemImage} />
            </View>
            <View>
            <Text style={styles.productDescription}>{item.Description}</Text>
            </View>
            <View style={styles.CurrencyContainer}>
            <View>
                <Text style={styles.Currency}>{item.Currency}</Text>
            </View>
            <View>
                    <Text style={styles.productPrice}>{item.Price}</Text>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        marginHorizontal: RPW(3), 
        marginBottom: RPW(4), 
        backgroundColor:colors.background
      
    },
    

    productItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RPW(3),
        backgroundColor: colors.background,
        shadowColor:colors.RoyalBlue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        padding: RPW(2),
        width: '100%',
        height: RPH(24.5)
    },
    productItemImage: {
        width: '100%', 
        height: RPH(22),
        resizeMode: 'cover', 
        borderRadius: RPW(3),
    },
    productDescription: {
        marginTop: RPW(2), 
        fontSize: RPH(2), 
        color: colors.Black,
        textAlign: 'left',
    },
    productPrice: {
        marginLeft: RPW(1),
        color: colors.grey,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font20,
        fontWeight: "700"
    },
    CurrencyContainer: {
        flexDirection: "row"
    },
    Currency: {
        color: colors.grey,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font22,
       
        fontWeight: "700"
    },
   
});

export default ProductItemHomeScreen;
