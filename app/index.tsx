import {
 View,
 Text,
 ImageBackground,
 TouchableOpacity
} from "react-native";
import { router } from "expo-router";

export default function Onboarding() {
 return (
   <ImageBackground
     source={require("../assets/coffee-bg.jpg")}
     style={{ flex: 1 }}
   >
     <View
      style={{
       flex:1,
       justifyContent:"flex-end",
       padding:30
      }}
     >
      <Text
       style={{
        color:"#fff",
        fontSize:36,
        fontWeight:"bold",
        textAlign:"center"
       }}
      >
       Fall in Love with Coffee in Blissful Delight!
      </Text>

      <TouchableOpacity
       onPress={() => router.push("/home")}
       style={{
        backgroundColor:"#C67C4E",
        padding:18,
        borderRadius:16,
        marginTop:30
       }}
      >
       <Text
        style={{
         color:"#fff",
         textAlign:"center",
         fontWeight:"600"
        }}
       >
         Get Started
       </Text>
      </TouchableOpacity>
     </View>
   </ImageBackground>
 );
}