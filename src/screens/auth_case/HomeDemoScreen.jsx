import { Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authReducer, authSlice, loginThunk } from '../../lib/redux/reducers/authSlice'
import { useEffect } from "react";

export default function HomeDemoScreen({ navigation }) {

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Use effect home demo triggered");
        if(!authState.isLogin){
            navigation.goBack()
        }
    })


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', gap: 12 }}>
            <Button title="LOGOUT" onPress={() => {
                // navigation.back()
                dispatch(authSlice.actions.logout())
            }} />
            <Text>Login Status : {authState.isLogin.toString()}</Text>
        </View>
    )
}