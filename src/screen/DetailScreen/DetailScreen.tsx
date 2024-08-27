import React from 'react';
import { FlatList, StyleSheet, View, ScrollView } from "react-native";
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
import DetailFooter from './DetailsScreenComponents/DetailFooter';

const DetailScreen = () => {
    const renderMostPopularItem = ({ item }: any) => {
        return <MostPopularItemHomeScreen item={item} />;
    };

    const renderJustForYouItem = ({ item }: any) => {
        return <JustForYouItemsHomeScreen item={item} />;
    };

    const MostPopularList = () => (
        <View style={styles.flashSaleContainer}>
            <NewItemHeaderHomeScreen StartingTitle="Most Popular" EndTitle="See All" style={{ marginRight: RPW(1) }} />
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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <DetailScreenHeader />
                <VariationList />
                <OriginScreen />
                <DeliveryScreen />
                <RatingAndReviews />
                <MostPopularList />
                <YouMightLikeHeader />
                <View style={{ marginHorizontal: RPW(3) }}>
                    <FlatList
                        scrollEnabled={false}
                        data={JustForYouData}
                        renderItem={renderJustForYouItem}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        key={(2).toString()}
                    />
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <DetailFooter />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContainer: {
        paddingBottom: RPW(20),  
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.background,    
    },
    flashSaleContainer: {
        marginHorizontal: RPW(5),
        marginVertical: RPW(3),
    },
});

export default DetailScreen;
