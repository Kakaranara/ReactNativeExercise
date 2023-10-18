import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function CenterLoading() {
    return (
        <View style={style.container}>
            <ActivityIndicator size={"large"} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute', 
        height: "100%", 
        width: "100%", 
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center"
    }
})