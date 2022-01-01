import React from 'react';
import {  Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import PrimaryButton from '../Components/Button';



const OnBoardScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={{height: 400}}>
          <Image
            style={{
              width: '100%',
              resizeMode: 'contain',
              top: -150,
            }}
            source={require('../../assets/onboardImage.png')}
          />
        </View>
        <View style={styles.textContainer}>
            <View>

            <Text style={styles.textHeader}>
                Delicious Food
            </Text>
            <Text style={styles.textbelow}>
            We help you to find the best and most delicious food ever
            </Text>
            </View>
                <View style={styles.indicatorContainer}>
                <View style={styles.currentIndicator}/>
                <View style={styles.indicator}/>
                <View style={styles.indicator}/>           
          
            </View>
            <PrimaryButton onPress={()=>navigation.navigate("Home")}
            title="Get Started"/>
        </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:COLORS.white
    },
    container:{
        height:400,

    },
    textHeader:{
        textAlign:"center",
        fontSize:32,
        fontWeight:"bold"
    },
    textbelow:{
        marginTop:20,
        fontSize:16,
        textAlign:"center",
        color:COLORS.grey
    },
    textContainer:{
        paddingHorizontal:50,
        justifyContent:"space-between",
        paddingBottom:40
    },
    indicatorContainer:{
        height:50,
        flex:1,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:'center',
        paddingTop:30
    },
    currentIndicator:{
        height:12,
        width:30,
        borderRadius:10,
        backgroundColor:COLORS.primary,
        marginHorizontal:5
    },
    indicator:{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
    }
})



export default OnBoardScreen;