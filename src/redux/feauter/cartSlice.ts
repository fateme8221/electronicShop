import { Product, CartItem } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.find(pro => pro.product.id === action.payload.id)
            if(item) item.qty++
            else{
                state.push({
                    product:action.payload,
                    qty : 1
                })
            }
        },
        decrementProduct: (state, action: PayloadAction<Product>) => {
            const item = state.find(pro => pro.product.id === action.payload.id)
            if(item) {
                item.qty--
                if(item.qty === 0){
                   state = state.filter(pro => pro.product.id !== action.payload.id)
                }
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
           state = state.filter(pro => pro.product.id !== action.payload.id)
        }
    }
})
export default cartSlice.reducer;
export const { addToCart ,decrementProduct ,removeProduct } = cartSlice.actions