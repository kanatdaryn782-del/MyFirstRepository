import {
 View,
 Text,
 Image,
 TouchableOpacity
} from "react-native";

export default function CoffeeCard({ item, onPress }) {
 return (
  <TouchableOpacity
   onPress={onPress}
   style={{
    width:170,
    backgroundColor:"#FFF",
    borderRadius:20,
    padding:10,
    margin:8
   }}
  >
   <Image
    source={item.image}
    style={{
      width:"100%",
      height:120,
      borderRadius:15
    }}
   />

   <Text
    style={{
     fontSize:18,
     fontWeight:"600",
     marginTop:10
    }}
   >
    {item.name}
   </Text>

   <Text>${item.price}</Text>
  </TouchableOpacity>
 );
}