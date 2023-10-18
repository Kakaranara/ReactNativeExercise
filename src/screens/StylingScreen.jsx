import { Button, StyleSheet, Text, View } from "react-native";
import BoxText from "../components/BoxText";

export default function StylingScreen(){
  return(
    <View style={styles.container}>
        <BoxText name={"1"} style={styles.b1}/> 
        <BoxText name={"2"} style={styles.b2}/> 
        <BoxText name={"3"} style={styles.b3}/> 
        {/* <BoxText name={"4"} style={styles.b4}/>  */}
    </View>
  )  
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#dde",
        flexDirection : 'column',
        alignItems: 'stretch'
    },
     b1: {
      backgroundColor: 'green',
      flex :1
     },
     b2: {
      backgroundColor: 'red',
      flex:1
     },
     b3: {
      backgroundColor: 'yellow',
      flex: 1
     },
     b4: {
      backgroundColor: 'gray'
     }
})