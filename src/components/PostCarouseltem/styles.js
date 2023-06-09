import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container:{
       height:120,
      padding:5,
      shadowColor:'#000',
      textShadowOffset:{
        width:0,
        height:5,
      }
},
innerContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
    overflow:'hidden'
},
    image:{
        height:'100%',
        aspectRatio:1,
        resizeMode:'cover',
       
    },
    bedrooms:
    {
       marginVertical:10,
       color:'#5b5b5b'
    },
    describtion:
    {
        fontSize:15,
       
    },
    prices:{
      fontSize:15,
      marginVertical:10,
    },
    oldPrice:{
      color:'#5b5b5b',
      textDecorationLine:'line-through',
    },
    newPrice:{
    fontWeight:'bold',
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline',
    }



});

export default styles;