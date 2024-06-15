import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: boolean = false


export const loadSlice = createSlice({
    name: 'loadSlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            return (action.payload)
        }
    }
})
export default loadSlice.reducer;
export const { setLoading } = loadSlice.actions