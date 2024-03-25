
const BillTableRow=(props)=>{
    const data=props?.data;
    const {Q}=data;
    const {name,defaultPrice,price}=data?.data;
    
return (
    <tr className="text-center border-t-2 border-solid border-black">
        <td className="border-r-2 border-solid border-black flex flex-col justify-center items-center">
            <span>{name}</span>
            <span>₹{defaultPrice?defaultPrice/100:price/100}</span>
        </td>
        <td className="border-r-2 border-solid border-black">{Q}</td>
        <td className="">₹{defaultPrice?Q*defaultPrice/100:Q*price/100}</td>
    </tr>
)
}
export default BillTableRow;