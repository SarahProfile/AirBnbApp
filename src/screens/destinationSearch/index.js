import { View, Text, TextInput, FlatList } from 'react-native'
import React,{useState} from 'react'
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from "react-native-vector-icons/Entypo"

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState(initialState = ' ');
  return (
    <View style={styles.container}>
     {/* Input component */}
     <TextInput
      style={styles.textInput}
      placeholder='Where are you going?'
      value = {inputText}
      onChangeText={setInputText}
  />
     {/*List of destination */}
     <FlatList 
       data={search}
       renderItem={({item}) =>
       <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={"location-pin"} size={35} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
        </View>
      }
     />
      
    </View>
  )
}

export default DestinationSearchScreen