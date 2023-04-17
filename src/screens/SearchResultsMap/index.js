import { View, Text,useRef, useWindowDimensions } from 'react-native'
//import React,{ useState } from 'react'
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps'
import PostCarouseltem from '../../components/PostCarouseltem'
import places from '../../../assets/data/feed'
import CustmMarker from '../../components/CustomMarker'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'


const SearchResultsMap = (props) => {
  const { posts } = props;
  const [selectedPlaceId, setSelectedPlaceId]= useState(null)
  //const map = useRef();
 // const googleMap= useState(PROVIDER_DEFAULT)
 const width = useWindowDimensions().width;
  return (
    <View style={{width: '100%', height: '100%'}}>
       <MapView
      // ref={map}
      // provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
       
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map(place => (
        <CustmMarker 
        coordinate={place.coordinate}
        price={place.newPrice}
        isSelected={place.id === selectedPlaceId}
        onPress={() => setSelectedPlaceId(place.id)}
        />)
      )}
     
        
      </MapView>
      <View style={{position:'absolute', bottom:10}}>
        <FlatList
        data={places}
        renderItem={({item}) => <PostCarouseltem post={item}
        shoHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        />
     
      }
      horizontal
        />
   
      </View>
     
      </View>
  )
}


export default SearchResultsMap