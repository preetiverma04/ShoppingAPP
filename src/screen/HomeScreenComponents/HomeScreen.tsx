import React from 'react';
import { View, StatusBar, FlatList, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import HomeScreenHeader from './HomeScreenHeader';
import ProductItemHomeScreen from './ProductItemHomeScreen';
import { ProductItemData } from '../../Data/ProductItemData'; // Make sure this path is correct
import { RPW } from '../../utils/ResponsiveScreenSize';

const HomeScreen = () => {
    const renderProductItem = ({ item }) => {
        return (
            <ProductItemHomeScreen item={item} />
        );
    };

    return (
        <View style={styles.OuterContainer}>
            <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
            <FlatList
                ListHeaderComponent={HomeScreenHeader}
                data={ProductItemData} 
                renderItem={renderProductItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    OuterContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatListContainer: {
        marginHorizontal: RPW(5),
       
       
    },
    
});

export default HomeScreen;
