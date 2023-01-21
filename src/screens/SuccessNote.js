import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import TopBar from '../components/TopBar'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomBar from "../components/BottomBar";

const SuccessNote = ({navigation}) => {
    return(
       <SafeAreaView style={styles.container}>
        <TopBar />
        <Icon name='thumbs-up-outline' style={styles.logo} size={150}/>
        <Text style={styles.text}>
            Order Placed Successfully!!!!
        </Text>
        <Text style={styles.text2}>
            Hurray! Your order is confirmed. 
            Please save the id for further communication.
        </Text>
        <View style={styles.box}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text3}>Email Us</Text>
                <Text style={styles.text3}>Contact Us</Text>
                <Text style={styles.text3}>Address</Text>
            </View>
        </View>
        <View style={styles.box2}>
            <Text style={styles.text4}>abc@gmail.com</Text>
            <Text style={styles.text4}>8788790997</Text>
            <Text style={styles.text4}>BookStore,MacBook</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.text1}>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
        <BottomBar />
        </SafeAreaView>
    )
}

export default SuccessNote;

const styles = StyleSheet.create({
    container: {
      flex:1, 
      marginTop: 20,
    },
    text: {
        fontWeight:'bold',
        fontSize:25,
        margin:20
    },
    text2: {
        fontSize:18,
        margin:20,
        marginLeft:40
    },
    text3: {
        marginHorizontal:20,
        fontSize:16
        },
    text4: {
        fontSize:14,
        borderColor:'gray',
        borderWidth:1,
        padding:4
    },
    logo: {
        color:'green',
        marginHorizontal:120,
        marginTop:20       
    },
    box: {
        marginLeft:20,
        marginRight:40,
        marginTop:40,
        borderColor:'gray',
        width:350,
        height:20,
        borderWidth:1,
    },
    box2: {
        flexDirection:'row',
        marginLeft:20,
        marginRight:40,
        borderColor:'gray',
        width:350,
        height:40,
        borderWidth:1,
    },
    btn: {
        width:180,
        marginTop:20,
        marginLeft:110,
        backgroundColor:'darkblue',
        padding:5
    },
    text1: {
        color:'white',
        textAlign:'center'
    }
})