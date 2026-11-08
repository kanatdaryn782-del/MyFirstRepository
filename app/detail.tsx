import {
 View,
 Text,
 Image,
 TouchableOpacity
} from "react-native";

export default function Detail() {
 return (
  <View style={{ flex:1,padding:20 }}>

   <Image
    source={require("../assets/coffee1.jpg")}
    style={{
     width:"100%",
     height:250,
     borderRadius:20
    }}
   />

   <Text
    style={{
      fontSize:28,
      fontWeight:"bold",
      marginTop:20
    }}
   >
    Caffe Mocha
   </Text>

   <Text>
    Rating 4.8 ⭐
   </Text>

   <Text style={{ marginTop:10 }}>
     Premium coffee with deep foam.
   </Text>

   <TouchableOpacity
    style={{
      backgroundColor:"#C67C4E",
      padding:18,
      borderRadius:15,
      marginTop:30
    }}
   >
      <Text
       style={{
         color:"#fff",
         textAlign:"center"
       }}
      >
        Buy Now
      </Text>
   </TouchableOpacity>

  </View>
 );
}