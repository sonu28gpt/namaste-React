import { useDispatch, useSelector } from "../../node_modules/react-redux";
import {  clearItems } from "../utils/cartSlice";
import ItemCard from "./ItemCard.js";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const handleClearCart=()=>{
        dispatch(clearItems());
    }
    return (
        <div className="flex items-center justify-center">
            <div className="w-[60%] ">

               <h1 className=" font-bold text-xl">Cart</h1>
               <button className="p-1 my-2 border-[2px] border-solid border-black rounded-lg" onClick={handleClearCart}>clear cart</button>
            
            <div className="content">
                {    cartItems.map((e)=>{
                        return <ItemCard key={e?.id} data={e} cart={true}/>;
                        })
                }
            </div>
            </div>
        </div>
    )
}
export default Cart;