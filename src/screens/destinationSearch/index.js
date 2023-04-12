import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState(initialState = ' ');
    const navigation = useNavigation();
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
       <Pressable onPress={()=> navigation.navigate('Guests Search')}
       style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={"location-pin"} size={35} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
        </Pressable>
      }
     />
      
    </View>
  )
}

export default DestinationSearchScreen