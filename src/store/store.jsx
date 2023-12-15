import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "../features/User/firstName";
import lastNameReducer from "../features/User/lastName";
import userNameReducer from "../features/User/userName";
import tokenReducer from "../features/Token/token";


export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        userName: userNameReducer,
        token: tokenReducer
    },
});