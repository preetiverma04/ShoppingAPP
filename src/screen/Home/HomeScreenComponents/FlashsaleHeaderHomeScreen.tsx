import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../utils/fonts';
import { fontFamily } from '../../../utils/fontFamily';
import { RPH, RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
import Clocksvg from '../../../Assets/Svgimage/clocksvg';
const FlashsaleHeaderHomeScreen = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 36,
        seconds: 58
    });
    useEffect(() => {
        const interval = setInterval(() => {
            updateTimer();
        }, 1000);
        return () => clearInterval(interval); 
    }, [timeLeft]);
    const updateTimer = () => {
        if (timeLeft.seconds > 0) {
            setTimeLeft(prevTime => ({
                ...prevTime,
                seconds: prevTime.seconds - 1,
            }));
        } else if (timeLeft.minutes > 0) {
            setTimeLeft(prevTime => ({
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59,
            }));
        } else if (timeLeft.hours > 0) {
            setTimeLeft(prevTime => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
            }));
        }
    };
    return (
        <View>
            <View style={styles.FlashContainer}>
                <View>
                    <Text style={styles.FlashsaleText}>Flash Sale</Text>
                </View>
                <View style={styles.clockouterContainer}>
                    <View>
                        <Clocksvg style={styles.ClockImage} />
                        {/* <Image source={ImagesPath.Clock} style={styles.ClockImage} /> */}
                    </View>
                    <View style={styles.TimerContainer}>
                        <Text style={styles.TimerText}>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</Text>
                    </View>
                    <View style={styles.TimerContainer}>
                        <Text style={styles.TimerText}>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</Text>
                    </View>
                    <View style={styles.TimerContainer}>
                        <Text style={styles.TimerText}>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    FlashContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: RPW(3),
        alignItems: "center",
        marginBottom: RPW(3)
    },
    ClockImage: {
        width: RPW(5),
        height: RPH(5),
        resizeMode: "contain",
        marginVertical:RPW(2),
    },
    FlashsaleText: {
        fontSize: fonts.font20,
        fontFamily: fontFamily.ralewayBold,
        color: colors.Black,
    },
    TimerContainer: {
        marginLeft: RPW(2),
        width: RPW(9),
        height: RPH(4),
        backgroundColor: colors.lightGrey2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(2), 
    },
    clockouterContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    TimerText: {
        fontSize: fonts.font12,
        fontFamily: fontFamily.ralewayBold,
        color: colors.Black,
        fontWeight: '600',
    }
});
export default FlashsaleHeaderHomeScreen;
