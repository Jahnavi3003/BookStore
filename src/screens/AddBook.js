import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

//let db = openDatabase({ name: 'UserDatabase.db' });
const AddBook = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput 
                placeholder='Enter Book Name'
                style={styles.input}/>
                <TextInput 
                placeholder='Enter Author Name'
                style={styles.input}/>
                <TextInput 
                placeholder='Enter Price'
                style={styles.input}/>
            </View>
            <View>
                <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Home')}>
                  <Text style={{textAlign:'center'}}> Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddBook

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        width:300,
        height: 40,
        margin: 20,
        borderColor:'black',
        borderWidth: 1,
        padding: 5,
        marginLeft: 45
    },
    submit : {
        width: 80,
        height: 20,
        backgroundColor: '#a52a2a',
        marginLeft: 150
    }
})