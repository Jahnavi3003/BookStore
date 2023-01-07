import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text, StyleSheet, View, TouchableOpacity, TextInput, Image
} from 'react-native';
import TopBar from '../components/TopBar'
import logo from '../assets/Book1.png'
import logo1 from '../assets/Book2.jpeg'
import logo2 from '../assets/Book3.png'
import logo3 from '../assets/Book4.jpeg'

const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} />
      <Text style={styles.text}>Books</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.box}>
            <Image source={logo} style={styles.logo} />
            <View style={{ backgroundColor: 'white' }}>
              <Text style={styles.title}>Cinderella</Text>
              <Text style={styles.price}>Rs 1500</Text>
              <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
                <TouchableOpacity>
                  <Text style={styles.btn1}> ADD TO BAG</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.btn2}> WISHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={logo1} style={styles.logo} />
            <View style={{ backgroundColor: 'white' }}>
              <Text style={styles.title}>Panchatantra</Text>
              <Text style={styles.price}>Rs 500</Text>
              <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
                <TouchableOpacity>
                  <Text style={styles.btn1}> ADD TO BAG</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.btn2}> WISHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.box}>
          <Image source={logo2} style={styles.logo} />
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.title}>Rapunzel</Text>
            <Text style={styles.price}>Rs 1000</Text>
            <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
              <TouchableOpacity>
                <Text style={styles.btn1}> ADD TO BAG</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btn2}> WISHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Image source={logo3} style={styles.logo} />
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.title}>Arabian Nights</Text>
            <Text style={styles.price}>Rs 1000</Text>
            <View style={{ alignItems: 'center', alignContent: 'center', marginLeft: 20 }}>
              <TouchableOpacity>
                <Text style={styles.btn1}> ADD TO BAG</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btn2}> WISHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex:1, 
    marginTop: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 25,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 120,
    marginTop: 10,
    marginLeft: 30,
    borderColor:'black',
    borderWidth:1
  //  marginBottom: 20
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
    fontSize: 15, 
    marginTop: 20, 
    marginLeft: 10,
    fontWeight:'bold'
  },
  btn2: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    height: 25,
    marginRight: 20,
    padding: 4
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
  }

})
export default Home;
