import React from 'react';
import {  StyleSheet, View } from 'react-native';
import COLORS from '../../consts/colors';
import SafeAreaView from 'react-native-safe-area-view';


const OnBoardScreen = () => {
    return (
       <SafeAreaView style={styles.mainContainer}>
           <View style={styles.container}>


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

    }
})



export default OnBoardScreen;