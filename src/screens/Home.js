import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text, StyleSheet, View, TouchableOpacity, TextInput, Image, FlatList
} from 'react-native';
import TopBar from '../components/TopBar'
import logo from '../assets/Book1.png'
import logo1 from '../assets/Book2.jpeg'
import logo2 from '../assets/Book3.png'
import logo3 from '../assets/Book4.jpeg'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';
const Home = ({ navigation }) => {

  const [info, setInfo] = useState([]);
  const [btn, setBtn] = useState(true);

  const getData = async () => {
    const books = await axios.get('http://localhost:4003/book')
    .then(res => setInfo(res?.data))
   
  }
  const dispatch = useDispatch();
  const addItem = (item) => {
      dispatch(addToCart(item));
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} />
      <Text style={styles.text}>Books</Text>
      <View>
        <FlatList
          data={info}
          key={item => item.id}
          numColumns={2}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item, index }) => {
            return (

              <View style={styles.box}>
                <Image source={{ uri: item.imageUrl }} style={styles.logo} />
                <View style={{ backgroundColor: 'white' }}>

                  <Text style={styles.title}>{item.bookName}</Text>
                  <Text style={styles.author}>{item.author}</Text>
                  <Text style={styles.price}>Rs {item.price}</Text>
                  {btn ?
                    <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
                      <TouchableOpacity onPress={
                        () => {setBtn(!btn) ; () =>addItem(item) ;}}>
                        <Text style={styles.btn1}> ADD TO BAG</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.btn2}> WISHLIST</Text>
                      </TouchableOpacity>
                    </View> :
                    <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
                      <TouchableOpacity onPress={() => navigation.navigate('AddBook')}>
                        <Text style={styles.btn3}> ADDED TO BAG</Text>
                      </TouchableOpacity>
                    </View>
                  }
                </View>
              </View>
            )
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.add} onPress={()=> navigation.navigate('AddBook')}>
        <Text style={{textAlign: 'center', color: 'white'}}>Add Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex:1, 
    marginTop: 5,
  },
  text: {
    marginTop: 5,
    fontSize: 25,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 120,
    marginTop: 10,
    marginLeft: 30,
    borderColor: 'black',
    borderWidth: 1
    //  marginBottom: 20
  },
  add: {
    width: 80,
    height: 20,
    backgroundColor: '#a52a2a',
    marginLeft: 150
  },
  btn1: {
    color: 'white',
    backgroundColor: '#a52a2a',
    borderColor: '#a52a2a',
    width: 100,
    height: 25,
    margin: 5,
    marginRight: 25,
    alignContent: 'center',
    padding: 5
  },
  title: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  btn2: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    height: 20,
    marginRight: 20,
    padding: 2
  },
  btn3: {
    color: 'white',
    backgroundColor: '#327ba8',
    borderWidth: 1,
    width: 120,
    height: 45,
    marginRight: 20,
    marginTop:5,
    padding:5,
    paddingTop: 8,
    fontSize:14
  },
  box: {
    margin: 18,
    borderWidth: 1,
    width: 160,
    height: 250,
    borderColor: 'grey',
    backgroundColor: 'white'
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
  }

})
export default Home;
