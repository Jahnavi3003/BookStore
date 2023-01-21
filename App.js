import React from 'react';
import {SafeAreaView} from 'react-native';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import {store} from './src/redux/Store'

const App = () =>  {

  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
    <AppStack />
    </SafeAreaView>
    </Provider>
   
  );
};

export default App;
