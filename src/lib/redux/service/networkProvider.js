import axios from "axios";
import {DUMMY_BASE_URL} from "../../../constants"
import { ToastAndroid } from "react-native";

/**
 * 
 * @param {string} path 
 * @param {string} method 
 * @returns {JsonObject}
 */
export async function performRequest(path, method = "GET"){
    if(method.toUpperCase() === 'POST'){

    }
    if(method.toUpperCase() == 'GET'){
        try{
            const data = await axios.get(`${DUMMY_BASE_URL}${path}`)
            return data.data
        }catch(error){
            console.log(error.message);
            ToastAndroid.show(`error occured : ${error.message}`, ToastAndroid.SHORT)
        }
    }
}