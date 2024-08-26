import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../utils/colors';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';

interface MostPopularItemProps {
    id: number,
    PopularProductitemimage: any,
    price: string,
    text: string,
    like: React.ReactNode 
}

const MostPopularItemHomeScreen = ({ item }: { item: MostPopularItemProps }) => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.productContainerouter}>
                <Image source={item.PopularProductitemimage} style={styles.productitemimage} />
                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                <View style={styles.priceLikeContainer}>
                    <Text style={styles.price}>{item.price}</Text>
                    {item.like && React.cloneElement(item.like, { style: styles.likeimage })}
                </View>
                <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productContainerouter: {
        borderRadius: RPW(3),
        backgroundColor: colors.background,
        shadowColor: colors.RoyalBlue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: '100%',
        padding: RPW(2),
        paddingBottom: RPW(3),
    },
    productitemimage: {
        width: "100%",
        height: RPH(18),
        resizeMode: "cover",
        borderRadius: RPW(2),
    },
    outerWrapper: {
        marginTop: RPW(5),
        marginRight: RPW(3),
        width: RPW(40),
    },
    priceLikeContainer: {
        flexDirection: 'row',
        alignItems: 'center',  

    },
    price: {
        color: colors.Black,
        fontSize: fonts.font22,
        fontFamily: fontFamily.ralewayBold,
        textAlign: "left",
    },
    likeimage: {
      
        width: RPW(5),  
        height: RPW(5),
        marginLeft: RPW(1),  
    },
    text:{
        color: colors.Black,
        fontSize: fonts.font22,
        fontFamily: fontFamily.ralewayMedium,
        fontWeight:"600"
       

    }
});

export default MostPopularItemHomeScreen;
