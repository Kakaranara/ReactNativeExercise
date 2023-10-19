import { Button, Dimensions, StyleSheet, Text, View } from "react-native"
import {authSlice} from './../lib/redux/reducers/authSlice'
import { useDispatch } from "react-redux"
export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.logout}>
                <Button title="Logout" onPress={() => {
                    dispatch(authSlice.actions.logout())
                }} />
            </View>
            <View style={styles.featureContainer}>
                <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Welcome adventurer</Text>
                <Button title="Go to counter screen" onPress={() => {
                    navigation.push("Counter")
                }} />
                <Button title="Go to styling screen" onPress={() => {
                    navigation.push("Styling")
                }} />
                <Button title="Go to FLEX-ing Screen" onPress={() => {
                    navigation.push("Flex")
                }} />
                <Button title="Go to REAL Screen" onPress={() => {
                    navigation.push("RealHome")
                }} />
                <Button title="Go to Hooks Screen" onPress={() => {
                    navigation.push("Hooks")
                }} />
                {/* <Button title="Go to Auth Screen" onPress={() => {
                    navigation.push("Login")
                }} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    featureContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22
    },
    logout: {
        alignSelf: 'flex-end',
        margin: 24
    }
})