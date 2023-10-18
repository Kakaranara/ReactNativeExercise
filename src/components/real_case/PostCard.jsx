import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, ToastAndroid } from "react-native";

export default function PostCard({ name, title, body, onPressed, clickable = true }) {
    return (
        <TouchableNativeFeedback
            onPress={onPressed}
            disabled={!clickable}>
            <View style={styles.container}>
                <Text style={styles.name}>Sender ID : {name}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ marginTop: 8 }}>{body}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 12,
        margin: 12,
        borderRadius: 12,
        backgroundColor: "#ddd"
    },
    name: {
        textAlign: 'right'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 6
    }
})