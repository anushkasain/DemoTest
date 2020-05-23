/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import configureStore from './src/configStore';
import Home from './src/component/Home'
import Navigation from './Navigation';
import NavigationService from './NavigationService';

const store = configureStore();

const App= () =>  {
 

  return (
      <Provider store={store}>
      <SafeAreaView style={styles.safearea}>
       <Navigation ref={NavigationService.init}/>
      </SafeAreaView>
      </Provider>
  );
};

const styles = StyleSheet.create({
  safearea : {
    flex:1,
    backgroundColor:'rgb(224,225,227)'
  }
});

export default App;
