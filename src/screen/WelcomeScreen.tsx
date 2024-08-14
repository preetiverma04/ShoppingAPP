    import React from 'react';
    import { Image, StyleSheet, Text, View } from 'react-native';
    import { colors } from '../utils/colors';
    import { RPH, RPW } from '../utils/ResponsiveScreenSize';
    import { ImagesPath } from '../components/imagesPath/ImagesPath';
    import CustumButton from '../components/CustumButton';
    import { useNavigation } from '@react-navigation/native';
  
    const WelcomeScreen = () => {
        const navigation = useNavigation();
        return (
            <View style={styles.outer}>
                <View style={styles.inner}>
                    <View style={styles.lockImageContainerOuter}>
                        <View style={styles.lockImageContainer}>
                        <Image source={ImagesPath.lock} style={styles.lockImage} />
                        </View>
                    </View>
                    <View style={styles.ShoppeeTextContainer}>
                        <Text style={styles.SoppeeText}> Shoppe</Text>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <CustumButton title="Let's get started" // Example title
                            onPress={() => navigation.navigate('AuthenticScreen')}
                            style={styles.button} />
                    </View>
                    <View style={styles.outerAlreadyComtainer}>
                    <View>
                        <Text style={styles.AlreadyAccountText}>I already have an account</Text>
                    </View>
                    <View>
                    <View style={styles.CircleContainer }>
                        <Image source={ImagesPath.arrow} style={styles.arrowImage}/>

                    </View>
                        </View>
                    </View>

                </View>

            </View>
        );
    };

    const styles = StyleSheet.create({
        outer: {
            // marginHorizontal:RPW(5),
            height: "100%",
            backgroundColor: colors.background,
        },
        inner: {
            backgroundColor: colors.background,
            marginHorizontal: RPW(5)
        },
        lockImageContainer: {
            width: RPW(35.5),
            height: RPH(17),
            borderRadius: RPW(200),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#FFFFFF', 
            shadowColor: '#000000', 
            shadowOffset: { width: 0, height: RPW(1) }, 
            shadowOpacity: 0.16, 
            shadowRadius: 2, 
            elevation: 4, 
        },
        
        lockImage: {
            width: RPW(20),
            height: RPH(10),

        },
        lockImageContainerOuter: {
            alignSelf: "center",
            marginTop: RPW(70),

        },
        ShoppeeTextContainer: {

        },
        SoppeeText: {
            alignSelf: "center",
            color: colors.Black,
            fontSize: RPW(12),
            marginTop: RPW(3),
            // fontWeight:"800",
            fontFamily:"Raleway-Bold"
        },
        ButtonContainer: {
            marginTop: RPH(20)

        },
        button: {
            fontFamily:"NunitoSans_10pt_Expanded-Regular",
            width: RPW(90),
            height: RPH(7),
            backgroundColor: colors.Blue

        },
        AlreadyAccountText:{
            color:colors.grey,
            fontSize:RPW(4),
            alignSelf:"center",
            marginTop:RPH(2),
            marginLeft: RPH(7),
            justifyContent:"center"
        },
        CircleContainer:{
            backgroundColor:colors.Blue,
            borderRadius:RPW(100),
            width:RPW(10),
            height:RPH(5),
            marginLeft:RPH(4),
            justifyContent:"center",
            marginTop:RPH(1),
            alignItems:"center"
            

        },
        outerAlreadyComtainer:{
            marginVertical:RPH(1),
            flexDirection:"row",
            alignItems:"center",
    
        
        },
        arrowImage:{
            width:RPW(4),
            height:RPH(2),
            alignContent:"center"

        }

    });

    export default WelcomeScreen;
