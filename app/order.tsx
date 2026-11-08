import {
 View,
 Text,
 TouchableOpacity
} from "react-native";

import { router } from "expo-router";

export default function Order() {

 return (
  <View style={{ flex:1,padding:20 }}>

   <Text
    style={{
     fontSize:28,
     fontWeight:"bold"
    }}
   >
    Order Summary
   </Text>

   <Text
    style={{
     marginTop:20
    }}
   >
    Caffe Mocha
   </Text>

   <Text>$4.53</Text>

   <TouchableOpacity
    onPress={() => router.push("/delivery")}
    style={{
      marginTop:40,
      backgroundColor:"#C67C4E",
      padding:18,
      borderRadius:15
    }}
   >
     <Text
      style={{
        color:"#fff",
        textAlign:"center"
      }}
     >
       Order
     </Text>
   </TouchableOpacity>

  </View>
 );
}
