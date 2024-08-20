import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustumInputText from '../../components/CustumInputText';
import { ImagesPath } from '../../components/imagesPath/ImagesPath';
import { colors } from '../../utils/colors';
import { RPH, RPW } from '../../utils/ResponsiveScreenSize';
import { fonts } from '../../utils/fonts';
import { fontFamily } from '../../utils/fontFamily';
import ProductListName from './ProductListName';

const HomeScreenHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.Header}>
                    <Text style={styles.shoptext}>Shop</Text>
                    <View style={styles.inputContainer}>
                        <CustumInputText
                            placeholder="Clothing"
                            endicon={ImagesPath.Cameraicon}
                            placeholderTextColor={colors.RoyalBlue}
                            style={styles.CustumInputField}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.ProductListNameContainer}>
                <ProductListName />
                    </View>
                </View>
                <View style={styles.AllItemHederConatiner}>
                    <Text style={styles.AllIemsTextHeder}>All Items</Text>
                    <Image
                        source={ImagesPath.FilterIconhome}
                        style={styles.FilterIconhome}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: RPW(4), 
      
    },
    ProductListNameContainer:{
       
    },
    headerContainer: {
        // paddingVertical: RPH(1),
      
       
    },
    shoptext: {
        marginTop:RPW(1),
        color: colors.Black,
        fontSize: fonts.font34,
        fontFamily: fontFamily.raleway,
        fontWeight: "900",
        
    },
    Header: {
        flexDirection: "row",
       
    },
    inputContainer: {
        flex: 1,
        marginLeft: RPW(3), 
        height: RPH(10),
    },
    CustumInputField: {
       
        height: RPH(5),
        borderRadius: 100,
        color: colors.RoyalBlue,
    },
    AllItemHederConatiner: {
       
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RPH(2), 
      
    },
    AllIemsTextHeder: {
        
        color: colors.grey,
        fontSize: fonts.font18,
        fontFamily: fontFamily.raleway,
        fontWeight: "700",
    },
    FilterIconhome: {
        
        width: RPW(10),
        height: RPH(5),
        resizeMode: "contain",
    },
});

export default HomeScreenHeader;
