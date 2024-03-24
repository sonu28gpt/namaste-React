import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearItems:(state,action)=>{
            state.items.length=0;
        },
        removeItem:(state,action)=>{
            const i=state.items.findIndex((e)=>{
                return e?.id===action.payload;
            });
            console.log(i);
            state.items.splice(i,1);
            
        }
    }
});


export const {addItem,clearItems,removeItem}=cartSlice.actions;
export default cartSlice.reducer;

