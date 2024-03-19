import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import AddCardSlice from "./AddCardSlice";



const store = configureStore({
    reducer: {
     
      Product: ProductSlice,
      cart: AddCardSlice,

    }

});


export default store;