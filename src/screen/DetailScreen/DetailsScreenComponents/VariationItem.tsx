import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { SafeAreaView } from 'react-native-safe-area-context';
interface VarationItemProps {
    id: number,
    Productitemimage: any

}
const VariationItem = ({ item }: { item: VarationItemProps }) => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.ImageContainer}>
                <Image source={item.Productitemimage} style={styles.productImage} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    outerWrapper: {
        flex: 1,
        backgroundColor: colors.background,
    },
    productImage: {
        width: RPW(30),
        height: RPH(15),
        resizeMode: "cover",
        borderRadius: 10,
    },
    ImageContainer: {
        marginHorizontal: RPW(1),
     
    }
})

export default VariationItem;