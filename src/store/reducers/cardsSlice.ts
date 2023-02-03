import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../types";

interface IState {
    data: ICard[]
}

const initialState:IState = {
    data: []
}

export const cardsReducer = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state: IState, action) => {
            const {payload} = action 
            state.data.push(payload)
        },
        sortCards: (state: IState) => {
            state.data.sort((a , b) => a.field - b.field)
        },
        deleteCard: (state, action) => {
            const id = action.payload
            const index = state.data.findIndex(value => value.id === id)
            state.data.splice(index , 1)
        }
    }
})

export const { addCard , sortCards , deleteCard} = cardsReducer.actions
export default cardsReducer.reducer