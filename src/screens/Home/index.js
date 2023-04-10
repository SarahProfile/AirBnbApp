import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = () => {
  return (
    <View>
        {/* serch bard */}
        <Pressable
  style={styles.searchButton}
         onPress ={() => console.warn('Search Btn click')}
          >
            <Fontisto name="search" size={25} color={"#f15454"}/>
            <Text style={styles.searchButtonText}>Where are you going?</Text>
  </Pressable>
     <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image} >
        {/*title */}
        <Text style={styles.title}>
         Go Near
        </Text>
        {/* Button */}
     
  <Pressable
  style={styles.button}
         onPress ={() => console.warn('Explore Btn click')}
          >
            <Text style={styles.buttonText}>Explore nearby stays</Text>
  </Pressable>
         </ImageBackground>
    </View>
  )
}

export default HomeScreen