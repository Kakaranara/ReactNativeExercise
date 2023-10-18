import { Text, View, StyleSheet } from "react-native";

export default function HookTesterScreen() {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>DEMO HOOKS</Text>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 8,
        backgroundColor: '#ddd',
        flexDirection: 'column',
    },
    title : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})