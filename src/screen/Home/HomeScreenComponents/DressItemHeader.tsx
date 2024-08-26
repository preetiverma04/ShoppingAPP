import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { ImagesPath } from '../../../components/imagesPath/ImagesPath';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { useNavigation, useRoute } from '@react-navigation/native';

const DressItemHeader = () => {
    
    const navigation=useNavigation();
    const route = useRoute();
    const { title } = route.params;
    return (
        <View style={styles.DressItemOuter}>
            <View style={styles.headerContainer}>
                <Pressable onPress={()=>navigation.goBack()}> 
                     <Image source={ImagesPath.leftArrow} style={styles.leftArrow} />
                     </Pressable> 
                <Text style={styles.titleText}>
                  {title}
                </Text>
                <Image source={ImagesPath.FilterIconhome} style={styles.filterIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    DressItemOuter: {
        marginHorizontal: RPW(6),
        paddingVertical: RPH(0.5),
        backgroundColor: colors.background,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftArrow: {
        width: RPW(8),
        height: RPH(6),
        resizeMode: "contain",
    },
    titleText: {
        color: colors.Black,
        fontSize: fonts.font20,
        fontFamily: fontFamily.ralewayBold,
        marginLeft: RPW(3), 
        flex: 1,      
        textAlign: "left",  
    },
    filterIcon: {
        width: RPW(8),
        height: RPH(6),
        resizeMode: "contain",
    },
});

export default DressItemHeader;
