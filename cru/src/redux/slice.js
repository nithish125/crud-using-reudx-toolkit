import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        setAddCart : [] ,
        edit:{},
        isEdit:true
    },
    reducers: {
        setAdd : (state , action) =>{
          state.setAddCart = action.payload
        },
        setEdit : (state , action) =>{
            state.edit = action.payload
          },
          setisEdit:(state , action) =>{
            state.isEdit = action.payload
          }
    }
     
})
export const {setAdd,setEdit,setisEdit} = cartSlice.actions
export default  cartSlice.reducer