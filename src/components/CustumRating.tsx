import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ImagesPath } from './imagesPath/ImagesPath';
import { RPH, RPW } from '../utils/ResponsiveScreenSize';

const CustumRating = () => {
    const [Rating, setRating] = useState(0);

    const handleStarPress = (index: number) => {

        if (Rating === index + 1) {
            setRating(0);
        } else {
            setRating(index + 1);
        }
    };

    return (
        <View>
            <View style={styles.RatingConatiner}>
                {[...Array(5)].map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                        <Image
                            source={index < Rating ? ImagesPath.RatingStar : ImagesPath.UnfillRatingStar}
                            style={styles.RatingStar}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    RatingStar: {
        marginHorizontal: RPW(2),
        width: RPW(5),
        height: RPH(5),
        resizeMode: 'contain',
    },
    RatingConatiner: {
        flexDirection: 'row',
       
    },
});

export default CustumRating;
