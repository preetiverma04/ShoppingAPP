import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ProductListData } from '../../../Data/ProductListData';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { GetToken } from '../../../utils/CommonFunction';
import { useNavigation } from '@react-navigation/native';
interface ProductListProp {
    id: number;
    ProductImage: any;
    title: String;
}
const ProductListName = () => {
    const navigation = useNavigation();
    GetToken()
    return (
        <View style={styles.outerWrapper}>
            {ProductListData?.map((product: ProductListProp) => {
                return (
                    <Pressable key={product.id}  onPress={()=>navigation.navigate("DressesitemList",{title:product.title})}>
                    <View style={styles.productContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={product.ProductImage}
                                style={styles.productImage}
                            />
                        </View>
                        <Text style={styles.productTitle}>
                            {product.title}
                        </Text>
                    </View>
                    </Pressable>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    outerWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        paddingHorizontal: RPW(1),
        
    },
    productContainer: {
        alignItems: 'center', 
        marginBottom: RPW(3), 
    },
    imageWrapper: {
        borderRadius: RPW(100), 
        shadowColor: colors.RoyalBlue,
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.28, 
        shadowRadius: 8, 
        elevation: 9, 
        backgroundColor: colors.background, 
    },
  productImage: {
        width: RPW(15), 
        height: RPW(15), 
        borderRadius: RPW(7.5),
        borderWidth: RPW(1), 
        borderColor: colors.background,
        resizeMode: "cover",
        
    },
    productTitle: {
        color: colors.Black,
        marginTop: RPW(1), 
        textAlign: 'center', 
        fontSize: fonts.font12,
        fontFamily:fontFamily.raleway,
        fontWeight:"700" 
    },
});

export default ProductListName;
