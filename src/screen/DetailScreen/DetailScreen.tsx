import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import DetailScreenHeader from "./DetailsScreenComponents/DetailScreenHeader";
import VariationList from './DetailsScreenComponents/VariationsList';
import OriginScreen from './DetailsScreenComponents/OriginScreen';
import DeliveryScreen from './DetailsScreenComponents/DeliveryScreen';
import RatingAndReviews from './DetailsScreenComponents/RatingAndReviews';
import NewItemHeaderHomeScreen from '../Home/HomeScreenComponents/NewItemHeaderHomeScreen';
import MostPopularItemHomeScreen from '../Home/HomeScreenComponents/MostPopularItemHomeScreen';
import YouMightLikeHeader from './DetailsScreenComponents/YouMightLikeHeader';
import JustForYouItemsHomeScreen from '../Home/HomeScreenComponents/JustForYouItemsHomeScreen';
import { MostPopularData } from '../../Data/MostPopularItemData';
import { JustForYouData } from '../../Data/JustForYouData';
import { colors } from '../../utils/colors';
import { RPW } from '../../utils/ResponsiveScreenSize';
import { screensEnabled } from 'react-native-screens';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = () => {
    const renderMostPopularItem = ({ item }:any) => {
        return <MostPopularItemHomeScreen item={item} />;
    };

    const renderJustForYouItem = ({ item }:any) => {
        return <JustForYouItemsHomeScreen item={item} />;
    };

    const MostPopularList = () => (
        <View style={styles.flashSaleContainer}>
            <NewItemHeaderHomeScreen StartingTitle="Most Popular" EndTitle="See All" />
            <FlatList
              
                horizontal
                data={MostPopularData}
                renderItem={renderMostPopularItem}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                key="horizontal"
            />
        </View>
    );

    return (
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <FlatList
                scrollEnabled={false}
                data={JustForYouData}
                renderItem={renderJustForYouItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <DetailScreenHeader />
                        <VariationList />
                        <OriginScreen />
                        <DeliveryScreen />
                        <RatingAndReviews />
                        <MostPopularList />
                        <YouMightLikeHeader />
                    </>

                )}
                
                
                key={(2).toString()}
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatListContent: {
        // flex:1,
        paddingBottom: RPW(20),
        backgroundColor: colors.background,
        
        marginHorizontal:RPW(5)
    },
    flashSaleContainer: {
        height: "14%",
        marginHorizontal: RPW(5),
        marginVertical: RPW(3),

    },
    justForYouContainer: {
        marginHorizontal: RPW(5),
        backgroundColor:"red",
    },
});

export default DetailScreen;
