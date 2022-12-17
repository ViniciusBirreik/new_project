import { Provider } from "react-redux";
import Routers from "./routes";
import store from "./store";

export default function App() {
    return(
        <Provider store={store}>
            <Routers/>
        </Provider>
    )
}