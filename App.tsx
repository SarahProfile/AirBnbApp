/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Entype from 'react-native-vector-icons/Entypo';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
 
  StatusBar,
 
} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';





function App(): JSX.Element {


  return (<>
    <StatusBar />
    <SafeAreaView >
    {/* <HomeScreen/>*/}
    <Post/>
    </SafeAreaView>
    </>
  );
}


export default App;
