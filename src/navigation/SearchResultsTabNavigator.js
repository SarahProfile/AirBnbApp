
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsPage from '../screens/searchResults'

const tab= createMaterialTopTabNavigator()
const SearchResultsTabNavigator = () => {
  return (
    <tab.Navigator tabBarOptions={{
      activeTintColor:'#f15454',
      indicatorStyle: {
      backgroundColor: '#f15454',}
    }}>
      <tab.Screen name={"list"} component={SearchResultsPage}/>
      <tab.Screen name={"map"} component={SearchResultsPage}/>
    </tab.Navigator>
  )
}

export default SearchResultsTabNavigator