import { View, Text,useRef } from 'react-native'
import React from 'react'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps'
import PostCarouseltem from '../../components/PostCarouseltem'

const SearchResultsMap = (props) => {
  const { posts } = props;
  //const map = useRef();
  return (
    <View style={{width: '100%', height: '100%'}}>
       <MapView
       // ref={map}
        style={{width: '100%', height: '100%'}}
       //provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
      <Marker 
      coordinate={{latitude: 28.3279822,
        longitude: -16.5124847,}}
     
      >
        <View>
          <Text>
            $300
          </Text>
        </View>
        </Marker>
        
      </MapView>
    
      </View>
  )
}


export default SearchResultsMap