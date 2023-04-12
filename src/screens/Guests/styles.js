import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
       
        justifyContent:'space-between',
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'lightgrey',
        marginHorizontal:20,
         },
button:{
    borderWidth:1,
    borderColor:'#676767',
    width:30,
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
}
})
export default styles