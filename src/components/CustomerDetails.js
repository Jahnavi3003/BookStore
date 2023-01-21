import React, {useState} from 'react'
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const CustomerDetails = ({navigation, setShown, shown}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [pin, setPin] = useState(0);
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    return(
        <SafeAreaView style={styles.box}>
            <View style={{flexDirection:'row'}}>
            <TextInput
              placeholder="Name"
              value={name} 
              placeholderTextColor="black"
              style={styles.input}/>
            <TextInput
              placeholder="Phone Number"
              value={phone}
              placeholderTextColor="black"
              style={styles.input} />
            </View>
            <View style={{flexDirection:'row'}}>
            <TextInput
              placeholder="Pincode"
              value={pin} 
              placeholderTextColor="black"
              style={styles.input}/>
            <TextInput
              placeholder="Locality"
              value={area}
              placeholderTextColor="black"
              style={styles.input} />
            </View>
            <TextInput
              placeholder="Address"
              value={address}
              placeholderTextColor="black"
              style={styles.input2} />
              <View style={{flexDirection:'row'}}>
            <TextInput
              placeholder="City"
              value={city} 
              placeholderTextColor="black"
              style={styles.input}/>
            <TextInput
              placeholder="State"
              value={state}
              placeholderTextColor="black"
              style={styles.input} />
            </View>
            <Text style={{marginTop:5}}> Type</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.arc}> </Text>
            <Text style={styles.type}> Home </Text>
            <Text style={styles.arc1}> </Text>
            <Text style={styles.type}> Work </Text>
            <Text style={styles.arc1}> </Text>
            <Text style={styles.type}> Other </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> setShown(!shown)}>
                <Text style={styles.text}>CONTINUE</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        marginLeft:40,
        marginRight:40,
        borderColor:'gray',
        width:300,
        height:180,
    },
    input: {
        width:120,
        borderColor:'gray',
        borderWidth:1,
        margin:5,
        height:20,
    },
    arc: {
      marginTop: 5,
      marginLeft: 5,
      width: 15,
      height: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray'
    },
    arc1: {
        marginTop: 5,
        marginLeft: 30,
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    type: {
        marginTop: 5
    },
    input2: {
        height: 40,
        width:250,
        borderColor:'gray',
        borderWidth:1,
        margin:5,
    },
    btn: {
        width:80,
        marginTop:10,
        marginLeft:160,
        backgroundColor:'darkblue'
    },
    text: {
        color:'white'
    }
})

export default CustomerDetails