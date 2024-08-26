import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { fontFamily } from '../../../utils/fontFamily';
import { fonts } from '../../../utils/fonts';

const DeliveryScreen = () => {
    return (
        <View style={styles.outerWrapper}>
            <View style={styles.outerContainer}>
                <View>
                    <Text style={styles.DeliveryText}>
                        Delivery
                    </Text>
                </View>
                <View style={styles.StandardContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.StandartText}>Standard</Text>
                        <View style={styles.DaysContainer}>
                            <Text style={styles.StandartText}>
                                5-7 days
                            </Text>
                        </View>
                        <View style={styles.currencyWrapper}>
                            <Text style={styles.currency}>$3.00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.StandardContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.StandartText}>Express</Text>
                        <View style={styles.DaysContainer}>
                            <Text style={styles.StandartText}>
                                1-2 days
                            </Text>
                        </View>
                        <View style={styles.currencyWrapper}>
                            <Text style={styles.currency}>$12.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        backgroundColor: colors.background
    },
    outerContainer: {
        marginHorizontal: RPW(5),
    },
    DeliveryText: {
        marginVertical: RPH(1),
        color: colors.Black,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font20,
    },
    StandardContainer: {
        justifyContent: "center",
        marginVertical: RPW(2),
        borderRadius: 10,
        width: "100%",
        height: RPH(7.5),
        borderColor: colors.Blue,
        borderWidth: 0.5,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: RPW(2),
    },
    StandartText: {
        color: colors.Black,
        fontFamily: fontFamily.ralewayMedium,
        fontSize: fonts.font14,
        
    },
    DaysContainer: {
        marginLeft:RPW(4),
        width: RPW(23),
        height: RPH(4),
        backgroundColor: colors.BlueZercon,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    currencyWrapper: {
       
        alignItems: "flex-end",
        flex:1
    },
    currency: {
        color: colors.Black,
        fontFamily: fontFamily.ralewayBold,
        fontSize: fonts.font18,
    },
});

export default DeliveryScreen;
