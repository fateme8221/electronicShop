import { Product, } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: Product = {
    id:'',
    title:'',
    price:0,
    count:0,
    img:''
}


export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return action.payload
        }
    }
})
export default productSlice.reducer;
export const { addProduct } = productSlice.actions