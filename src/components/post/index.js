import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Post = () => {
  return (
    <View style={styles.container}>
     {/* Image */}
     <Image 
     style={styles.image}
     source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
     />
     {/* Bed & Bedroom */}
     <Text style={styles.bedrooms}>
        1 Bed 1 Bedroom
     </Text>
     {/* Type & Description */}
     <Text style={styles.describtion}>
     Lorem Ipsum is simplyLorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
     </Text>
     {/*old price & new price */}
     <Text style={styles.prices}>
        <Text style={styles.oldPrice}>
          36$ 
        </Text>
        <Text style={styles.newPrice}>
           30$
        </Text>
        / night
     </Text>
     {/* Total price */}
     <Text style={styles.totalPrice}>
    360$ total
     </Text>
    </View>
  )
}

export default Post