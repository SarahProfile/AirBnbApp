import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const CustmMarker = (props) => {
    const {coordinate, price, onPress, isSelected} = props;
  return (
    <View>
     <Marker 
      coordinate={coordinate}
       onPress={onPress}
      >
        <View style={{backgroundColor:isSelected? 'black':'white', padding:5,borderRadius:20,borderColor:'grey', borderWidth:1}}>
          <Text style={{color: isSelected?'white': 'black',fontWeight:'bold'}}>
            ${price}
          </Text >
        </View>
        </Marker>
    </View>
  )
}

export default CustmMarker