import { useDispatch, useSelector } from "react-redux";
import {CLOUDINARY_URL} from "./../utils/constant.js";
import { addItem, removeItem } from "../utils/cartSlice.js";

const ItemCard=(props)=>{
// console.log(props.data);
const data=props.data;
const {name,price,description,imageId,defaultPrice}=data;
const {vegClassifier}=data.itemAttribute;
function isPresentInCart() {
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems)
    const a=cartItems.find((e)=> e?.id===data?.id);
    // console.log(a);
    return ( a);
}
const cart=isPresentInCart();

const dispatch=useDispatch();
const handleAdd=()=>{
    dispatch(addItem({data,id:data?.id,Q:1}));
}

const  handleRemoveItem=()=>{
    dispatch(removeItem(data?.id));
}
   
    return (
        <div className="border-b-[1px] border-solid border-gray-400 py-4 flex justify-between">
            <div className="item-content w-[75%]">
               <span className="text-xs"> {vegClassifier==='VEG'?"🟢":"🔴"}</span>
                <h1 className="font-medium text-lg">{name}</h1>
                <h2>₹ {price?price/100:defaultPrice/100}</h2>
                <p className="text-gray-500 text-xs py-1">{description}</p>
              </div>


            <div className="item-image w-[20%] h-[140px] relative">
           {cart?
           <div className="w-[80%] p-2 bg-white text-pink-300 absolute bottom-1 left-4 shadow-md rounded-md  flex justify-around items-center" >
            <span className="cursor-pointer font-bold text-lg" onClick={handleRemoveItem}>-</span>
            <span>{cart?.Q}</span>
            <span className="cursor-pointer font-bold text-lg " onClick={handleAdd}>+</span>
           </div>
           : <span className="w-[80%] py-2 bg-white text-pink-300 text-center absolute bottom-1 left-4 shadow-md rounded-md cursor-pointer" onClick={handleAdd}>ADD +</span>}
            {imageId?<img src={CLOUDINARY_URL+imageId} className="h-[100%] w-[100%] object-cover rounded-md"/>:null}
                
            </div>

        
        </div>

    )
}
export default ItemCard;