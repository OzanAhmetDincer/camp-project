import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

// export function configureStore(){
//     return createStore(rootReducer, devToolsEnhancer)
// }

const cfgstore = configureStore({
    reducer: rootReducer,
    devToolsEnhancer
})

export default cfgstore;