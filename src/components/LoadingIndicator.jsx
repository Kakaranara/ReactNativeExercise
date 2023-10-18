import { ActivityIndicator, View } from "react-native"

export default function CustomLoading(){
    return(
        <View style={{position: "absolute", alignItems: "center", justifyContent: 'center'}}>
            <ActivityIndicator />
        </View>
    )
}