
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import DestinationSearchScreen from '../screens/destinationSearch'
import GuestshScreen from '../screens/Guests'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabNavigator from './HomeTabNavigator'
import SearchResultsPage from '../screens/searchResults'
import PostScreen from '../screens/PostScreen'
const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
             {/*Home Tab Navigator Route */}
             <Stack.Screen name={"Home"}
            component ={HomeTabNavigator}
            options={{ 
                headerShown: false
            }}
           
            />
           {/*Destination Search Route */}
            <Stack.Screen name={"Destination Search"}
            component ={DestinationSearchScreen}
            options={{ title: "Search your destination"}}
           
            />
            
            {/*Guests Route */}
           <Stack.Screen name={"Guests Search"}
            component ={GuestshScreen}
            options={{ title: "How many people"}}
           
        />
             {/*SearchResultsPage Route */}
             <Stack.Screen name={"Search Result"}
            component ={SearchResultsPage}
            options={{ title: "How many people"}}
           
        />
         {/*Post Route */}
         <Stack.Screen name={"Post"}
            component ={PostScreen}
            options={{ title: "Accommodation"}}
           
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router