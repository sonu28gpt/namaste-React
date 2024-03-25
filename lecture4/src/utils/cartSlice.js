import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // console.log(action.payload);
            const i=state.items.findIndex((e)=> e?.id=== action.payload.id);
            
            if(i!==-1){
                
                state.items[i].Q+=1;
            }else{

                state.items.push(action.payload);
            }
        },
        clearItems:(state,action)=>{
            state.items.length=0;
        },
        removeItem:(state,action)=>{
            const i=state.items.findIndex((e)=>{
                return e?.id===action.payload;
            });
            // console.log(i);
            const quantity=state.items[i].Q;
            if(quantity===1){

                state.items.splice(i,1);
            }else{
                state.items[i].Q-=1;
            }
            
        }
    }
});


export const {addItem,clearItems,removeItem}=cartSlice.actions;
export default cartSlice.reducer;

