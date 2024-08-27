import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';
import { useSelector } from 'react-redux';
import VariationItem from '../../DetailScreen/DetailsScreenComponents/VariationItem';
import { VariationsData } from '../../../Data/VariationsData'; // Adjust import based on your structure

const DetailScreenHeader = () => {
    const item = useSelector((state) => state.detailReducer.selectedItem);

    return (
        <View style={styles.headerContainer}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <Image source={item.Productitemimage} style={styles.productImage} />
            <View style={styles.OuterContainer}>
                <View style={styles.PriceContainer}>
                    <Text style={styles.Currency}>{item.Currency}</Text>
                    <Text style={styles.Price}>{item.Price}</Text>
                    <View style={styles.shareContainer}>
                        <Image source={ImagesPath.Share} style={styles.share} />
                    </View>
                </View>
                <Text style={styles.descriptionText}>{item.Description}</Text>
                <View style={styles.VariationContainer}>
                    <Text style={styles.VariationText}>Variations</Text>
                    <View style={styles.ColorSizeContainer}>
                        <View style={styles.ColorContainer}>
                            <Text style={styles.colorText}>Pink</Text>
                        </View>
                        <View style={styles.SizeContainer}>
                            <Text style={styles.SizeText}>M</Text>
                        </View>
                    </View>
                    <View style={styles.EllipseWrapper}>
                        <View style={styles.EllipseContainer}>
                            <Image source={ImagesPath.arrow} style={styles.arrow} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headerContainer: {
        backgroundColor: colors.background, 
    },
    productImage: {
        width: '100%',
        height: RPW(100), 
        resizeMode: 'cover',
    },
    OuterContainer: {
        marginHorizontal: RPW(5),
    },
    descriptionText: {
        color: colors.Black,
        fontSize: fonts.font14,
        textAlign: "justify",
        borderRadius: 4,
    },
    Price: {
        fontSize: fonts.font26,
        fontFamily: fontFamily.ralewayBold,
        color: colors.Black,
        flex: 1,
        textAlign: 'left',
    },
    Currency: {
        fontSize: fonts.font26,
        fontFamily: fontFamily.ralewayBold,
        color: colors.Black,
        marginRight: RPW(2),
    },
    shareContainer: {
        justifyContent: 'flex-end',
        backgroundColor: colors.DimPink,
        padding: RPH(0.8),
        borderRadius: RPW(20),
        marginVertical: RPH(2),
    },
    share: {
        width: RPW(7),
        height: RPH(3),
        resizeMode: "contain",
    },
    PriceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    VariationContainer: {
        flexDirection: "row",
        marginTop: RPW(2),
       
    },
    VariationText: {
        color: colors.Black,
        fontSize: fonts.font24,
        fontFamily: fontFamily.ralewayBold,
    },
    ColorSizeContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginBottom: RPW(5),
    },
    ColorContainer: {
        marginLeft: RPW(3),
        width: RPW(18),
        height: RPH(5),
        backgroundColor: colors.whitesmoke,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(2),
    },
    SizeContainer: {
        marginLeft: RPW(3),
        width: RPW(18),
        height: RPH(5),
        backgroundColor: colors.whitesmoke,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(2),
    },
    flatListContainer: {
        paddingHorizontal: RPW(0),
        paddingBottom: RPH(2),
    },
    colorText: {
        color: colors.Black,
        fontSize: fonts.font14,
        fontFamily: fontFamily.ralewayMedium,
    },
    SizeText: {
        color: colors.Black,
        fontSize: fonts.font14,
        fontFamily: fontFamily.ralewayMedium,
    },
    arrow: {
        width: RPW(5),
        height: RPH(5),
        resizeMode: "contain"
    },
    EllipseWrapper: {
        alignItems: "flex-end",
    },
    EllipseContainer: {
        width: RPW(10),
        height: RPH(5),
        backgroundColor: colors.RoyalBlue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});

export default DetailScreenHeader;
