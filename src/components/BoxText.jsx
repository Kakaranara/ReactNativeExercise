import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native"




/**
 * @param {Object} props - The component's props.
 * @param {string} props.name - The name to be displayed.
 * @param {StyleProp<ViewStyle>} props.style - Additional styles for the component.
 */
export default function BoxText({name, style}){
    return (
        <View style={[
            {backgroundColor:"#ADD", padding: 12, alignItems: "center"}, style]}>
            <Text>{name}</Text>
        </View>
    )
}