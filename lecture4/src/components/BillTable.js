import { useSelector } from "react-redux";
import BillTableRow from "./BillTableRow";

const BillTable=()=>{
    const cartItems=useSelector((store)=>store?.cart?.items);
    // console.log(cartItems)
    let totalPrice=0;
    return (
        <table className="border-2 border-solid border-black w-[100%] my-4">
            <tr>
                <th className="border-r-2 border-solid border-black">Item Name</th>
                <th className="border-r-2 border-solid border-black">Quantity</th>
                <th className="">Price</th>
            </tr>
            
            {cartItems.map((e)=>{
                const {Q}=e;
                const {price,defaultPrice}=e?.data;
                    if(price){
                        totalPrice+=Q*price/100;
                    }else{
                        totalPrice+=Q*defaultPrice/100;

                    }
                return <BillTableRow key={e?.id} data={e}/>
            })}
            <tr className=" border-t-2 border-solid border-black text-center">
                <td className="">Total Price:</td>
                <td className=" border-r-2 border-solid border-black"></td>
                <td className="">₹{totalPrice}</td>
            </tr>
        </table>
    );
}
export default BillTable;