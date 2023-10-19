import { Button, Dimensions, StyleSheet, Text, View } from "react-native"

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
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
            <Button title="Go to Auth Screen" onPress={() => {
                navigation.push("Login")
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 22
    }
})