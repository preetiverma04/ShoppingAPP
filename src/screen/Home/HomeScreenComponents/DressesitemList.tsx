import React from 'react'
import { StyleSheet, View } from 'react-native'
import DressesScreen from './DressesScreen'
import { FlatList } from 'react-native-gesture-handler'
import { ProductItemData } from '../../../Data/ProductItemData'
import { colors } from '../../../utils/colors'
import { RPW } from '../../../utils/ResponsiveScreenSize'
import DressItemHeader from './DressItemHeader'
const DressesitemList = () => {
    const renderItemDresses=({item}:any)=>{
        return<DressesScreen item={item}/>
    }
    return (
        <View style={styles.OuterContainer}>
            <DressItemHeader/>
            <FlatList
            data={ProductItemData}
            renderItem={renderItemDresses}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            />

           
        </View>
    );
}
const styles=StyleSheet.create({
    OuterContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatListContainer: {
        marginVertical:RPW(2.5),
        marginHorizontal: RPW(5),
       
    },


})

export default DressesitemList;