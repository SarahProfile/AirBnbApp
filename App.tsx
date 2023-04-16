/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import Entype from 'react-native-vector-icons/Entypo';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
 
  StatusBar,
 
} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/searchResults';
import DestinationSearchScreen from './src/screens/destinationSearch';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const post1= feed[0];



function App(): JSX.Element {


  return (<>
    <StatusBar />
     <Router/>
    </>
  );
}


export default App;
