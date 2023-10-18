import { Button, Text, ToastAndroid } from "react-native";

export default function CounterButton({onPresssed, titled, navigation}){
    return (
        <Button title={titled} onPress={() => {
            // ToastAndroid.show("testing saja", ToastAndroid.SHORT)
            return onPresssed()
        }} /> 
    )
}