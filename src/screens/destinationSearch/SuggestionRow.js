import { View, Text,Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Entypo from "react-native-vector-icons/Entypo"

const SeggesionRow = (item) => {
  return (
    <View onPress={()=> navigation.navigate('Guests Search')}
    style={styles.row}>
     <View style={styles.iconContainer}>
       <Entypo name={"location-pin"} size={35} />
     </View>
<Text style={styles.locationText}>{item.description}</Text>
     </View>
  )
}

export default SeggesionRow