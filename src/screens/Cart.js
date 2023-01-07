import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import TopBar from '../components/TopBar'

const Cart = ({navigation}) => {
    return(
       <SafeAreaView style={styles.container}>
        <TopBar />
        <View style={styles.header}>
          <Text> My Cart</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header2}>
          <Text>Customer Details</Text>
        </View>

        <View style={styles.header2}>
          <Text>Order Summary</Text>
        </View>
       </SafeAreaView>
        
    )
}
export default Cart;

const styles = StyleSheet.create({
    container: {
      flex:1, 
      marginTop: 20,
    },
    header: {
      marginLeft:40,
      marginRight:40,
      marginTop:40,
      borderColor:'gray',
      width:300,
      height:150,
      borderWidth:1
    },
    header2: {
      marginLeft:40,
      marginRight:40,
      marginTop:20,
      borderColor:'gray',
      width:300,
      height:30,
      borderWidth:1
    },
    text: {
      color:'white'
    },
    btn: {
      backgroundColor:'darkblue',
      width:100,
      marginTop:100,
      marginLeft:150
    }
})