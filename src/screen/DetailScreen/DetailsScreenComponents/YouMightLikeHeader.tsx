import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { RPW } from '../../../utils/ResponsiveScreenSize';

const YouMightLikeHeader = () => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.OuterHeader}>
                <Text style={styles.YouMightLikeHeaderText}>
                    You Might Like
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,

        backgroundColor: colors.background, 
    },
    YouMightLikeHeaderText: {
        marginLeft:RPW(1),
        color: colors.Black,
        fontSize: fonts.font18,
        fontFamily: fontFamily.ralewayBold,
    },
    OuterHeader: {
        marginHorizontal: RPW(5),
        marginVertical:RPW(1)
        
    }
});

export default YouMightLikeHeader;
