import { View, Text, useWindowDimensions } from 'react-native'
import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps'
import PostCarouseltem from '../../components/PostCarouseltem'
import places from '../../../assets/data/feed'
import CustmMarker from '../../components/CustomMarker'
import { useEffect, useState,useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'


const SearchResultsMap = (props) => {
  //const { posts } = props;
  const [selectedPlaceId, setSelectedPlaceId]= useState( null);
   
  const map= useRef();
  const flatlist = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70})
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })
 // const googleMap= useState(PROVIDER_DEFAULT)
 const width = useWindowDimensions().width;
 useEffect (effect= () => {
  if(!selectedPlaceId || !flatlist)
  {
    return;
  }
  const index = places.findIndex(place => place.id === selectedPlaceId)
  flatlist.current.scrollToIndex({index})
  const selectedPlace = places[index];
  const region = {
    latitude: selectedPlace.coordinate.latitude,
    longitude : selectedPlace.coordinate.longitude,
    latitudeDelta: 0.8 ,
    longitudeDelta: 0.8 ,
  }
  map.current.animateToRegion(region);
 },deps= [selectedPlaceId])
  return (
    <View style={{width: '100%', height: '100%'}}>
       <MapView
        ref={map}
      //provider={PROVIDER_GOOGLE}
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
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouseltem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
   
      </View>
     
      </View>
  )
}


export default SearchResultsMap