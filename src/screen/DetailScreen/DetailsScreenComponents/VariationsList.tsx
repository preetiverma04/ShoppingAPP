import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DetailScreenHeader from './DetailScreenHeader';
import VariationItem from './VariationItem';
import { VariationsData } from '../../../Data/VariationsData';
import { RPW } from '../../../utils/ResponsiveScreenSize';
import { colors } from '../../../utils/colors';
const VariationList = () => {
    const renderVariationItem = ({ item }:any) => {
        return <VariationItem item={item} />;
    };
    return (
        <View style={styles.outerWrapper}>
        <FlatList
            data={VariationsData}
            renderItem={renderVariationItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        </View>
    );
};
const styles = StyleSheet.create({
    outerWrapper:{
        flex:1,
        marginHorizontal: RPW(5),
        backgroundColor:colors.background     
    }
});
export default VariationList;
