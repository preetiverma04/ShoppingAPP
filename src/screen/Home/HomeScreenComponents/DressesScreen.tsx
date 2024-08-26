import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import { fontFamily } from '../../../utils/fontFamily';
import { fonts } from '../../../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AddToDetails } from '../../../Redux/Action';
interface ProductItemProp {
    id: number,
    Productitemimage: any,
    Description: string,
    Currency: string,
    Price: string,
}
const DressesScreen = ({item}:{item:ProductItemProp}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handlePress = () => {
        dispatch(AddToDetails(item));
        navigation.navigate('DetailScreen');
    };
   
    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={handlePress}>
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
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        marginHorizontal: RPW(3),
        marginBottom: RPW(5),
        backgroundColor: colors.background,
       
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
        padding: RPW(2),
        width: '100%',
        height: RPH(24.5),
        
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
    NewItemText: {
        color: colors.Black,
        fontSize: fonts.font26,
        fontFamily: fontFamily.ralewayBold,
    }
});
export default DressesScreen;