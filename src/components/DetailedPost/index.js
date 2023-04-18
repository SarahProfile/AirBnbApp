import { View, Text, Image ,ScrollView} from 'react-native'
import React from 'react'
import styles from './styles'

const Post = (props) => {
   post= props.post;
  return (
    <ScrollView>
    <View style={styles.container}>
     {/* Image */}
     <Image 
     style={styles.image}
     source={{uri:post.image}}
     />
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
        <Text style={styles.oldPrice}>
          {post.oldPrice}$ 
        </Text>
        <Text style={styles.newPrice}>
           {post.newPrice}$
        </Text>
        / night
     </Text>
     {/* Total price */}
     <Text style={styles.totalPrice}>
    {post.totalPrice}$ total
     </Text>
     {/* Long Description */}
     <Text style={styles.longDescription}>
      {post.description}
     </Text>
    </View>
    </ScrollView>
  )
}

export default Post