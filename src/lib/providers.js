import { Provider } from "react-redux";
import { persistor, store } from "./redux/config/store";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxsProvider({ children }) {

    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}