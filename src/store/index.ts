import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./reducers/cardsSlice";

export const setupStore = () => {
    return configureStore({
        reducer: {
            cardsReducer
        }
    })
}
