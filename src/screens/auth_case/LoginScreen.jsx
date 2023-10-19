import { Button, View, Text } from "react-native";
import {authSlice, loginThunk} from './../../lib/redux/reducers/authSlice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function LoginScreen({navigation}) {
    
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log("Use effect login triggered");
        if(authState.isLogin === true){
            navigation.push("HomeDemo")
            console.log("Pushed!");
        }
    })

    return(
        <View style={{flex:1, justifyContent: "center", alignItems:'center', gap: 12}}>
            <Button title="LOGIN" onPress={() => {
                dispatch(loginThunk())
            }} />
            <Text>Is loading : {authState.isLoading.toString()}</Text>
            <Text>Login Status : {authState.isLogin.toString()}</Text>
        </View>
    )
}

// export default function LoginScreen() {
//     return(
//         <View style={{flex: 1, justifyContent: 'center', }}>

//         </View>
//     )
// }