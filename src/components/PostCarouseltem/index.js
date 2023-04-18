import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Post = (props) => {
  const navigation = useNavigation();

  const post= props.post;
   const width = useWindowDimensions().width;
   const goToPostPage = () =>{
    navigation.navigate('Post',{postId: post.id})
     }
  return (
    <Pressable onPress={goToPostPage} style={[styles.container,{width:width - 60}]}>
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
    </Pressable>
  )
}

export default Post