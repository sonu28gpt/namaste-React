import { useState } from "./../../node_modules/react";
import ItemCard from "./ItemCard";



const ItemAcrodian=(props)=>{
    const data=props.data;
    const {noheading,showContent,setshowContent,showContentValue}=props;
    // const noheading=props?.noheading;
    // console.log(noheading)
    // console.log(data);
    // const[showContent,setshowContent]=useState(false);
    // const showContent=props?.showContent;
    // const setshowContent=props?.setshowContent;
    // const showContentValue=props?.showContentValue;
    const acrodianShow= ()=>{
        if(showContentValue===data?.title){
            setshowContent(null);
        }else{
            setshowContent(data?.title);
        }
       };
    return (
        <div className={  noheading?'content-box   my-3 bg-white':'content-box   my-3 bg-white shadow-lg py-2 px-2'}>
            <div className="heading flex justify-between items-center cursor-pointer" onClick={
              acrodianShow
            }>
                <span className={noheading?null:'font-bold text-lg'}>{data.title}({data.itemCards.length})</span>
                <span>{showContent?"⬆":"⬇"}</span>
            </div>
            <div className="content">
                {   showContent?  data.itemCards.map((e)=>{
                        return <ItemCard key={e?.card?.info?.id} data={e?.card?.info}/>;
                        }):null
                }
            </div>
        </div>
    );
}
export default ItemAcrodian;