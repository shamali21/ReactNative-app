import React from 'react';
import {StyleSheet,Text, View } from 'react-native';

export default function Review(){
    return(
       <View style={StyleSheet.container}>
           <Text>Review Details</Text>
       </View>

    )
}

const styles= StyleSheet.create({
    container:{
        padding:24
    }
})