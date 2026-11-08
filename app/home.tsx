import {
 View,
 Text,
 FlatList,
 TextInput
} from "react-native";

import { coffees } from "../constants/data";
import CoffeeCard from "../components/CoffeeCard";
import { router } from "expo-router";

export default function Home() {

 return (
  <View
   style={{
    flex:1,
    padding:20
   }}
  >
   <TextInput
    placeholder="Search coffee"
    style={{
      backgroundColor:"#eee",
      padding:14,
      borderRadius:12
    }}
   />

   <FlatList
    data={coffees}
    numColumns={2}
    renderItem={({ item }) => (
      <CoffeeCard
       item={item}
       onPress={() =>
        router.push("/detail")
       }
      />
    )}
   />
  </View>
 );
}