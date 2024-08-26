import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

interface FlashitemProps {
    id: number,
    image: any,
    Discount: string
}

const FlashsaleItemHomeScreen = ({ item }: { item: FlashitemProps }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageContainerOuter}>
                <Image source={item.image} style={styles.itemsImage} />
                <LinearGradient
                    colors={[colors.lightPink, colors.darkPink]}
                    style={styles.discountContainer}>
                    <Text style={styles.discountText}>{item.Discount}</Text>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainerOuter: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RPW(2),
        backgroundColor: colors.background,
        shadowColor: colors.RoyalBlue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: '100%',
        height: RPH(14),
        position: 'relative',
    },
    itemsImage: {
        width: '92%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: RPW(3),
    },
    discountContainer: {
        position: 'absolute',
        top: RPW(1.2),
        right: RPW(0.8),
        alignSelf:"flex-end",
        paddingHorizontal: RPW(2),
        paddingVertical: RPH(0.5),
        borderTopLeftRadius: RPW(1),   
        borderBottomLeftRadius:RPW(2),
      
       borderTopRightRadius:RPW(1)
    },
    discountText: {
        color: colors.background,
        fontSize: RPW(3),
        fontWeight: 'bold',
    },
    outerContainer: {
        flex: 1,
        marginHorizontal: RPW(2),
        marginBottom: RPW(4),
        backgroundColor: colors.background,
    },
});

export default FlashsaleItemHomeScreen;
