import { Button, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import CounterButton from "../components/CounterButton"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { counterSlice } from "./../lib/redux/reducers/counterSlice"
import { testThunk } from "../lib/redux/reducers/thunk"



export default function CounterScreen() {
    const navigation = useNavigation()
    const selector = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const [num, setNum] = useState(4)

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 36, fontWeight: "bold", textAlign: "center" }}>DEMO REDUX</Text>
            <View style={{height: 24}} />
            <View style={styles.demoContainer}>
                <CounterButton titled={"MINUS"} onPresssed={() => { dispatch(counterSlice.actions.decrement()) }} />
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>{selector.value}</Text>
                <CounterButton titled={"PLUS"} onPresssed={() => { dispatch(counterSlice.actions.increment()) }} />
            </View>
            <View style={styles.otherContainer}>
                <TextInput style={styles.input} defaultValue={num.toString()} onChangeText={text => { if(text) setNum(Number(text))}} />
                <Button title="Add" onPress={() => {dispatch(counterSlice.actions.incrementWithValue(num))}} />  
                <Button title="AsyncAdd" onPress={() => {dispatch(testThunk(num))}} /> 
                <Button title="Add if odd" onPress={() => {dispatch(counterSlice.actions.incrementIfOdd(num))}}/>
            </View>
            <Text style={{textAlign: "center"}}>{selector.status}</Text>
            <Button title="Verify here" onPress={() => { navigation.navigate("Veryfier") }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        flex: 1,
    },
    demoContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#ddd",
        alignItems: "center"
    }, 
    otherContainer: {
        flexDirection: "row",
        backgroundColor: "#ddd",
        justifyContent:"center", 
        alignItems: "center", 
        gap: 7
    },
    input : {
        height: 42, 
        width: 40,
        borderWidth: 1,
        margin: 12
    }
})