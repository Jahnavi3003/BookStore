import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, Image,TextInput, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import TopBar from '../components/TopBar'
import CustomerDetails from '../components/CustomerDetails'
import BottomBar from "../components/BottomBar";
import { useDispatch , useSelector } from "react-redux";
import axios from 'axios';

const Cart = ({navigation}) => {
       const [isShown, setIsShown] = useState(true);
       const [shown, setShown] = useState(true);
       const [book, setBook] = useState([]);

   //    const book = useSelector((state)=>state.book) 
       const getData = async () => {
        const books = await axios.get('http://localhost:4003/book')
        .then(res => setBook(res?.data)); 
      }
      useEffect(() => {
        getData()
      }, []);
    return(
       <SafeAreaView style={styles.container}>
        <TopBar />
        <View style={styles.header}>
          <Text> My Cart</Text>
          <View>
          {/* <FlatList 
          data={book}
          key={item => item.id}
          renderItem={({ item, index }) => {
            return (

              <View style={{flexDirection: 'row'}}>
                <Image source={{ uri: item.imageUrl }} style={styles.logo} />
             
              <View style={styles.box}>
                  <Text style={styles.title}>{item.bookName}</Text>
                  <Text style={styles.author}>{item.author}</Text>
                  <Text style={styles.price}>Rs {item.price}</Text>
              </View>
              </View> ) }} /> */}
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.arc}>
          <TouchableOpacity>
          <Text> - </Text>
          </TouchableOpacity>
          </View>
          <View>
          <TextInput style={styles.input}
          placeholder=" "/>
          </View>
          <View style={styles.arc1}>
          <TouchableOpacity>
          <Text> + </Text>
          </TouchableOpacity>
          </View>
          <View style={{marginTop:107}}>
          <Text style={{fontSize:12}}> Remove </Text>
          </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>setIsShown(!isShown)}>
            <Text style={styles.text}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>

        {isShown ? 
         <View style={styles.header2}>
         <Text>Customer Details</Text>
         </View> : 
          <View style={styles.header1}>
          <Text>Customer Details</Text>
        <CustomerDetails navigation={navigation} setShown={setShown} shown={shown}/>
        </View>
         } 
        {shown ?
        <View style={styles.header2}>
          <Text>Order Summary</Text>
        </View> :
        <View style={styles.header3}>
          <Text>Order Summary</Text>
          <TouchableOpacity style={styles.btn2} onPress={()=> navigation.navigate('SuccessNote')}>
            <Text style={styles.text}>CHECKOUT ORDER</Text>
          </TouchableOpacity>
        </View>
        }

      <View style={{marginBottom : 15}}>
      <BottomBar />
      </View>
       </SafeAreaView>
        
    )
}
export default Cart;

const styles = StyleSheet.create({
    container: {
      flex:1, 
      marginTop: 10,
    },
    arc: {
      marginTop: 105,
      marginLeft: 100,
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray'
    },
    arc1 : {
        margin:5,
        marginTop: 105,
        marginLeft: 5,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    input: {
        width: 40,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:105,
        marginLeft: 5
    },
    header: {
      marginLeft:40,
      marginRight:40,
      marginTop:40,
      borderColor:'gray',
      width:300,
      height:200,
      borderWidth:1
    },
    header1: {
      marginLeft:40,
      marginRight:40,
      marginTop:20,
      borderColor:'gray',
      width:300,
      height:250,
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
    header3: {
      marginLeft:40,
      marginRight:40,
      marginTop:20,
      borderColor:'gray',
      width:300,
      height:100,
      borderWidth:1
    },
    text: {
      color:'white'
    },
    btn: {
      backgroundColor:'darkblue',
      width:100,
      marginTop:5,
      marginLeft:180
    },
    btn2: {
      backgroundColor:'darkblue',
      width:150,
      marginTop:50,
      marginLeft:130
    },
    logo: {
      width: 60,
      height: 80,
      marginTop: 10,
      marginLeft: 30,
      borderColor: 'black',
      borderWidth: 1
      //  marginBottom: 20
    },
    box: {
      margin: 15,
    },
    price: {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 10,
      fontWeight: 'bold'
    },
    author: {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 10,
    },
    title: {
      fontSize: 13,
      marginTop: 5,
      marginLeft: 10,
      fontWeight: 'bold'
    },
})