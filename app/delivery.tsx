import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Delivery() {

 return (
  <MapView
   style={{
    flex:1
   }}
   initialRegion={{
    latitude:43.238949,
    longitude:76.889709,
    latitudeDelta:0.05,
    longitudeDelta:0.05
   }}
  >
    <Marker
      coordinate={{
        latitude:43.238949,
        longitude:76.889709
      }}
    />
  </MapView>
 )
}