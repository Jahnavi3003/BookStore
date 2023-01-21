import {SafeAreaView, Text, StyleSheet} from 'react-native'
import React from 'react'

const BottomBar = () => {
    return(
       <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Copyright 2023, BookStore Private Limited, All Rights Reserved.
        </Text>
       </SafeAreaView>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
       alignContent:'flex-end',
       alignItems:'flex-end',
       backgroundColor:'purple',
       marginTop:100,
       height:20
      
    },
    text: {
        color:'white',
        fontSize:13
    }
})