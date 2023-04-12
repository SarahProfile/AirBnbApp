
 import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import searchResults from '../screens/searchResults';


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

  

   
       <Stack.Screen
        name={'Welcome'}
        component={Home}
        options={{
          headerShown: false,
        }}
      
      />
        <Stack.Screen
        name={'SearchResults'}
        component={searchResults}
        options={{
          title: 'Search your destination',
        }}
      /> 
    </Stack.Navigator>
  );
};

export default Router;