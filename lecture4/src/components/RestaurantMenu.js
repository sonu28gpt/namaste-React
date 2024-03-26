
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemAcrodian from "./ItemAcrodian";
import CategoryAcrodian from "./CategoryAcrodian";
import { useState } from "react";



const RestaurantMenu=()=>{
  
   let {resId}=useParams();
   const resData=useRestaurantMenu(resId);
//    console.log(resData);
const[showContent,setshowContent]=useState("Recommended");
const[vegOnly,setvegOnly]=useState(false);
// console.log(vegOnly);
   
    if(resData.length===0){
        return <Shimmer/>;
    }
 const menuAcrodian=resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((section)=>{  return section?.card?.card?.title}).map((e)=>{
    return e.card.card;
});
        // console.log(menuAcrodian);

        return (
        <div className="body flex justify-center items-center  my-5">
            <div className="body-container w-[60%] ">
                <div className="res-info">
                    <h1 className="font-bold text-2xl mb-2">{resData[2]?.card?.card?.info?.name}</h1>
                    <h1 className="text-sm">{resData[2]?.card?.card?.info?.cuisines.join(' , ')}</h1>
                    <h1 className="text-sm">{resData[2]?.card?.card?.info?.avgRatingString + "rating"}</h1>
                    <h1 className="text-sm">{resData[2]?.card?.card?.info?.city}</h1>
                    <h1 className="text-sm">Cost For Two: ₹{resData[2]?.card?.card?.info?.costForTwo/100} Only</h1>
                </div>
                <div>
                    <button className={`p-2 m-2 border-2 border-solid border-pink-300 rounded-lg ${vegOnly===true?"bg-green-300":null}`} onClick={()=>{setvegOnly(!vegOnly)}}>Veg Only</button>
                </div>
                <div className="menuAcrodian bg-pink-100 py-2 ">
                {
                    menuAcrodian?.map((e,i)=>{
                        if(e.itemCards){
                           {/* console.log(e); */}
                            return <ItemAcrodian key={e?.title} data={e} showContent={(showContent===e?.title)?true:false} setshowContent={setshowContent } showContentValue={showContent} vegOnly={vegOnly}/>
                        }
                        if(e.categories){
                           
                            return <CategoryAcrodian key={e?.title} data={e} setshowContent={setshowContent} showContent={showContent} vegOnly={vegOnly}/>
                        }
                            
                        return null;
                    })
                }

                </div>

            </div>
        </div>
       );
    
       
}

export default RestaurantMenu;

