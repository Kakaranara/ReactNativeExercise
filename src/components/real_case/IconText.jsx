import { View, StyleSheet, Text } from "react-native";

export default function IconText({icon, text, customStyles}) {
    return(
        <View style={[styles.container, customStyles]}>
            <View style={styles.iconDummy} />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding: 6,
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    iconDummy: {
        width: 30, 
        height: 30,
        borderRadius: 40,
        marginEnd: 8,
        backgroundColor: '#ddd'
    }
})