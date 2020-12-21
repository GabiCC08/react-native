import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const BoxScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height: 160
    },
    viewOneStyle:{
        height: 80,
        width: 80,
        backgroundColor: 'red'
    },
    viewTwoStyle:{
        height: 80,
        width: 80,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle:{
        height: 80,
        width: 80,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;