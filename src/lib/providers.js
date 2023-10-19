import { Provider } from "react-redux";
import { store } from "./redux/config/store";

export function ReduxsProvider({ children }) {
    //  console.log("STORE OBJECT PROPERTIES:");
    //     for (const key in store) {
    //         if (store.hasOwnProperty(key)) {
    //             console.log(key, store[key]);
    //         }
    //     }

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}