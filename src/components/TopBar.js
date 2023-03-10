import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Badge } from '@rneui/themed';

const TopBar = ({ navigation }) => {
  const [value, setValue] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon} name='book' size={18} />
        <Text style={styles.text}>Bookstore</Text>
        <TextInput
          style={styles.input}
          placeholder={'Search'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.text1}> Cart
            <Icon style={styles.icon1} name='cart' size={18} />
            <Badge value={value}
              textStyle={{ color: 'white' }}
            /> </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container: {
    //   flex:1, 
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    width: 150
  },
  text: {
    color: 'white',
    marginRight: 8,
    fontWeight: 'bold',
    paddingTop: 15
  },
  text1: {
    color: 'white',
    marginTop: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 15,
    marginLeft: 2,
    color: 'white',
  },
  badge: {
    marginTop: 15,
    marginRight: 20,
    backgroundColor: 'white',
  },
  icon1: {
    marginTop: 15,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#a52a2a',
    width: '100%',
    height: 50
  }
})

