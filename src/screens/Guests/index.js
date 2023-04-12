import React, {useState} from 'react'
import {Pressable, Text, View } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function GuestsScreen() {
   const navigation = useNavigation()
    const [adults, setAdults] = useState(initialState=0)
    const [children, setChildren] = useState(initialState=0)
    const [infants, setInfants] = useState(initialState=0)
    
    return (
   
   <View style={{justifyContent:'space-between', height:'100%'}}>
      <View>
    {/*Row 1: Adults  */}
    <View style={styles.row}>
      {/* Titles */}
       <View>
        <Text style={{fontWeight:'bold'}}>
         Adults
        </Text>
        <Text style={{color:'#8d8d8d'}}>
         Age 13 or above
        </Text>
       </View>
      {/* Buttons with value */}
      <View style={{flexDirection:'row', alignItems:'center',}}>
         {/* - */}
         <Pressable onPress={() => setAdults( Math.max(0,value= adults-1))}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>-</Text>
        </Pressable>
         {/*Value */}
         <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
         {/* + */}
         <Pressable onPress={() => setAdults( value= adults+1)}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>+</Text>
        </Pressable>
         </View>
      </View>
      {/*************************************/}
    {/*Row 2: Children  */}
    <View style={styles.row}>
      {/* Titles */}
       <View>
        <Text style={{fontWeight:'bold'}}>
        Children
        </Text>
        <Text style={{color:'#8d8d8d'}}>
         Age 13 or above
        </Text>
       </View>
      {/* Buttons with value */}
      <View style={{flexDirection:'row', alignItems:'center',}}>
         {/* - */}
         <Pressable onPress={() => setChildren( Math.max(0,value= children-1))}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>-</Text>
        </Pressable>
         {/*Value */}
         <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
         {/* + */}
         <Pressable onPress={() => setChildren( value= children+1)}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>+</Text>
        </Pressable>
         </View>
      </View>
     {/*************************************/}
    {/*Row 3: Infants  */}
    <View style={styles.row}>
      {/* Titles */}
       <View>
        <Text style={{fontWeight:'bold'}}>
        Infants
        </Text>
        <Text style={{color:'#8d8d8d'}}>
         Age 13 or above
        </Text>
       </View>
      {/* Buttons with value */}
      <View style={{flexDirection:'row', alignItems:'center',}}>
         {/* - */}
         <Pressable onPress={() => setInfants( Math.max(0,value= infants-1))}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>-</Text>
        </Pressable>
         {/*Value */}
         <Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>
         {/* + */}
         <Pressable onPress={() => setInfants( value= infants+1)}
         style={styles.button}
         >
            <Text style={{fontSize:20,color:'#474747'}}>+</Text>
        </Pressable>
         </View>
      </View>
      </View>
      
         <Pressable onPress={()=> navigation.navigate('Search Result') }
         style={{
            marginBottom:20, 
            backgroundColor:'#f15454', 
            alignItems:'center',
            justifyContent:'center',
            height:50,
            marginHorizontal:20,
            borderRadius:10,
            }}>
           <Text style={{fontSize: 20, color:'white', fontWeight:'bold' }}>
            Search
           </Text>
         </Pressable>
     
   </View>
  )
}

export default GuestsScreen