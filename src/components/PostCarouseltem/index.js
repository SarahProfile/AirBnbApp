import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import styles from './styles'

const Post = (props) => {
  const post= props.post;
   const width = useWindowDimensions().width;
  return (
    <View style={[styles.container,{width:width - 60}]}>
      <View style={styles.innerContainer}>
     {/* Image */}
     <Image 
     style={styles.image}
     source={{uri:post.image}}
     />
     <View style={{marginHorizontal: 5, flex:1}}>
     {/* Bed & Bedroom */}
     <Text style={styles.bedrooms}>
       {post.bed} Bed {post.bedroom} Bedroom
     </Text>
     {/* Type & Description */}
     <Text style={styles.describtion } numberOfLines={2}>
     {post.type}. {post.title}
     </Text>
     {/*old price & new price */}
     <Text style={styles.prices}>
       
        <Text style={styles.newPrice}>
        ${post.newPrice} </Text>
          / night
     </Text>
    
    </View>
    </View>
    </View>
  )
}

export default Post