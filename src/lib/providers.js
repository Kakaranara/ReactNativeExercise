import { Provider } from "react-redux";
import { store } from "./redux/config/store";

export function ReduxsProvider({ children }) {

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}