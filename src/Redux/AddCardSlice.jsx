import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: []
}

const AddCardSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddItem: ( state, action ) => {
            state.carts = [ ...state.carts, action.payload ]
        }
    },
})


export const { AddItem } = AddCardSlice.actions;
export const selectcartItems = state => state.cart.carts;


export default AddCardSlice.reducer;
