import React from 'react';
import { View, StatusBar, FlatList, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import HomeScreenHeader from './HomeScreenComponents/HomeScreenHeader';
import ProductItemHomeScreen from './HomeScreenComponents/ProductItemHomeScreen';
import { ProductItemData } from '../../Data/ProductItemData';
import { RPW } from '../../utils/ResponsiveScreenSize';
import NewItemHeaderHomeScreen from './HomeScreenComponents/NewItemHeaderHomeScreen';
import NewProductItemHomeScreen from './HomeScreenComponents/NewProductItemHomeScreen';
import { NewItemData } from '../../Data/NewItemData';
import FlashsaleHeaderHomeScreen from './HomeScreenComponents/FlashsaleHeaderHomeScreen';
import FlashsaleItemHomeScreen from './HomeScreenComponents/FlashsaleItemHomeScreen';
import { FlashSaleItemData } from '../../Data/FlashSaleItemData';
import MostPopularItemHomeScreen from './HomeScreenComponents/MostPopularItemHomeScreen';
import { MostPopularData } from '../../Data/MostPopularItemData';
import { JustForYouData } from '../../Data/JustForYouData';
import JustForYouItemsHomeScreen from './HomeScreenComponents/JustForYouItemsHomeScreen';
import JustForYouHeader from './HomeScreenComponents/JustForYouHeader';

const HomeScreen = () => {
    const renderProductItem = ({ item }: any) => {
        return <ProductItemHomeScreen item={item} />;
    };

    const renderNewProductItem = ({ item }: any) => {
        return <NewProductItemHomeScreen item={item} />;
    };

    const renderFlashsaleItemHomeScreen = ({ item }: any) => {
        return <FlashsaleItemHomeScreen item={item} />;
    };
    const renderMostPopularItem=({item}:any)=>{
        return <MostPopularItemHomeScreen item={item}/>
    }
    const renderJustForYouItem = ({ item }: any) => {
        return <JustForYouItemsHomeScreen item={item} />
    }

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
                ListFooterComponent={
                    <View>
                        <NewItemHeaderHomeScreen StartingTitle="New Items" EndTitle="See All"/>
                        <FlatList
                            horizontal
                            data={NewItemData}
                            renderItem={renderNewProductItem}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={styles.newItemsContainer}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlashsaleHeaderHomeScreen />
                        <FlatList
                            data={FlashSaleItemData}
                            renderItem={renderFlashsaleItemHomeScreen}
                            keyExtractor={item => item.id.toString()}
                            numColumns={3}
                            contentContainerStyle={styles.flashSaleContainer}
                            showsVerticalScrollIndicator={false}
                        />
                       <NewItemHeaderHomeScreen StartingTitle="Most Popular" EndTitle="See All" />
                        <FlatList
                            horizontal
                            data={MostPopularData}
                            renderItem={renderMostPopularItem}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={styles.flashSaleContainer}
                            showsVerticalScrollIndicator={false}
                        /> 
                        <JustForYouHeader/>
                        <FlatList
                            data={JustForYouData}
                            numColumns={2}
                           
                            renderItem={renderJustForYouItem}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={styles.newItemsContainer}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                }
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
    newItemsContainer: {
        marginTop: RPW(4),
        paddingHorizontal: RPW(5),
        marginBottom: RPW(3),
    },
    flashSaleContainer: {
        marginHorizontal: RPW(3),
        paddingBottom: RPW(5),
    },
});

export default HomeScreen;
