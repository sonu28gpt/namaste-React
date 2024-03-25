import { useDispatch, useSelector } from "../../node_modules/react-redux";
import {  clearItems } from "../utils/cartSlice";
import BillTable from "./BillTable.js";
import ItemCard from "./ItemCard.js";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    const handleClearCart=()=>{
        dispatch(clearItems());
    }
    return (
        <div className="flex items-center justify-center">
            <div className="w-[60%] ">

                    <h1 className=" font-bold text-xl">Cart</h1>
                    {cartItems.length!=0?<button className="p-1 my-2 border-[2px] border-solid border-black rounded-lg" onClick={handleClearCart}>clear cart</button>:"😑😑😑Looks like you have not added any item to cart"}
                    <div className="content">
                        {   
                            cartItems.map((e)=>{
                                return <ItemCard key={e?.id} data={e?.data} cart={true}/>;
                                })
                        }
                    </div>
                    {cartItems.length!==0?<BillTable/>:null}
            </div>
        </div>
    )
}
export default Cart;